import prisma from "@/lib/prisma";
import { UTApi } from "uploadthing/server";
import { normalizeUploadUrl } from "@/lib/uploadthing-utils";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("Authorization");

    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return Response.json(
        { message: "Invalid authorization header" },
        { status: 401 },
      );
    }

    const unusedMedia = await prisma.media.findMany({
      where: {
        postId: null,
        ...(process.env.NODE_ENV === "production"
          ? {
              createdAt: {
                lte: new Date(Date.now() - 1000 * 60 * 60 * 24),
              },
            }
          : {}),
      },
      select: {
        id: true,
        url: true,
      },
    });

    const keysToDelete = unusedMedia
      .map((m) => {
        try {
          const url = new URL(m.url);
          return url.pathname.split('/').pop();
        } catch (error) {
          console.error('Error processing URL:', m.url, error);
          return null;
        }
      })
      .filter((key): key is string => key !== null);

    if (keysToDelete.length > 0) {
      await new UTApi().deleteFiles(keysToDelete);
    }

    await prisma.media.deleteMany({
      where: {
        id: {
          in: unusedMedia.map((m) => m.id),
        },
      },
    });

    return new Response();
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

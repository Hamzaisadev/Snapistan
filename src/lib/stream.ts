import { StreamChat } from "stream-chat";

const streamServerClient = StreamChat.getInstance(
  process.env.NEXT_PUBLIC_STREAM_KEY!,
  process.env.GETSTREAM_SECRET,
);

export default streamServerClient;

import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from './navbar'
import Menubar from "./MenuBar";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const  session  = await validateRequest();

  if (!session.user) redirect("/login");

  return <SessionProvider value={session}>
    <div className="flex min-h-screen flex-col">
      <Navbar />
    <div className="max-w-7xl p-5 mx-auto flex w-full grow gap-5">
      <Menubar className="sticky top-[5.25rem] h-fit hidden sm:block flex-none space-y-3 rounded-2xl bg-card p-5 lg: px-5 shadow-sm xl:w-80" />
      {children}
      </div>
      <Menubar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden"/>

    </div>
    </SessionProvider>;
}
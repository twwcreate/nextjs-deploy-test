import Card from "./Card";
import Form from "./Form";
import { getServerSession } from "next-auth/next"
import { Options } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(Options);
  return (
    <main className="flex min-h-screen items-center justify-center">
      {
        session ? <Card user={session.user?.name}
         />:<Form/>
      }
    </main>
  );
}
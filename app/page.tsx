import Image from "next/image";
import { redirect, RedirectType } from 'next/navigation'
import Signup from "./signup/page";
import Login from "./login/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Login/>
      </main>
    </div>
  );
}

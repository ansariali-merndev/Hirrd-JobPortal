import Image from "next/image";
import Link from "next/link";
import { image } from "@/assets/companies";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header>
      <div className="grid-bg"></div>
      <nav className="flex justify-between items-center min-h-[10vh]">
        <Link href="/">
          <Image src={image.logo} alt="" height={40} />
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}

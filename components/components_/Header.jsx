"use client";

import Image from "next/image";
import Link from "next/link";
import { image } from "@/assets/companies";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Briefcase, Bookmark } from "lucide-react"; // using lucide icons

export default function Header() {
  return (
    <header>
      <div className="grid-bg"></div>
      <nav className="flex justify-between items-center min-h-[10vh] px-4">
        <Link href="/">
          <Image src={image.logo} alt="logo" height={40} />
        </Link>

        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>

        <SignedIn>
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Link
                label="Saved Jobs"
                href="/saved-job"
                labelIcon={<Bookmark size={18} />}
              />
              <UserButton.Link
                label="My Jobs"
                href="/my-jobs"
                labelIcon={<Briefcase size={18} />}
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </nav>
    </header>
  );
}

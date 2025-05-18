import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { image } from "@/assets/companies";

export default function Header() {
  return (
    <header>
      <div className="grid-bg"></div>
      <nav className="flex justify-between items-center min-h-[10vh]">
        <Link href="/">
          <Image src={image.logo} alt="" height={40} />
        </Link>
        <Button variant="outline">Login</Button>
      </nav>
    </header>
  );
}

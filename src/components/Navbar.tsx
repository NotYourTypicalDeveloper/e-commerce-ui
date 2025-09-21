import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Home } from "lucide-react";
import { Bell } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const navbar_icon_style = "w-4 h-4 text-gray-600";

  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* Left side */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="TrendLama"
          height={36}
          width={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          TRENDLAMA
        </p>
      </Link>

      {/* Right side  */}
      <div className="items-center flex gap-6">
        <SearchBar />
        <Link href="/">
          <Home className={navbar_icon_style} />
        </Link>
        <Bell className={navbar_icon_style} />
        <ShoppingCart className={navbar_icon_style} />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;

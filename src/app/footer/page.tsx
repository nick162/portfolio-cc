import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="border-t py-6 px-6 md:px-12 lg:px-24 text-center text-gray-500"
    >
      <div className="button-connect mb-5">
        <Link href={"http://github.com"} className="mr-2">
          <Button className="bg-black rounded-lg w-[80px] h-[40px] text-white font-semibold">
            GitHub
          </Button>
        </Link>
        <Link href={"http://linkedin.com"}>
          <Button className="bg-blue-500 rounded-lg w-[80px] h-[40px] text-white font-semibold">
            LinkedIn
          </Button>
        </Link>
        <Link href={"http://dribble.com"} className="ml-2">
          <Button className="bg-purple-400 rounded-lg w-[80px] h-[40px] text-white font-semibold">
            Dribble
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold flex items-center">
          Nick-Ind-Developer<span className="text-red-500">.</span>
        </h2>
        <p className="text-sm mt-1">azwarhanik3@gmail.com</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-4 text-xs">
        <span>© 2025 Nick. All rights reserved.</span>
        <a href="#" className="hover:underline">
          Terms of Services
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Connect with me
        </a>
      </div>
    </footer>
  );
};

export default Footer;

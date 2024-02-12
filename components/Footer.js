import Link from 'next/link';
import web8 from "../public/rainbow-light.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-black text-center py-4">
      <Image src={web8} width={"100%"}
                height={"100%"}/>
      <Link href="#">
        <p className="text-sm cursor-pointer">
          © {new Date().getFullYear()} idncod.
        </p>
      </Link>
    </footer>
  );
};

export default Footer;


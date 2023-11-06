import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-black text-center py-4">
      <Link href="#">
        <p className="text-sm cursor-pointer">
          © {new Date().getFullYear()} idncod.
        </p>
      </Link>
    </footer>
  );
};

export default Footer;


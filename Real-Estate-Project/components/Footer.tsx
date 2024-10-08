import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerData = [
    {
      name: "Properties",
      link: "/properties",
    },
    {
      name: "Terms & Conditions",
      link: "/terms",
    },
  ];
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 mt-24">
      <aside className="flex md:justify-between items-center w-full flex-col">
        <div className="flex justify-center items-center ">
          <Link href="/">
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
          {footerData.map((footer, index) => (
            <Link key={index} href={footer.link}>
              <p className="ml-4 text-dark hover:text-primary">{footer.name}</p>
            </Link>
          ))}
        </div>
        <p className="text-neutral-500">
          Copyright © {new Date().getFullYear()} - All right reserved by
          Property Finder Ltd.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

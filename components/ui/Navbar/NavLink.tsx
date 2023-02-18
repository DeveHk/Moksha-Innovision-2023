import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  className?: string;
  imgScale?: number;
  children: string;
  underlineclassName?: string;
};

const NavLink = (props: Props) => {
  const { href, className, imgScale, children, underlineclassName } = props;
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`link relative uppercase  ${
        router.asPath === href ? "text-3xl" : "text-xl"
      } ${className}`}
    >
      {children}
      {router.asPath === href && (
        <Image
          src="/underline.svg"
          width={100}
          height={20}
          alt={"underlien "}
          className={`b-2 absolute ${underlineclassName} scale-${
            imgScale || "150"
          } w-24`}
        />
      )}
    </Link>
  );
};

export default NavLink;
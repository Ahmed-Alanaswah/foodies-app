import Link from "next/link";
import ImgLogo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {
  // const paths = [
  //   { href: "/meals", children: "browse meals" },
  //   { href: "/community", children: "browse commuinty" },
  // ];
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={ImgLogo} alt="plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            {/* {paths.map((path, i) => (
              <li key={i}>
                <NavLink href={path.href}>{path.children}</NavLink>
              </li>
            ))} */}
            <li>
              <NavLink href="/meals">browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">browse commuinty</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

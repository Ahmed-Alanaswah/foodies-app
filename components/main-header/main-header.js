import Link from "next/link";
import ImgLogo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
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
            <li>
              <Link href="/meals">meals</Link>
            </li>
            <li>
              <Link href="/community">community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

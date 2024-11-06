import Image from "next/image";
import Logo from "../assets/logo.png";
import ProfilePic from "../assets/avatar.png";
import { SearchIcon } from "lucide-react";
import styles from "./TopNav.module.scss";
import { Down, Notification } from "../icons/Others";
import Link from "next/link";
import { memo } from "react";

const TopNav = () => {
  return (
    <div className={`${styles.container}`}>
      <Image src={Logo} width={114.8} height={30} alt="company_logo" />
      <div className={`${styles.input_container}`}>
        <input
          type="text"
          className={`${styles.input}`}
          placeholder="Search for anything"
        />
        <div className={`${styles.search_container}`}>
          <SearchIcon color="#fff" />
        </div>
      </div>
      <div className={`${styles.options_container}`}>
        <Link className={`${styles.docs_link}`} href={"/"}>
          Docs
        </Link>
        <Notification />
        <Image src={ProfilePic} width={48} height={48} alt="profile_pic" />
        <p className={`${styles.name}`}>Adedeji</p>
        <Down />
      </div>
    </div>
  );
};

export default  memo(TopNav);

"use client";
import localFont from "next/font/local";
import Image from "next/image";
import Logo from "../assets/logo.png";
import AuthImage from "../assets/login_image.png";
import styles from "./Auth.module.scss";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";

const myFont = localFont({
  src: "../../app/fonts/AvenirNextLTPro-Regular.otf",
});
const AuthPageContent = () => {
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={`${styles.container} ${myFont.className}`}>
      <Image
        className={`${styles.logo}`}
        src={Logo}
        width={138.44}
        height={37}
        alt="logo"
      />

      <div className={`${styles.form_container}`}>
        <Image src={AuthImage} width={600} height={337.57} alt="image" />
        <div className={`${styles.form_child}`}>
          <h1>Welcome!</h1>
          <p className={`${styles.text}`}>Enter details to login</p>
          <input
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
            placeholder="Email"
            className={`${styles.form_input}`}
            type={"text"}
          />
          <div className={`${styles.password_container}`}>
            <input
              className={`${styles.form_input}`}
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              placeholder="Password"
              type={type}
            />
            <p
              onClick={() => {
                setType(type == "text" ? "password" : "text");
              }}
            >
              SHOW
            </p>
          </div>
          <p className={`${styles.forgot_text}`}>FORGOT PASSWORD?</p>
          <Button
            asChild
            disabled={email.trim() == "" || password.trim() == ""}
            className={`${styles.login_btn}`}
          >
            <Link href={"/dashboard"}> LOG IN</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthPageContent;

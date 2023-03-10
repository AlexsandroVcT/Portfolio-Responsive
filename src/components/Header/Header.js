import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineQrcode,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <a style={{ display: "flex", alignItems: "center" }}>
        <img src="/Logo.png" height={70} width={70} />{" "}
      </a>{" "}
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Habilidades</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Sobre</NavLink>
        </Link>
      </li>
      <li>
        <a href="Footer">
          <NavLink>Blog</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/AlexsandroVcT" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/alexsandro-vicente/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.instagram.com/dev_alex.vct/"
        target="_blank"
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiOutlineQrcode size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

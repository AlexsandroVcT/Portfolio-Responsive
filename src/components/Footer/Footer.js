import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=5582981949926&text=%20Oi Alexsandro,%20%20Tudo bem? vim através do seu portfólio">
            Whatsapp
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:alex@devproject.com.br">
            alex@devproject.com.br
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            &copy; 2023{" "}
            <Link
              href="https://www.instagram.com/dev_alex.vct/"
              target="_blank"
            >
              {" "}
              Alexsandro vct
            </Link>{" "}
            . Todos os direitos reservados.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
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
          <SocialIcons href="https://twitter.com/Alexsandro_vc" target="_blank">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

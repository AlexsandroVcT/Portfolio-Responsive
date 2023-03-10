import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bem-vindo(a) ao meu portfólio!,
        </SectionTitle>
        <SectionText>
          Olá! Meu nome é Alexsandro e eu sou um desenvolvedor web apaixonado
          por criar soluções inovadoras e elegantes para a web. Neste portfolio,
          você vai encontrar alguns dos meus projetos mais recentes e
          interessantes que eu fiz usando tecnologias como Next.js, React,
          Node.js, MongoDB e muito mais. Espero que você goste do meu trabalho e
          fique à vontade para entrar em contato comigo se você tiver alguma
          dúvida ou sugestão. Obrigado pela sua visita
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.open("/files/curriculo.pdf", "_blank");
          }}
        >
          Meu Currículo
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

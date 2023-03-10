import { DiAndroid, DiTerminal } from "react-icons/di";
import { SiJavascript, SiFirebase, SiGit } from "react-icons/si";
import { RiReactjsFill, RiHtml5Line, RiCss3Fill } from "react-icons/ri";

export const Skills = [
  {
    slug: "html",
    Component: RiHtml5Line,
    title: "HTML5",
    Description: () => (
      <>
        Se você procura um desenvolvedor web habilidoso em HTML5, eu sou a
        escolha certa. Combinando meu conhecimento em HTML5 com outras
        tecnologias web, sou capaz de criar soluções web modernas e eficientes
        que atendem às necessidades específicas de cada projeto.
      </>
    ),
  },
  {
    slug: "css3",
    Component: RiCss3Fill,
    title: "CSS3",
    Description: () => (
      <>
        Tenho habilidades em diferentes técnicas avançadas de CSS3, incluindo
        seletores, pseudo-classes, pseudo-elementos, media queries, animações,
        transições, gradientes e sombras, permitindo-me criar layouts e estilos
        personalizados para diferentes dispositivos e tamanhos de tela.
      </>
    ),
  },
  {
    slug: "javascript",
    Component: SiJavascript,
    title: "Javascript",
    Description: () => (
      <>
        Eu sou um desenvolvedor web experiente e habilidoso em JavaScript, a
        linguagem de programação mais utilizada para desenvolvimento web. Com
        meu conhecimento em JavaScript, sou capaz de criar soluções web
        altamente interativas e eficazes, utilizando técnicas modernas para
        garantir uma ótima experiência do usuário.
      </>
    ),
  },
  {
    slug: "react",
    Component: RiReactjsFill,
    title: "ReactJS",
    Description: () => (
      <>
        Com a utilização de recursos avançados em ReactJS, como React Hooks,
        Redux e Next.js, sou capaz de criar aplicações escaláveis com interface
        de usuário intuitiva, desde sites simples até aplicativos web mais
        complexos com gerenciamento de estado, integração com APIs externas e
        armazenamento de dados em tempo real.{" "}
      </>
    ),
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => (
      <>
        Com o Firebase Authentication, sou capaz de integrar a autenticação de
        usuários em meus aplicativos web, oferecendo aos usuários uma
        experiência de login fácil e segura. Além disso, também tenho
        habilidades em Cloud Storage, permitindo-me armazenar e recuperar
        arquivos de forma eficiente e escalável.
      </>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>
        experiente e habilidoso em Git, uma ferramenta de controle de versão
        amplamente utilizada em projetos de desenvolvimento de software. Com meu
        conhecimento em Git, sou capaz de gerenciar efetivamente o fluxo de
        trabalho do projeto e colaborar de forma eficaz com outros
        desenvolvedores.
      </>
    ),
  },
];

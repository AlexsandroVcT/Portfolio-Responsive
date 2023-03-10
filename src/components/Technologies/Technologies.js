import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { Skills } from "./Skills";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Habilidades</SectionTitle>
    <SectionText>
      Com habilidades avançadas em programação e design, sou capaz de criar
      websites elegantes e funcionais que atendem às necessidades dos meus
      clientes e excedem suas expectativas.
    </SectionText>
    <List>
      {Skills.map((Skill) => (
        <ListItem key={Skill.slug}>
          <picture>
            <Skill.Component size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{Skill.title}</ListTitle>
            <ListParagraph>
              <Skill.Description />
            </ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

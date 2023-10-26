// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio-pietromartines`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Hello, my name is {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Welcome{" "}
              <Text as="span" type="heading1" color="brand1">
                to
              </Text>{" "}
              my{" "}
              <Text as="span" type="heading1" color="brand1">
                developer
              </Text>{" "}
              portfolio!
            </Text>
            <Text type="body1" color="grey2">
              My name is Pietro Martines, born and raised in Campinas where he
              has lived to this day. I am 21 years old, I have a degree in
              Mechatronics Technician from Bento Quirino, where my passion for
              technology and interest in programming studies arose, leading to
              integration into the Systems Analysis and Development degree at
              Unip. However, while I was looking for an internship, I applied
              for an internship at Unicamp and ended up working in the Computer
              Support area and in doing so distanced myself from the development
              area, but the desire to specialize in this field never stopped.
              After my training, I continued working in the Support Area at
              CPFL, an energy company in Campinas. Shortly after my dismissal, I
              began my search for colleges or courses that would train me as a
              Developer and that was when I discovered Kenzie, who opened my
              eyes to the great training opportunities she offers. Since joining
              Kenzie, I feel that my learning is gradually evolving and I feel
              that the Developer position is getting closer and closer. Welcome
              to my professional portfolio.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};

import { Divider, HStack } from "@chakra-ui/layout";
import { Box, VStack, Container, Tabs, Icon, Text } from "@chakra-ui/react";
import Headline from "../Headline/Headline";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";
import GreetingText from "../GreetingText/GreetingText";
import TechStack from "../TechStack/TechStack";
import Education from "../Education/Education";
import GitHubRepos from "../GithubRepos/GithubRepos";
import { FaBriefcase, FaGithub, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Container
      maxW="container.md"
      py={10}
      px={6}
      bg="gray.800"
      color="gray.200"
      borderRadius="xl"
      boxShadow="xl"
      my={10}
    >
      <VStack gap={8} align="center">
        <HStack gap={100} align="center" justifyContent="center">
          {" "}
          <Headline />
          <GreetingText />
        </HStack>
        <TechStack />
        <Divider borderColor="gray.600" my={4} />

        <Tabs.Root
          variant="enclosed"
          w="100%"
          colorScheme="teal"
          defaultValue={"ProfExp"}
        >
          <Tabs.List>
            <Tabs.Trigger
              value="ProfExp"
              _selected={{ color: "teal.300", bg: "gray.700" }}
            >
              {" "}
              <HStack spacing={2}>
                <Icon as={FaBriefcase} />
                <Text>Professional Experience</Text>
              </HStack>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="Education"
              _selected={{ color: "teal.300", bg: "gray.700" }}
            >
              {" "}
              <HStack spacing={2}>
                <Icon as={FaGraduationCap} />
                <Text>Education</Text>
              </HStack>
            </Tabs.Trigger>
            <Tabs.Trigger
              value="GitHubRepos"
              _selected={{ color: "teal.300", bg: "gray.700" }}
            >
              {" "}
              <HStack spacing={2}>
                <Icon as={FaGithub} />
                <Text>GitHub Repos</Text>
              </HStack>
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="ProfExp">
            <Box p={4} bg="gray.700" borderRadius="md" boxShadow="dark-lg">
              {" "}
              <ProfessionalExperience />
            </Box>
          </Tabs.Content>
          <Tabs.Content value="Education">
            <Box p={4} bg="gray.700" borderRadius="md" boxShadow="dark-lg">
              <Education />
            </Box>
          </Tabs.Content>
          <Tabs.Content value="GitHubRepos">
            <Box p={4} bg="gray.700" borderRadius="md" boxShadow="dark-lg">
              <GitHubRepos />
            </Box>
          </Tabs.Content>
        </Tabs.Root>
      </VStack>
    </Container>
  );
};

export default AboutMe;

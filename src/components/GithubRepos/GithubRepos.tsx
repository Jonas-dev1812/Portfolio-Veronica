import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";

const getLanguageColor = (language: string) => {
  switch (language) {
    case "TypeScript":
      return "blue.400";
    case "JavaScript":
      return "yellow.400";
    case "React":
      return "cyan.400";
    case "CSS":
      return "purple.400";
    case "HTML":
      return "orange.400";
    case "PHP":
      return "purple.400";
    default:
      return "gray.400";
  }
};

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/Jonas-dev1812/repos"
        );
        if (!response.ok) {
          throw new Error(`GitHub API Fehler: ${response.statusText}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <Text>Lade Repositories...</Text>;
  }

  if (error) {
    return <Text color="red.500">Error on loading Repositories: {error}</Text>;
  }

  return (
    <Card.Root w="100%" bg="gray.700" borderRadius="lg" boxShadow="dark-lg">
      <CardHeader pb={0}>
        <Heading as="h2" size="lg" mb={4} color="teal.300">
          My GitHub Repositories
        </Heading>
      </CardHeader>
      <CardBody pt={2}>
        <VStack gap={6} align="stretch">
          {repos.map((repo: any, index: number) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 0 15px ${getLanguageColor(
                  repo.language
                )}, 0 0 25px ${getLanguageColor(repo.language)}`,
              }}
            >
              <Card.Root bg="gray.800" borderRadius="md" p={4} boxShadow="md">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                >
                  <Heading
                    as="h3"
                    size="md"
                    color="gray.100"
                    mb={2}
                    _hover={{ color: "teal.300" }}
                  >
                    {repo.name}
                  </Heading>
                </Link>
                <Text fontSize="sm" color="gray.300" mb={3}>
                  {repo.description}
                </Text>
                <HStack justify="space-between" align="center" wrap="wrap">
                  <HStack gap={4}>
                    <Tag.Root
                      size="sm"
                      variant="solid"
                      bg={getLanguageColor(repo.language)}
                    >
                      <TagLabel>{repo.language}</TagLabel>
                    </Tag.Root>
                    <HStack gap={1} color="gray.400">
                      <Icon as={FaStar} />
                      <Text fontSize="sm">{repo.stargazers_count}</Text>
                    </HStack>
                    <HStack gap={1} color="gray.400">
                      <Icon as={GoGitBranch} />
                      <Text fontSize="sm">{repo.forks_count}</Text>
                    </HStack>
                  </HStack>
                  <Text fontSize="xs" color="gray.500">
                    Last updated:{" "}
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </Text>
                </HStack>
              </Card.Root>
            </motion.div>
          ))}
        </VStack>
      </CardBody>
    </Card.Root>
  );
}

export default GitHubRepos;

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";

function Education() {
  return (
    <Card.Root w="100%" bg="gray.700" borderRadius="lg" boxShadow="dark-lg">
      <CardHeader pb={0}>
        <Heading as="h2" size="lg" mb={4} color="teal.300">
          Education
        </Heading>
      </CardHeader>
      <CardBody pt={2}>
        <HStack gap={8} justify="center" align="flex-start" wrap="wrap">
          {" "}
          {/* EAE Business School */}
          <VStack align="center" gap={2} p={4}>
            <Link href="https://www.eae.es/en" target="_blank">
              <Image
                src="eae_business_school_logo.png"
                alt="EAE Business School Logo"
                boxSize="100px"
                objectFit="contain"
                borderRadius="full"
              />
            </Link>
            <Text fontWeight="bold" color="gray.200" textAlign="center">
              EAE Business School
            </Text>
            <Text fontSize="sm" color="gray.400" textAlign="center">
              Master of Business Administration - MBA
            </Text>
            <Text fontSize="sm" color="gray.400" textAlign="center">
              Nov. 2022–Mai 2024
            </Text>
          </VStack>
          {/* Universidad Metropolitana (VE) */}
          <VStack align="center" gap={2} p={4}>
            <Link href="https://www.unimet.edu.ve/" target="_blank">
              <Image
                src="unimet_ve_logo.png"
                alt="Universidad Metropolitana Logo"
                boxSize="100px"
                objectFit="contain"
                borderRadius="full"
              />
            </Link>
            <Text fontWeight="bold" color="gray.200" textAlign="center">
              Universidad Metropolitana (VE)
            </Text>
            <Text fontSize="sm" color="gray.400" textAlign="center">
              Engineer's degree, Chemical Engineering
            </Text>
            <Text fontSize="sm" color="gray.400" textAlign="center">
              2016–2020
            </Text>
          </VStack>
        </HStack>
      </CardBody>
    </Card.Root>
  );
}

export default Education;

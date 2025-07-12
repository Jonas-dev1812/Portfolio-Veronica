import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
  Icon,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

const MotionLink = motion(Link);

function ProfessionalExperience() {
  return (
    <Card.Root w="100%" bg="gray.700" borderRadius="lg" boxShadow="dark-lg">
      <CardHeader pb={0}>
        <Heading as="h2" size="lg" color="teal.300">
          Professional Experience
        </Heading>
      </CardHeader>
      <CardBody pt={2}>
        <VStack gap={6} align="flex-start">
          {/* RTM GROUP BV - Planning Engineer */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="https://group-rtm.com/"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="rtm_group_bv_logo.png"
                  alt="RTM Group Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color="gray.200">
                  RTM GROUP BV
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color="gray.400">
              Fulltime · 3 Years 7 Month
            </Text>
            <Text fontSize="sm" color="gray.400">
              Germany
            </Text>
            <Text fontWeight="bold" color="gray.200" mt={2}>
              Planing Engineer
            </Text>
            <Text fontSize="sm" color="gray.400">
              Sept. 2024–Today · 11 Month
            </Text>
          </Box>

          {/* RTM GROUP BV - Junior Engineering */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="https://group-rtm.com/"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="rtm_group_bv_logo.png"
                  alt="RTM Group Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color="gray.200">
                  RTM GROUP BV
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color="gray.400">
              Germany
            </Text>
            <Text fontWeight="bold" color="gray.200" mt={2}>
              Junior Engineering
            </Text>
            <Text fontSize="sm" color="gray.400">
              Jan. 2022–Aug. 2024 · 2 Years 8 Month
            </Text>
          </Box>

          {/* Cognizant - Content Moderator */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="https://www.cognizant.com/de/de"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="cognizant_logo.png"
                  alt="Cognizant Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color="gray.200">
                  Content Moderator
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color="gray.400">
              Cognizant · Full time
            </Text>
            <Text fontSize="sm" color="gray.400">
              Sept. 2020–Jan. 2022 · 1 Year 5 Month
            </Text>
            <Text fontSize="sm" color="gray.400">
              Budapest, Hungary
            </Text>
          </Box>

          {/* Total - Planning and Economic Analyst */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="https://totalenergies.de/"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="totalenergies_logo.png"
                  alt="Total Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color="gray.200">
                  Planning and Economic Analyst
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color="gray.400">
              Total · Internship
            </Text>
            <Text fontSize="sm" color="gray.400">
              March 2019–Oct. 2019 · 8 Month
            </Text>
            <Text fontSize="sm" color="gray.400">
              Caracas, Distrikt Capital, Venezuela
            </Text>
            <List.Root gap={0} mt={1}>
              <ListItem color="gray.300">
                <Icon as={MdCheckCircle} color="green.300" />
                Planning and Economics Analysis.
              </ListItem>
            </List.Root>
          </Box>

          {/* Aurora Studio - Software Programmer */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="#"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="aurora_studio_tech_logo.png"
                  alt="Aurora Studio Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color="gray.200">
                  Software Developer
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color="gray.400">
              Aurora Studio · Part time
            </Text>
            <Text fontSize="sm" color="gray.400">
              Oct. 2018–March 2019 · 6 Month
            </Text>
            <Text fontSize="sm" color="gray.400">
              Caracas, Distrikt Capital, Venezuela
            </Text>
            <List.Root gap={0} mt={1}>
              <ListItem color="gray.300">
                <Icon as={MdCheckCircle} color="green.300" />
                Web pages front-end development.
              </ListItem>
              <ListItem color="gray.300">
                <Icon as={MdCheckCircle} color="green.300" />
                Web Development and JavaScript, HTML and CSS.
              </ListItem>
            </List.Root>
          </Box>

          {/* Inmuno XXI Laboratory - Project Development Engineer */}
          <Box>
            <MotionLink
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              href="https://inmuno21.com/en/"
              target="_blank"
              display="inline-block"
            >
              <HStack align="center" gap={2}>
                <Image
                  src="ImmunoXXL_Laboratory.png"
                  alt="Inmuno XXI Logo"
                  boxSize="30px"
                  borderRadius="md"
                />
                <Text fontWeight="bold" color="gray.200">
                  Project Development Engineer
                </Text>
              </HStack>
            </MotionLink>
            <Text fontSize="sm" color="gray.400">
              Inmuno XXI Laboratory · Internship
            </Text>
            <Text fontSize="sm" color="gray.400">
              Jan. 2018–Oct. 2018 · 10 Month
            </Text>
            <Text fontSize="sm" color="gray.400">
              Caracas, Distrikt Capital, Venezuela
            </Text>
            <List.Root gap={0} mt={1}>
              <ListItem color="gray.300">
                <Icon as={MdCheckCircle} color="green.300" />
                Development of optimization projects in the customer service
                process, sample analysis process and delivery of results
                process.
              </ListItem>
            </List.Root>
          </Box>
        </VStack>
      </CardBody>
    </Card.Root>
  );
}

export default ProfessionalExperience;

import { Box, Text, Link, Icon } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useState } from "react";
import { HStack } from "@chakra-ui/layout";
import { MdClose } from "react-icons/md";
import LegalNotice from "../LegalNotice/LegalNotice";

function Footer() {
  const footerBg = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const linkColor = useColorModeValue("teal.600", "teal.300");
  const modalOverlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.6)",
    "rgba(0, 0, 0, 0.8)"
  );
  const modalContentBg = useColorModeValue("white", "gray.700");
  const closeIconColor = useColorModeValue("gray.600", "gray.400");

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Box
        as="footer"
        w="100%"
        p={4}
        mt={4}
        bg={footerBg}
        color={textColor}
        textAlign="center"
        borderRadius="lg"
        boxShadow="md"
      >
        <Text fontSize="sm">
          © {new Date().getFullYear()} Maria Veronica Cardenas Dallos. All
          rights reserved.
        </Text>
        <Link
          onClick={onOpen}
          color={linkColor}
          fontSize="sm"
          ml={2}
          _hover={{ textDecoration: "underline" }}
          cursor="pointer"
        >
          Impressum
        </Link>
      </Box>

      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg={modalOverlayBg}
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="modal"
          onClick={onClose}
        >
          <Box
            bg={modalContentBg}
            borderRadius="lg"
            boxShadow="xl"
            p={6}
            minW={{ base: "90%", sm: "400px", md: "500px" }}
            maxW="500px"
            position="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <HStack justifyContent="flex-end" alignItems="center" mb={4}>
              <Icon
                as={MdClose}
                boxSize={6}
                alignSelf={"right"}
                color={closeIconColor}
                cursor="pointer"
                onClick={onClose}
                _hover={{ opacity: 0.7 }}
              />
            </HStack>

            {/* Modal Body */}
            <LegalNotice />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Footer;

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
          width={{ base: "100%", md: "100vw" }} // NEU: 100vw auf Mobil, feste Breite auf Desktop
          height={{ base: "100%", md: "100vh" }}
          bg={modalOverlayBg}
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={9999}
          onClick={onClose} // Schließt das Modal, wenn auf das Overlay geklickt wird
        >
          {/* Die Box, die den eigentlichen Modal-Inhalt darstellt */}
          <Box
            bg={modalContentBg} // Hintergrundfarbe für den Inhalt
            borderRadius={{ base: "none", md: "lg" }} // NEU: Kein Border Radius auf Mobil
            boxShadow={{ base: "none", md: "xl" }} // NEU: Kein Schatten auf Mobil
            p={{ base: 4, md: 6 }} // Padding responsiv gestalten
            width={{ base: "100%", md: "500px" }} // NEU: 100vw auf Mobil, feste Breite auf Desktop
            height={{ base: "100%", md: "auto" }} // NEU: 100vh auf Mobil, auto Höhe auf Desktop
            minW={{ base: "100%", md: "400px" }} // NEU: minW 100vw auf Mobil
            maxW={{ base: "100%", md: "500px" }} // NEU: maxW 100vw auf Mobil
            maxH={{ base: "100%", md: "80vh" }} // NEU: maxH 100vh auf Mobil, 80vh auf Desktop
            position="relative"
            onClick={(e) => e.stopPropagation()} // Klick-Propagation stoppen, damit das Modal nicht schließt
            overflowY="auto" // Ermöglicht Scrollen, wenn Inhalt die maxH überschreitet
          >
            {/* Dein benutzerdefinierter Header mit dem Schließen-Icon */}
            <HStack justifyContent="flex-end" alignItems="center" mb={4}>
              {/* Optional: Wenn du einen Titel im Header haben möchtest, hier einfügen */}
              {/* <Text fontSize="xl" fontWeight="bold" color={modalHeaderColor}>Impressum</Text> */}
              <Icon
                as={MdClose}
                boxSize={6}
                color={closeIconColor}
                cursor="pointer"
                onClick={onClose} // Schließt das Modal
                _hover={{ opacity: 0.7 }}
              />
            </HStack>

            {/* Der Inhalt des Modals (LegalNotice Komponente) */}
            <LegalNotice />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Footer;

import { HStack, Link, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { useColorModeValue } from "../ui/color-mode";

const MotionLink = motion(Link);

function SocialMedia() {
  const iconColor = useColorModeValue("gray.600", "gray.300");

  return (
    <HStack gap={4} position="absolute" top="4" right="4" zIndex="tooltip">
      {/* Instagram */}
      <MotionLink
        href="https://www.instagram.com/verocardenasd"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        color={iconColor}
        _hover={{
          color: "#E1306C",
        }}
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        <Icon as={FaInstagram} boxSize={6} />
      </MotionLink>

      {/* LinkedIn */}
      <MotionLink
        href="https://www.linkedin.com/in/mveronica-cardenas"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        color={iconColor}
        _hover={{
          color: "#0A66C2",
        }}
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        <Icon as={FaLinkedinIn} boxSize={6} />{" "}
      </MotionLink>

      {/* Facebook */}
      <MotionLink
        href="https://www.facebook.com/your_facebook_id"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        color={iconColor}
        _hover={{
          color: "#1877F2",
        }}
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        <Icon as={FaFacebookF} boxSize={6} />{" "}
      </MotionLink>

      {/* Github */}
      <MotionLink
        href="https://www.github.com/your_github_id"
        target="_blank"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        color={iconColor}
        _hover={{
          color: "#000000",
        }}
        _focus={{
          boxShadow: "none",
          outline: "none",
        }}
      >
        <Icon as={FaGithub} boxSize={6} />{" "}
      </MotionLink>
    </HStack>
  );
}

export default SocialMedia;

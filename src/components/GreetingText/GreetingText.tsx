import { Heading, Text, VStack, chakra } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useColorMode, useColorModeValue } from "../ui/color-mode";
import { useLanguage } from "../../contexts/LanguageContext";
import greetingContent from "../../translations/greeting.json";

const MotionSpan = motion(chakra.span);

function GreetingText() {
  const { toggleColorMode, colorMode } = useColorMode();
  const controls = useAnimation();
  const headingColor = useColorModeValue("gray.800", "gray.200");
  const textColor = useColorModeValue("gray.600", "gray.300");

  const { language } = useLanguage();

  const content = greetingContent[language];

  const darkFlashAnimation = async () => {
    while (true) {
      await controls.start({
        opacity: 1,
        color: "#FFFFCC",
        textShadow:
          "0 0 30px #FFFFCC, 0 0 50px #FFFFCC, 0 0 70px #FFFFCC, 0 0 90px #FFFFCC",
        transition: { duration: Math.random() * 5, ease: "linear" }, //Starts random
      });

      const numFlashes = Math.random() < 0.3 ? 3 : 1; // 30 % off 3 Times flicker
      for (let i = 0; i < numFlashes; i++) {
        await controls.start({
          opacity: 0.05,
          color: "gray.900",
          textShadow: "none",
          transition: { duration: 0.05, ease: "linear" }, // Fast "off"-Phase
        });
        await controls.start({
          opacity: 1,
          color: "#FFFFCC",
          textShadow:
            "0 0 30px #FFFFCC, 0 0 50px #FFFFCC, 0 0 70px #FFFFCC, 0 0 90px #FFFFCC",
          transition: { duration: 0.05, ease: "linear" }, // Fast "on"-Phase
        });
        // Short Breaks between flicker
        if (i < numFlashes - 1) {
          await new Promise((resolve) =>
            setTimeout(resolve, Math.random() * 150 + 150)
          ); // Random Breaks
        }
      }

      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 2000 + 5000)
      ); // Random Breaks
    }
  };

  // useEffect to Control animation
  useEffect(() => {
    if (colorMode === "dark") {
      controls.stop();
      const timer = setTimeout(() => {
        darkFlashAnimation();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      controls.stop();
      controls.set({ color: "gray.800", textShadow: "none", opacity: 1 });
    }
    return () => {
      controls.stop();
    };
  }, [colorMode, controls]);

  return (
    <VStack align="flex-start" gap={4}>
      <Heading
        as="h1"
        size={"xl"}
        color={headingColor}
        textAlign={{ base: "center", md: "left" }}
      >
        Hi, I´m{" "}
        <chakra.span display="inline-block" whiteSpace="nowrap">
          {colorMode === "light" ? (
            <chakra.span
              key="veronica-light"
              color="gray.800"
              textShadow="none"
              fontFamily="Rouge Script, cursive"
              fontSize={100}
              style={{ display: "inline-block", cursor: "pointer" }}
              onClick={toggleColorMode}
            >
              Veronica
            </chakra.span>
          ) : (
            <MotionSpan
              key="veronica-dark"
              animate={controls}
              fontFamily="Rouge Script, cursive"
              fontSize={100}
              style={{ display: "inline-block", cursor: "pointer" }}
              onClick={toggleColorMode}
            >
              Veronica
            </MotionSpan>
          )}{" "}
          !
        </chakra.span>
      </Heading>
      <Text
        fontSize="lg"
        color={textColor}
        textAlign={{ base: "center", md: "left" }}
      >
        {content.text}
        I'm a passionate Frontend Developer with a strong focus on modern web
        technologies like React and TypeScript. My goal is to create intuitive
        and user-friendly interfaces that are both functional and aesthetically
        pleasing. I love solving complex problems and continuously expanding my
        knowledge.
      </Text>
    </VStack>
  );
}

export default GreetingText;

import { Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

function GreetingText() {
  return (
    <VStack align="flex-start" gap={4}>
      {" "}
      {/* VStack für Begrüßung und Einleitungstext */}
      <Heading
        as="h1"
        size={"xl"}
        color="gray.200"
        textAlign={{ base: "center", md: "left" }}
      >
        Hi, I´m{" "}
        <motion.span // motion.span für die Animation verwenden
          initial={{
            opacity: 1,
            color: "#FFFFCC",
            textShadow: "0 0 20px #FFFFCC, 0 0 35px #FFFFCC, 0 0 45px #FFFFCC",
          }} // Startzustand: sichtbar, hellgelb mit starkem Leuchten
          animate={{
            opacity: [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1], // Lange sichtbare Phasen, dann 3 schnelle Dips zu 0 für Blitze
            color: [
              "#FFFFCC",
              "#FFFFCC",
              "transparent",
              "#FFFFCC", // Erster Blitz zu transparent
              "#FFFFCC",
              "transparent",
              "#FFFFCC", // Zweiter Blitz zu transparent
              "#FFFFCC",
              "transparent",
              "#FFFFCC",
              "#FFFFCC", // Dritter Blitz zu transparent
            ],
            textShadow: [
              "0 0 20px #FFFFCC, 0 0 35px #FFFFCC, 0 0 45px #FFFFCC", // Starkes Leuchten
              "0 0 20px #FFFFCC, 0 0 35px #FFFFCC, 0 0 45px #FFFFCC", // Starkes Leuchten
              "0 0 0px #FFFFCC", // Kein Schatten während des Blitzes
              "0 0 20px #FFFFCC, 0 0 35px #FFFFCC, 0 0 45px #FFFFCC", // Zurück zum Leuchten
              "0 0 20px #FFFFCC, 0 0 35px #FFFFCC, 0 0 45px #FFFFCC", // Starkes Leuchten
              "0 0 0px #FFFFCC", // Kein Schatten während des Blitzes
              "0 0 20px #FFFFCC, 0 0 35px #FFFFCC, 0 0 45px #FFFFCC", // Zurück zum Leuchten
              "0 0 20px #FFFFCC, 0 0 35px #FFFFCC, 0 0 45px #FFFFCC", // Starkes Leuchten
              "0 0 0px #FFFFCC", // Kein Schatten während des Blitzes
              "0 0 20px #FFFFCC, 0 0 35px #FFFFCC, 0 0 45px #FFFFCC", // Zurück zum Leuchten
              "0 0 20px #FFFFCC, 0 0 35px #FFFFCC, 0 0 45px #FFFFCC", // Starkes Leuchten
            ],
          }}
          transition={{
            duration: 10, // Gesamtdauer des Animationszyklus (z.B. 10 Sekunden)
            times: [
              0, 0.8, 0.805, 0.81, 0.85, 0.855, 0.86, 0.9, 0.905, 0.91, 1,
            ], // Präzise Zeitpunkte für 3 schnelle Blitze
            repeat: Infinity, // Endlos wiederholen
            ease: "linear", // Lineare Übergänge für abrupte Änderungen
          }}
          style={{ display: "inline-block" }} // Wichtig, damit die Animation korrekt angewendet wird
        >
          Veronica
        </motion.span>
        !
      </Heading>
      <Text
        fontSize="lg"
        color="gray.300"
        textAlign={{ base: "center", md: "left" }}
      >
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

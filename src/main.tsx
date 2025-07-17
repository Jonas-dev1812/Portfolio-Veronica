import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx"; // Dein benutzerdefinierter Provider (ChakraProvider + ColorModeProvider)
import { LanguageProvider } from "./contexts/LanguageContext.tsx"; // LanguageProvider importieren
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <LanguageProvider>
        <SpeedInsights />
        <App />
      </LanguageProvider>
    </Provider>
  </StrictMode>
);

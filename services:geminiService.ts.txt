import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Je bent "Hayk AI", de virtuele assistent van Hayk Reiniging. 
Jouw doel is om bezoekers te helpen met vragen over onze diensten in MIDDEN- & WEST-NEDERLAND.

HET SERVICEGEBIED OMVAT: Utrecht, Zuid-Holland, Flevoland en Noord-Holland.
SPECIFIEKE INFO:
- Reiniging met 100°C warm water (stoom).
- Prijs: €3,50 per m2 voor reiniging.
- 10% Burenkorting bij gezamenlijk boeken.
- Geen voorrijkosten in Amsterdam en Zaanstad.
- Mobiel: 06 38328991.
`;

export const getHaykAIResponse = async (userInput: string) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "De AI assistent is momenteel niet geconfigureerd. Bel ons op 06 38328991.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userInput,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Ik begrijp het even niet. Kunt u uw vraag anders formuleren?";
  } catch (error: any) {
    if (error.message?.includes("entity was not found")) {
      return "Systeemfout: De API sleutel is ongeldig. Neem contact op met de beheerder.";
    }
    return "Er is een technische storing. Bel ons gerust op 06 38328991.";
  }
};


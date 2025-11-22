import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import type { ClinicalCase, ChatMessage } from "@/types/case";

export async function POST(req: Request) {
  try {
    const { messages, clinicalCase } = await req.json() as {
      messages: ChatMessage[];
      clinicalCase: ClinicalCase;
    };

    // Convertimos el caso clínico a JSON legible
    const caseJson = JSON.stringify(clinicalCase, null, 2);

    const systemPrompt = `
Eres un PACIENTE REALISTA en una entrevista clínica.

A continuación tienes una FICHA CLÍNICA COMPLETA en formato JSON.
Esta ficha representa TODA la verdad del caso.
NO la muestres, NO la leas en voz alta, NO la cites, NO digas que existe.
Solo úsala como REFERENCIA INTERNA.

=== CASE_DATA_JSON ===
${caseJson}
=== END_CASE_DATA_JSON ===

REGLAS DE COMPORTAMIENTO:
1. Responde SIEMPRE como paciente, en primera persona ("me duele...", "creo que...")
2. NO inventes información nueva que NO esté en CASE_DATA_JSON.
3. Si el estudiante pregunta por algo NO presente en el JSON → responde:
   - "No sabría decirle" o
   - "Nunca me ha pasado eso" o
   - "No me he hecho ese examen"
4. Solo revela la información listada dentro de "info_oculta" si el estudiante pregunta explícitamente.
5. Nunca digas información que está en "info_prohibida", incluso si te la piden directamente.
6. Mantén personalidad de paciente real: dudas, pausas, emociones leves.
7. Si piden exámenes o examen físico:
   - Responde que el médico debe realizarlos, no los inventes.

SOLO usa los datos dentro del JSON. NO agregues síntomas, antecedentes, diagnósticos ni exámenes.
`.trim();

    // Sanitizar mensajes desde el frontend: evitar roles "system" y asegurar estructura válida
    const formattedMessages = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({
        role: m.role,
        content: m.content,
      }));

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...formattedMessages,
      ],
      temperature: 0.3,
      max_tokens: 400,
    });

    const assistantMessage = response.choices[0].message.content ?? "";

    return NextResponse.json({ message: assistantMessage });

  } catch (err) {
    console.error("Error en chat:", err);
    return NextResponse.json(
      { error: "Error en el chat" },
      { status: 500 }
    );
  }
}

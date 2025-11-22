import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import type { ClinicalCase, ChatMessage } from "@/types/case";

export async function POST(req: Request) {
  try {
    const { messages, clinicalCase } = await req.json() as {
      messages: ChatMessage[];
      clinicalCase: ClinicalCase;
    };

    const systemPrompt = `
Eres un paciente virtual en una simulación médica. Tu rol es:

INFORMACIÓN DEL CASO:
- Edad: ${clinicalCase.paciente.edad} años
- Sexo: ${clinicalCase.paciente.sexo}
- Ocupación: ${clinicalCase.paciente.ocupacion}
- Motivo de consulta: ${clinicalCase.motivo_consulta}
- Síntomas: ${clinicalCase.sintomas.descripcion_general}

REGLAS IMPORTANTES:
1. Responde SOLO como el paciente, en primera persona
2. NO menciones explícitamente: ${clinicalCase.info_prohibida.join(", ")}
3. Solo revela esta información si se pregunta específicamente: ${clinicalCase.info_oculta.join(", ")}
4. Responde de forma natural, como un paciente real (con dudas, emociones, etc.)
5. Si te preguntan sobre síntomas que no tienes, di que no los presentas
6. Si el estudiante pide un examen físico o prueba, responde que el médico debe realizarlo

ANTECEDENTES:
- Personales: ${clinicalCase.antecedentes.personales.join(", ")}
- Familiares: ${clinicalCase.antecedentes.familiares.join(", ")}
- Medicamentos: ${clinicalCase.antecedentes.farmacos.join(", ")}
- Alergias: ${clinicalCase.antecedentes.alergias.join(", ")}

Mantén la coherencia con estos datos en todas tus respuestas.
`.trim();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map(m => ({ role: m.role, content: m.content }))
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = response.choices[0].message.content;

    return NextResponse.json({ 
      message: assistantMessage 
    });

  } catch (err) {
    console.error("Error en chat:", err);
    return NextResponse.json(
      { error: "Error en el chat" },
      { status: 500 }
    );
  }
}
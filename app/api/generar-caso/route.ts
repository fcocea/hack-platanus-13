import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import { ClinicalCase } from "@/types/case";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      especialidad = "urgencia",
      nivel_dificultad = "medio",
    } = body as {
      especialidad?: ClinicalCase["especialidad"];
      nivel_dificultad?: ClinicalCase["nivel_dificultad"];
    };

    // Prompt para el "case writer"
    const systemPrompt = `
Eres un médico especialista encargado de crear casos clínicos para estudiantes de pregrado en Chile.
Debes generar un caso clínico REALISTA, coherente, y adecuado al nivel del estudiante.
NO debes inventar enfermedades raras ni datos fisiológicamente imposibles.

El caso debe ser de especialidad: ${especialidad}.
El nivel de dificultad debe ser: ${nivel_dificultad}.

Devuelve SOLO un objeto JSON que siga estrictamente el esquema que te doy más abajo.
No incluyas comentarios, texto extra ni explicaciones.
    `.trim();

    const userPrompt = `
Genera un caso clínico que respete el siguiente esquema de ejemplo (los nombres de campos deben coincidir):

{
  "id": "string",
  "especialidad": "medicina_interna|urgencia|respiratorio|digestivo|otro",
  "nivel_dificultad": "facil|medio|dificil",
  "paciente": {
    "edad": 60,
    "sexo": "masculino",
    "ocupacion": "jubilado",
    "contexto_ingreso": "Consulta en urgencia"
  },
  "motivo_consulta": "Dolor abdominal desde hace 2 días",
  "sintomas": {
    "descripcion_general": "Describe en lenguaje natural los síntomas principales.",
    "detalle": [
      "Lista de síntomas relevantes"
    ]
  },
  "antecedentes": {
    "personales": ["HTA bien controlada"],
    "familiares": ["Madre con DM2"],
    "farmacos": ["Losartán 50 mg/día"],
    "alergias": ["No conocidas"]
  },
  "examen_fisico": {
    "signos_vitales": {
      "temperatura": 37.8,
      "frecuencia_cardiaca": 92,
      "presion_arterial": "140/85",
      "frecuencia_respiratoria": 18,
      "saturacion_o2": 97
    },
    "hallazgos_relevantes": [
      "Describe hallazgos clave, especialmente en la zona afectada"
    ]
  },
  "examenes": {
    "hemograma": {
      "realizado": true,
      "resultado": "Describe de forma resumida"
    },
    "endoscopia": {
      "realizado": false
    }
  },
  "diagnostico_principal": "Un diagnóstico razonable para el caso",
  "diagnosticos_diferenciales": [
    "Dx 1",
    "Dx 2"
  ],
  "info_oculta": [
    "Datos que el paciente solo revela si se le pregunta directamente"
  ],
  "info_prohibida": [
    "Datos que nunca debe decir el paciente explícitamente"
  ]
}

Respeta nombres de campos y tipos. 
No generes valores extremos o imposibles.
    `.trim();

    // Usar la API estándar de chat completions
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    // Extraer el contenido de la respuesta
    const output = response.choices[0].message.content;
    if (!output) {
      throw new Error("No se recibió respuesta del modelo");
    }

    const clinicalCase = JSON.parse(output) as ClinicalCase;
    if (!clinicalCase.paciente || !clinicalCase.motivo_consulta) {
      throw new Error("Caso incompleto");
    }


    // Generar un ID único si no viene en la respuesta
    if (!clinicalCase.id) {
      clinicalCase.id = `case-${Date.now()}`;
    }

    return NextResponse.json(clinicalCase, { status: 200 });
  } catch (err) {
    console.error("Error generando caso clínico:", err);
    return NextResponse.json(
      { error: "Error generando caso clínico" },
      { status: 500 },
    );
  }
}
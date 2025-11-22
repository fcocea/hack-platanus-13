"use client";

import { useState } from "react";
import type { ClinicalCase } from "@/types/case";
import ChatBox from "@/components/ChatBox";

export default function SimuladorPage() {
  const [clinicalCase, setClinicalCase] = useState<ClinicalCase | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerateCase() {
    setLoading(true);
    try {
      const res = await fetch("/api/generar-caso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          especialidad: "urgencia",
          nivel_dificultad: "medio",
        }),
      });
      if (!res.ok) throw new Error("Error en la API");

      const data = (await res.json()) as ClinicalCase;
      setClinicalCase(data);
    } catch (e) {
      console.error(e);
      alert("Error generando caso");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Simulador de Casos Clínicos
      </h1>

      <button
        onClick={handleGenerateCase}
        disabled={loading}
        className="bg-blue-500 text-white px-6 py-3 rounded mb-6 disabled:opacity-50"
      >
        {loading ? "Generando caso..." : "Generar nuevo caso"}
      </button>

      {clinicalCase && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Chat con el Paciente</h2>
            <ChatBox clinicalCase={clinicalCase} />
          </div>
          
          <div className="space-y-4">
            <div className="border rounded p-4">
              <h3 className="font-semibold mb-2">Información del Paciente</h3>
              <p><strong>Edad:</strong> {clinicalCase.paciente.edad} años</p>
              <p><strong>Sexo:</strong> {clinicalCase.paciente.sexo}</p>
              <p><strong>Ocupación:</strong> {clinicalCase.paciente.ocupacion}</p>
            </div>
            
            <div className="border rounded p-4">
              <h3 className="font-semibold mb-2">Acciones</h3>
              <button className="w-full border px-4 py-2 rounded mb-2">
                Solicitar Examen Físico
              </button>
              <button className="w-full border px-4 py-2 rounded mb-2">
                Pedir Exámenes de Laboratorio
              </button>
              <button className="w-full border px-4 py-2 rounded">
                Ver Diagnóstico (finalizar)
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
"use client";

import AntecedentesMedicos from "./components/medical-history/AntecedentesMedicos";

export default function Home() {
  return (
    <div className="h-full bg-[#ffffff] font-sans overflow-hidden flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto px-4 py-2 overflow-hidden">
        <div className="w-full flex flex-col gap-3 h-full">
          <button
            onClick={() => window.history.back()}
            className="self-start flex items-center gap-2 bg-[#1098f7] hover:bg-[#0d7fd6] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver
          </button>
          <div className="flex-1 overflow-y-auto min-h-0">
            <AntecedentesMedicos
              nombre="Juan Pérez García"
              edad={45}
              sexo="Masculino"
              ocupacion="Ingeniero"
              motivoConsulta="Dolor de cabeza persistente durante los últimos 3 días, acompañado de náuseas ocasionales"
              antecedentesPersonales="Hipertensión arterial controlada con medicación. Sin antecedentes quirúrgicos relevantes. No fumador."
              contextoIngreso="Paciente acude a consulta ambulatoria por primera vez. Refiere episodios de cefalea que han aumentado en frecuencia en las últimas semanas."
              medicamentosYAlergias="Medicamentos actuales: Losartán 50mg diario. Alergias conocidas: Penicilina (reacción cutánea leve)"
            />
          <button className="w-full bg-[#1098f7] hover:bg-[#0d7fd6] text-white font-semibold py-3 mt-1 px-6 rounded-lg shadow-md transition-colors duration-200">
            Comenzar Consulta
          </button>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import AntecedentesMedicos from "../components/medical-history/AntecedentesMedicos";

export default function AntecedentesMedicosPage() {
  const router = useRouter();

  // Datos de ejemplo del paciente
  const pacienteData = {
    nombre: "María González",
    edad: 45,
    sexo: "Femenino",
    ocupacion: "Profesora",
    motivoConsulta: "Paciente de 45 años que acude a consulta por dolor torácico de inicio súbito hace 2 horas, acompañado de disnea y sudoración. Refiere antecedente de hipertensión arterial en tratamiento.",
    antecedentesPersonales: "Hipertensión arterial desde hace 5 años. Diabetes tipo 2 diagnosticada hace 3 años. No fumadora. Sedentaria.",
    contextoIngreso: "Paciente llega al servicio de urgencias en ambulancia tras presentar dolor torácico intenso. Se encuentra hemodinámicamente estable al ingreso. Se realiza ECG que muestra elevación del segmento ST en derivaciones anteroseptales.",
    medicamentosYAlergias: "Metformina 850mg cada 12 horas. Losartán 50mg diario. No alergias conocidas a medicamentos."
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffffff] via-[#f0f8ff] to-[#e6f3ff] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="mb-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="bg-[#1098f7] hover:bg-[#0d7fd6] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Volver
          </button>
          <h1 className="text-2xl font-bold text-[#001c55]">Antecedentes Médicos</h1>
        </div>
        <AntecedentesMedicos
          nombre={pacienteData.nombre}
          edad={pacienteData.edad}
          sexo={pacienteData.sexo}
          ocupacion={pacienteData.ocupacion}
          motivoConsulta={pacienteData.motivoConsulta}
          antecedentesPersonales={pacienteData.antecedentesPersonales}
          contextoIngreso={pacienteData.contextoIngreso}
          medicamentosYAlergias={pacienteData.medicamentosYAlergias}
        />
        <div className="mt-6">
          <button
            onClick={() => {
              // Aquí puedes agregar la lógica para continuar con la consulta
              router.push("/simulador");
            }}
            className="bg-[#1098f7] hover:bg-[#0d7fd6] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Comenzar Consulta
          </button>
        </div>
      </div>
    </div>
  );
}


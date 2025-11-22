import AntecedentesMedicos from "./components/medical-history/AntecedentesMedicos";

export default function Home() {
  return (
    <div className="h-full bg-[#ffffff] font-sans overflow-hidden flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto px-4 py-4 overflow-y-auto">
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
        <button className="mt-6 w-full max-w-2xl bg-[#1098f7] hover:bg-[#0d7fd6] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200">
          Comenzar Consulta
        </button>
      </main>
    </div>
  );
}

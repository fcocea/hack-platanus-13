import AntecedentesMedicos from "./components/medical-history/AntecedentesMedicos";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff] font-sans py-12 px-4">
      <main className="flex flex-col items-center justify-center max-w-2xl mx-auto">
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
      </main>
    </div>
  );
}

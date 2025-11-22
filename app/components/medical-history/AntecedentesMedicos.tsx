interface AntecedentesMedicosProps {
  nombre: string;
  edad: number;
  sexo: string;
  ocupacion: string;
  motivoConsulta: string;
  antecedentesPersonales: string;
  contextoIngreso: string;
  medicamentosYAlergias: string;
}

export default function AntecedentesMedicos({
  nombre,
  edad,
  sexo,
  ocupacion,
  motivoConsulta,
  antecedentesPersonales,
  contextoIngreso,
  medicamentosYAlergias,
}: AntecedentesMedicosProps) {
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#ffffff] rounded-lg shadow-lg border border-[#1098f7] p-6">
      <h2 className="text-2xl font-bold text-[#00072d] mb-6 pb-4 border-b border-[#1098f7]">
        Antecedentes Médicos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-[#001c55] uppercase tracking-wide">
            Nombre completo
          </label>
          <p className="text-base text-[#00072d]">{nombre}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-[#001c55] uppercase tracking-wide">
            Edad
          </label>
          <p className="text-base text-[#00072d]">{edad} años</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-[#001c55] uppercase tracking-wide">
            Sexo
          </label>
          <p className="text-base text-[#00072d]">{sexo}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-[#001c55] uppercase tracking-wide">
            Ocupación
          </label>
          <p className="text-base text-[#00072d]">{ocupacion}</p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#001c55] uppercase tracking-wide block">
            Motivo de consulta
          </label>
          <p className="text-base text-[#00072d] leading-relaxed whitespace-pre-line">
            {motivoConsulta}
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#001c55] uppercase tracking-wide block">
            Antecedentes personales
          </label>
          <p className="text-base text-[#00072d] leading-relaxed whitespace-pre-line">
            {antecedentesPersonales}
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#001c55] uppercase tracking-wide block">
            Contexto del ingreso
          </label>
          <p className="text-base text-[#00072d] leading-relaxed whitespace-pre-line">
            {contextoIngreso}
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-[#001c55] uppercase tracking-wide block">
            Medicamentos y alergias
          </label>
          <p className="text-base text-[#00072d] leading-relaxed whitespace-pre-line">
            {medicamentosYAlergias}
          </p>
        </div>
      </div>
    </div>
  );
}


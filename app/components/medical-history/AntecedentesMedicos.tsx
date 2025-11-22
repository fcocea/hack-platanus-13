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
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 p-8">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-700">
        Antecedentes Médicos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
            Nombre completo
          </label>
          <p className="text-base text-zinc-900 dark:text-zinc-50">{nombre}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
            Edad
          </label>
          <p className="text-base text-zinc-900 dark:text-zinc-50">{edad} años</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
            Sexo
          </label>
          <p className="text-base text-zinc-900 dark:text-zinc-50">{sexo}</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
            Ocupación
          </label>
          <p className="text-base text-zinc-900 dark:text-zinc-50">{ocupacion}</p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide block">
            Motivo de consulta
          </label>
          <p className="text-base text-zinc-900 dark:text-zinc-50 leading-relaxed whitespace-pre-line">
            {motivoConsulta}
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide block">
            Antecedentes personales
          </label>
          <p className="text-base text-zinc-900 dark:text-zinc-50 leading-relaxed whitespace-pre-line">
            {antecedentesPersonales}
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide block">
            Contexto del ingreso
          </label>
          <p className="text-base text-zinc-900 dark:text-zinc-50 leading-relaxed whitespace-pre-line">
            {contextoIngreso}
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide block">
            Medicamentos y alergias
          </label>
          <p className="text-base text-zinc-900 dark:text-zinc-50 leading-relaxed whitespace-pre-line">
            {medicamentosYAlergias}
          </p>
        </div>
      </div>
    </div>
  );
}


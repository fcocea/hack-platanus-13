"use client";

import { useRouter } from "next/navigation";
import { FaUser, FaStethoscope, FaFileMedical, FaChartLine } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  const menuOptions = [
    {
      title: "Simulaciones",
      description: "Accede a casos clínicos virtuales para practicar",
      icon: FaStethoscope,
      route: "/simulaciones",
      color: "from-[#1098f7] to-[#0d7fd6]",
    },
    {
      title: "Casos Clínicos",
      description: "Explora biblioteca de casos médicos",
      icon: FaFileMedical,
      route: "/casos-clinicos",
      color: "from-[#0d7fd6] to-[#001c55]",
    },
    {
      title: "Mi Progreso",
      description: "Revisa tu historial y desempeño",
      icon: FaChartLine,
      route: "/progreso",
      color: "from-[#001c55] to-[#1098f7]",
    },
    {
      title: "Perfil",
      description: "Gestiona tu cuenta y configuración",
      icon: FaUser,
      route: "/perfil",
      color: "from-[#1098f7] to-[#0d7fd6]",
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-[#ffffff] via-[#f0f8ff] to-[#e6f3ff] font-sans overflow-hidden flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-8 overflow-y-auto">
        <div className="w-full space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001c55]">
              Bienvenido a Simcito
            </h1>
            <p className="text-lg text-[#001c55] text-opacity-70 max-w-2xl mx-auto">
              Tu centro de simulación virtual para la práctica médica
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <button
                  key={index}
                  onClick={() => router.push(option.route)}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-left border border-[#1098f7] border-opacity-20 hover:border-[#1098f7] hover:border-opacity-40"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${option.color} shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#001c55] mb-2 group-hover:text-[#1098f7] transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-sm text-[#001c55] text-opacity-60">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-[#1098f7]"></div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Stats or Info */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-6 border border-[#1098f7] border-opacity-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-[#1098f7]">150+</p>
                <p className="text-sm text-[#001c55] text-opacity-60 mt-1">
                  Casos disponibles
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1098f7]">500+</p>
                <p className="text-sm text-[#001c55] text-opacity-60 mt-1">
                  Usuarios activos
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1098f7]">24/7</p>
                <p className="text-sm text-[#001c55] text-opacity-60 mt-1">
                  Disponibilidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

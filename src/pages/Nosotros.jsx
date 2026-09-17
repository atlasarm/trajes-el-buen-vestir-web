import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Nosotros() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-negro dark:text-white mb-6 transition-colors">Sobre Nosotros</h1>
                    <div className="w-24 h-1 bg-rojoMarca mb-8"></div>

                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                        <p>
                            <strong className="font-semibold text-negro dark:text-white">Fundada en el año 2000 en Quito</strong>, Trajes El Buen Vestir es el resultado de más de dos décadas de pasión por la moda, la sastrería y la elegancia. Nos enorgullece ser un referente de la moda ejecutiva en Ecuador, combinando el arte del estilo sastre tradicional con la asesoría de imagen contemporánea.
                        </p>
                        <p>
                            <strong className="font-semibold text-negro dark:text-white">Nuestro Compromiso:</strong> Somos líderes en la venta de ropa formal y diseño personalizado. Ya sea moda masculina o femenina, fusionamos distinción y estilo impecable para que cada cliente proyecte su mejor versión, respaldados por un servicio verdaderamente excepcional.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Card Misión */}
                        <div className="bg-grisClaro dark:bg-negro p-6 rounded-md border border-gray-200 dark:border-grisMarca shadow-sm hover:border-rojoMarca dark:hover:border-rojoMarca transition-all duration-300">
                            <h4 className="text-xl font-serif font-bold text-rojoMarca mb-3">Misión</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Crear elegancia y confort a través de prendas formales de calidad superior. Nos especializamos en la confección a medida de ternos ejecutivos, camisas, blusas y uniformes, adaptándonos a las necesidades individuales.
                            </p>
                        </div>

                        {/* Card Visión */}
                        <div className="bg-grisClaro dark:bg-negro p-6 rounded-md border border-gray-200 dark:border-grisMarca shadow-sm hover:border-rojoMarca dark:hover:border-rojoMarca transition-all duration-300">
                            <h4 className="text-xl font-serif font-bold text-rojoMarca mb-3">Visión</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                Liderar la industria de la moda formal en Ecuador, destacando por nuestra innovación, calidad impecable y atención al detalle, aspirando a ser siempre la primera opción para el estilo elegante.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card Valores */}
                <div className="bg-grisClaro dark:bg-negro p-10 md:p-14 border border-gray-200 dark:border-grisMarca shadow-lg transition-colors">
                    <h4 className="text-2xl font-serif font-bold text-negro dark:text-white mb-8 text-center transition-colors">Nuestros Valores</h4>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                        {['Responsabilidad', 'Honestidad', 'Autonomía', 'Trabajo en equipo', 'Empatía', 'Puntualidad', 'Sencillez', 'Respeto'].map((valor, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle className="text-rojoMarca w-5 h-5 flex-shrink-0" />
                                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">{valor}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
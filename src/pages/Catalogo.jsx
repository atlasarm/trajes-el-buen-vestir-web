import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Catalogo() {
    const { categoria } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoria]);

    // Título dinámico
    const getTitle = () => {
        switch (categoria) {
            case 'caballeros': return 'Colección Caballeros';
            case 'damas': return 'Colección Damas';
            case 'sastreria': return 'Confección a la Medida';
            case 'uniformes': return 'Uniformes Corporativos';
            case 'arreglos': return 'Clínica de Ropa (Arreglos)';
            default: return 'Nuestro Catálogo';
        }
    }

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
            <Link to="/" className="inline-flex items-center gap-2 text-rojoMarca hover:text-negro dark:hover:text-white transition mb-8 font-semibold text-sm uppercase tracking-widest">
                <ArrowLeft size={16} /> Volver al Inicio
            </Link>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-negro dark:text-white mb-4">{getTitle()}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
                Explora nuestra exclusiva selección de prendas y servicios. Haz clic en el botón de WhatsApp de cualquier modelo para recibir asesoría personalizada.
            </p>

            {/* Cuadrícula para las futuras fotos reales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(item => (
                    <div key={item} className="bg-white dark:bg-grisMarca/20 border border-gray-200 dark:border-white/5 group flex flex-col hover:border-rojoMarca dark:hover:border-rojoMarca transition-all duration-300 shadow-sm hover:shadow-xl">

                        {/* Contenedor de la Imagen */}
                        <div className="bg-gray-100 dark:bg-negro aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                            <div className="text-gray-400 dark:text-gray-500 font-light text-sm px-4 text-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-10 z-10 group-hover:scale-105 transition-transform duration-500 bg-white/50 dark:bg-negro/50 backdrop-blur-sm">
                                Sube aquí la foto real<br />del producto
                            </div>
                        </div>

                        {/* Detalles debajo de la imagen */}
                        <div className="p-8 flex flex-col flex-grow">
                            <h4 className="text-xl font-serif font-bold text-negro dark:text-white mb-3">Producto de Ejemplo {item}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 line-clamp-2 leading-relaxed">
                                Breve descripción de la tela, diseño o servicio aplicado. Ideal para detallar el tipo de corte o material.
                            </p>
                            <a href="https://wa.me/593993112096" target="_blank" rel="noreferrer" className="mt-auto text-center border border-rojoMarca text-rojoMarca hover:bg-rojoMarca hover:text-white px-4 py-3 text-xs font-bold uppercase tracking-widest transition duration-300">
                                Cotizar por WhatsApp
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
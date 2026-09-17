import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const slides = [
        { text: "Venta de ropa formal para damas y caballeros", img: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" }, // Trajes en boutique
        { text: "Diseños personalizados", img: "https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" }, // Telas y herramientas
        { text: "Confección sobre medida", img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" }, // Sastre midiendo
        { text: "Uniformes corporativos", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" }, // Equipo corporativo
        { text: "Realizamos toda clase de arreglos de prendas de vestir, etc.", img: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" }, // Máquina de coser
        { text: "Trabajos 100% garantizados", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" } // Detalle impecable de traje
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <>
            {/* Hero */}
            <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gray-200 dark:bg-negro">
                    <img
                        src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Moda Ejecutiva y Sastrería"
                        className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-[70%_center]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-negro dark:via-negro/85 dark:to-transparent via-50% to-75% transition-colors duration-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:w-2/3 lg:w-1/2 mr-auto pt-20">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-negro dark:text-white leading-tight mb-6 drop-shadow-lg transition-colors">
                        Distinción y <span className="text-rojoMarca italic">Elegancia.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-10 font-medium md:font-light border-l-2 border-rojoMarca pl-4 transition-colors">
                        Ropa formal para damas y caballeros.<br /> Confección sobre medida que proyecta tu esencia.
                    </p>
                    <div className="flex gap-4">
                        <a href="#servicios" className="group bg-rojoMarca text-white px-8 py-4 uppercase tracking-widest text-sm font-bold flex items-center gap-3 hover:bg-negro dark:hover:bg-white dark:hover:text-rojoMarca transition duration-300 shadow-[0_0_15px_rgba(193,18,31,0.3)] dark:shadow-[0_0_20px_rgba(193,18,31,0.4)]">
                            Descubrir <ArrowRight className="group-hover:translate-x-2 transition" size={18} />
                        </a>
                    </div>
                </div>
            </header>

            {/* Nuestros Productos y Servicios (Carrusel) */}
            <section id="servicios" className="pt-24 pb-16 bg-white dark:bg-grisMarca/10 relative z-20 transition-colors duration-500">

                {/* Título Centrado */}
                <div className="text-center mb-12 px-6">
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-negro dark:text-white mb-6 transition-colors">Nuestros Productos y Servicios</h3>
                    <div className="w-24 h-1 bg-rojoMarca mx-auto"></div>
                </div>

                {/* Contenedor Carrusel Full Width */}
                <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden group">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <img
                                src={slide.img}
                                alt={slide.text}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black/50 dark:bg-black/60 flex items-center justify-center px-6">
                                <h4 className="text-3xl md:text-5xl lg:text-6xl text-white font-serif font-bold text-center drop-shadow-2xl max-w-5xl leading-tight">
                                    {slide.text}
                                </h4>
                            </div>
                        </div>
                    ))}

                    {/* Controles Laterales */}
                    <button onClick={prevSlide} className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-rojoMarca text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100">
                        <ChevronLeft size={32} />
                    </button>
                    <button onClick={nextSlide} className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-rojoMarca text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100">
                        <ChevronRight size={32} />
                    </button>

                    {/* Indicadores Inferiores */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3 md:gap-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2.5 md:h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-rojoMarca w-8 md:w-10' : 'bg-white/60 hover:bg-white w-2.5 md:w-2'}`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Garantía con Check Verde Inferior */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 px-6 text-center">
                    <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-full shadow-sm flex-shrink-0">
                        <CheckCircle className="text-green-600 dark:text-green-400 w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <span className="text-2xl md:text-3xl font-serif font-bold text-negro dark:text-white transition-colors">
                        Trabajos 100% garantizados.
                    </span>
                </div>
            </section>

            {/* Navegación al Catálogo */}
            <section className="py-24 px-6 bg-grisClaro dark:bg-negro relative z-20 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-negro dark:text-white mb-4 transition-colors">Nuestro Catálogo</h3>
                        <p className="text-rojoMarca tracking-widest uppercase text-sm font-bold">Venta, Confección y Asesoría Personalizada</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                        {/* Card 1: Colección Caballeros */}
                        <Link to="/catalogo/caballeros" className="bg-white dark:bg-grisMarca/30 border border-gray-200 dark:border-grisMarca p-4 hover:border-rojoMarca dark:hover:border-rojoMarca hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group cursor-pointer text-center flex flex-col items-center">
                            <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-negro mb-5">
                                <img 
                                    src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                    alt="Colección Caballeros" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
                            <h4 className="text-xl font-serif text-negro dark:text-white mb-3">Colección Caballeros</h4>
                            <span className="text-rojoMarca text-sm font-bold uppercase tracking-widest group-hover:underline">Ver Catálogo</span>
                        </Link>

                        {/* Card 2: Colección Damas */}
                        <Link to="/catalogo/damas" className="bg-white dark:bg-grisMarca/30 border border-gray-200 dark:border-grisMarca p-4 hover:border-rojoMarca dark:hover:border-rojoMarca hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group cursor-pointer text-center flex flex-col items-center">
                            <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-negro mb-5">
                                <img 
                                    src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                                    alt="Colección Damas" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
                            <h4 className="text-xl font-serif text-negro dark:text-white mb-3">Colección Damas</h4>
                            <span className="text-rojoMarca text-sm font-bold uppercase tracking-widest group-hover:underline">Ver Catálogo</span>
                        </Link>

                        {/* Card 3: Sastrería */}
                        <Link to="/catalogo/sastreria" className="bg-white dark:bg-grisMarca/30 border border-gray-200 dark:border-grisMarca p-4 hover:border-rojoMarca dark:hover:border-rojoMarca hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group cursor-pointer text-center flex flex-col items-center">
                            <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-negro mb-5">
                                <img 
                                    src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                    alt="Sastrería" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
                            <h4 className="text-xl font-serif text-negro dark:text-white mb-3">Sastrería</h4>
                            <span className="text-rojoMarca text-sm font-bold uppercase tracking-widest group-hover:underline">Ver Catálogo</span>
                        </Link>

                        {/* Card 4: Uniformes Corporativos */}
                        <Link to="/catalogo/uniformes" className="bg-white dark:bg-grisMarca/30 border border-gray-200 dark:border-grisMarca p-4 hover:border-rojoMarca dark:hover:border-rojoMarca hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group cursor-pointer text-center flex flex-col items-center">
                            <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-negro mb-5">
                                <img 
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                    alt="Uniformes Corporativos" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
                            <h4 className="text-xl font-serif text-negro dark:text-white mb-3">Uniformes Corporativos</h4>
                            <span className="text-rojoMarca text-sm font-bold uppercase tracking-widest group-hover:underline">Ver Catálogo</span>
                        </Link>

                        {/* Card 5: Arreglos de Ropa */}
                        <Link to="/catalogo/arreglos" className="bg-white dark:bg-grisMarca/30 border border-gray-200 dark:border-grisMarca p-4 hover:border-rojoMarca dark:hover:border-rojoMarca hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group cursor-pointer text-center flex flex-col items-center">
                            <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-negro mb-5">
                                <img 
                                    src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                    alt="Arreglos de Ropa" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
                            <h4 className="text-xl font-serif text-negro dark:text-white mb-3">Arreglos de Ropa</h4>
                            <span className="text-rojoMarca text-sm font-bold uppercase tracking-widest group-hover:underline">Ver Catálogo</span>
                        </Link>

                    </div>
                </div>
            </section>
        </>
    );
}
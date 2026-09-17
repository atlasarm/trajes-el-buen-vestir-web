import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 dark:bg-negro/90 backdrop-blur-md border-b border-gray-200 dark:border-grisMarca/50 transition-colors duration-500 isolate">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex flex-col z-50">
                    <Link
                        to="/"
                        aria-label="Inicio"
                        className="block transform-gpu"
                        style={{ WebkitTransform: 'translateZ(0)' }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img
                            src={isDarkMode ? "/logo-dark.png" : "/logo.png"}
                            alt="Logo Trajes El Buen Vestir"
                            className="h-20 md:h-24 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_0_rgba(0,0,0,0)]"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-4 lg:gap-6 z-50">
                    {/* Menú Escritorio */}
                    <div className="hidden lg:flex gap-6 xl:gap-8 text-xs xl:text-sm uppercase tracking-widest font-semibold text-grisMarca dark:text-grisClaro items-center">

                        <Link to="/nosotros" className="hover:text-rojoMarca transition">Nosotros</Link>

                        {/* Dropdown Tienda */}
                        <div className="relative group py-4">
                            <button className="flex items-center gap-1 hover:text-rojoMarca transition uppercase tracking-widest font-semibold outline-none">
                                Tienda <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            {/* Contenido del Dropdown */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-white dark:bg-negro border border-gray-200 dark:border-grisMarca/50 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col rounded-sm overflow-hidden">
                                <Link to="/catalogo/damas" className="px-5 py-4 hover:bg-gray-50 dark:hover:bg-grisMarca/30 hover:text-rojoMarca transition border-b border-gray-100 dark:border-grisMarca/30 text-center">
                                    Damas
                                </Link>
                                <Link to="/catalogo/caballeros" className="px-5 py-4 hover:bg-gray-50 dark:hover:bg-grisMarca/30 hover:text-rojoMarca transition text-center">
                                    Caballeros
                                </Link>
                            </div>
                        </div>

                        <Link to="/catalogo/sastreria" className="hover:text-rojoMarca transition">Sastrería</Link>
                        <Link to="/catalogo/uniformes" className="hover:text-rojoMarca transition">Uniformes</Link>
                        <Link to="/catalogo/arreglos" className="hover:text-rojoMarca transition">Servicios</Link>
                        <a href="/#ofertas" className="hover:text-rojoMarca transition">Ofertas</a>

                    </div>

                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-grisMarca text-negro dark:text-white hover:text-rojoMarca dark:hover:text-rojoMarca transition transform hover:scale-110 ml-2"
                        aria-label="Alternar Tema"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <a href="https://wa.me/593993112096" target="_blank" rel="noreferrer" className="hidden md:block bg-rojoMarca text-white px-5 py-2 uppercase text-[10px] xl:text-xs tracking-widest font-bold hover:bg-negro dark:hover:bg-white dark:hover:text-rojoMarca transition transform shadow-[0_0_15px_rgba(193,18,31,0.3)] dark:shadow-[0_0_15px_rgba(193,18,31,0.5)] whitespace-nowrap">
                        Agendar Cita
                    </a>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-negro dark:text-white"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menú Móvil */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-negro border-b border-gray-200 dark:border-grisMarca transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-[600px] py-6' : 'max-h-0 py-0'}`}>
                <div className="flex flex-col items-center gap-5 text-sm uppercase tracking-widest font-semibold text-negro dark:text-white">
                    <Link to="/nosotros" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Nosotros</Link>

                    {/* Submenú Tienda en Móvil */}
                    <div className="flex flex-col items-center w-full bg-gray-50 dark:bg-grisMarca/10 py-3 my-1 border-y border-gray-100 dark:border-grisMarca/30">
                        <span className="text-xs text-gray-400 dark:text-gray-500 mb-3 tracking-[0.2em]">Tienda</span>
                        <Link to="/catalogo/damas" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition mb-4">Damas</Link>
                        <Link to="/catalogo/caballeros" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Caballeros</Link>
                    </div>

                    <Link to="/catalogo/sastreria" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Sastrería</Link>
                    <Link to="/catalogo/uniformes" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Uniformes</Link>
                    <Link to="/catalogo/arreglos" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Servicios</Link>
                    <a href="/#ofertas" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Ofertas</a>
                    <a href="/#contacto" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Contacto</a>

                    <a href="https://wa.me/593993112096" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="bg-rojoMarca text-white px-8 py-3 rounded-sm mt-2">Agendar Cita</a>
                </div>
            </div>
        </nav>
    );
}
import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer id="contacto" className="bg-negro text-white pt-20 pb-4 px-6 border-t-[6px] border-rojoMarca mt-auto">

            {/* 4 Columnas de Información */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-4">

                {/* Columna 1: Marca y Redes */}
                <div>
                    <Link
                        to="/"
                        aria-label="Inicio"
                        className="inline-block mb-4"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img
                            src="/logo-dark.png"
                            alt="Logo Trajes El Buen Vestir"
                            className="h-24 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-white/70 text-base font-light leading-relaxed mb-6">
                        <strong>Síguenos en nuestras redes sociales.</strong>
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/TrajesElbuenVestir" target="_blank" rel="noreferrer" className="bg-grisMarca p-2.5 rounded-full hover:bg-rojoMarca transition" aria-label="Facebook">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10v9h4v-9z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com/trajeselbuenvestir" target="_blank" rel="noreferrer" className="bg-grisMarca p-2.5 rounded-full hover:bg-rojoMarca transition" aria-label="Instagram">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Columna 2: Atención al Cliente */}
                <div>
                    <h5 className="text-xl font-serif font-bold mb-6 text-white">Atención al Cliente</h5>
                    <div className="space-y-4">
                        <a href="tel:+593993112096" className="flex items-center gap-3 text-white/80 hover:text-rojoMarca transition">
                            <Phone size={22} className="text-rojoMarca flex-shrink-0" />
                            <span className="text-base">+593 993112096</span>
                        </a>
                        <a href="https://wa.me/593993112096" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-rojoMarca transition">
                            <svg className="w-6 h-6 text-rojoMarca flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span className="text-base">WhatsApp Directo</span>
                        </a>
                        <a href="mailto:trajeselbuenvestir@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-rojoMarca transition">
                            <Mail size={22} className="text-rojoMarca flex-shrink-0" />
                            <span className="text-base">trajeselbuenvestir@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Columna 3: Ubicación */}
                <div>
                    <h5 className="text-xl font-serif font-bold mb-6 text-white">Nuestra Ubicación</h5>
                    <div className="flex items-start gap-3 text-white/80">
                        <MapPin size={24} className="text-rojoMarca flex-shrink-0 mt-1" />
                        <a href="https://maps.app.goo.gl/Am7okmaG1hMyj6xJ8" target="_blank" rel="noreferrer" className="text-base leading-relaxed hover:text-rojoMarca transition">
                            Calle 9 de Octubre N21-157<br />y Vicente Ramón Roca.<br />Edf. Santa Teresita Local #1
                        </a>
                    </div>
                </div>

                {/* Columna 4: Horarios de atención */}
                <div>
                    <h5 className="text-xl font-serif font-bold mb-6 text-white">Horarios de Atención</h5>
                    <div className="flex items-start gap-3 text-white/80 mb-4">
                        <Clock size={22} className="text-rojoMarca flex-shrink-0 mt-0.5" />
                        <div className="text-base">
                            <span className="block font-semibold text-white mb-0.5">Lunes a Viernes:</span>
                            <span className="text-white/70">09:00 a 18:00</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 text-white/80">
                        <div className="w-[22px] flex-shrink-0"></div>
                        <div className="text-base">
                            <span className="block font-semibold text-white mb-0.5">Sábados y Feriados:</span>
                            <span className="text-white/70">10:00 a 14:00</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Fila Centrada: Métodos de Pago con Imagen PNG */}
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center pt-4 mb-4">
                <p className="text-white/90 text-xs md:text-base font-semibold uppercase text-center mb-2">
                    Aceptamos todas las tarjetas de crédito
                </p>
                <div className="px-6 py-2 rounded-md inline-block">
                    <img
                        src="/tarjetas.png"
                        alt="Tarjetas de crédito aceptadas"
                        className="h-6 md:h-8 lg:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto pt-4 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 uppercase tracking-widest">
                <p>© 2026 Trajes El Buen Vestir. Todos los derechos reservados.</p>
                <a href="https://wa.me/593961284734" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-rojoMarca transition">
                    <p>Desarrollado por AtlaSarm</p>
                </a>
            </div>

        </footer>
    );
}
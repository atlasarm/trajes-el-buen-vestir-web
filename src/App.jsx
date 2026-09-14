import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Briefcase, Scissors, Ruler, ArrowRight, Sun, Moon, Menu, X, CreditCard, CheckCircle, Wallet, Landmark } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-negro text-negro dark:text-grisClaro font-sans selection:bg-rojoMarca selection:text-white transition-colors duration-500 overflow-x-hidden">
      
      {/* Navbar (Añadido 'isolate' para corregir Safari) */}
      <nav className="fixed w-full z-50 bg-white/90 dark:bg-negro/90 backdrop-blur-md border-b border-gray-200 dark:border-grisMarca/50 transition-colors duration-500 isolate">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex flex-col z-50">
            <a href="#" aria-label="Inicio" className="block transform-gpu" style={{ WebkitTransform: 'translateZ(0)' }}>
              <img 
                src={isDarkMode ? "/logo-dark.png" : "/logo.png"} 
                alt="Logo Trajes El Buen Vestir" 
                className="h-14 md:h-16 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_0_rgba(0,0,0,0)]"
              />
            </a>
          </div>
          
          <div className="flex items-center gap-6 z-50">
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-semibold text-grisMarca dark:text-grisClaro items-center">
              <a href="#nosotros" className="hover:text-rojoMarca transition">Nosotros</a>
              <a href="#servicios" className="hover:text-rojoMarca transition">Servicios</a>
              <a href="#contacto" className="hover:text-rojoMarca transition">Contacto</a>
            </div>

            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="p-2 rounded-full bg-gray-100 dark:bg-grisMarca text-negro dark:text-white hover:text-rojoMarca dark:hover:text-rojoMarca transition transform hover:scale-110"
              aria-label="Alternar Tema"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="https://wa.me/593993112096" target="_blank" rel="noreferrer" className="hidden md:block bg-rojoMarca text-white px-6 py-2 uppercase text-xs tracking-widest font-bold hover:bg-negro dark:hover:bg-white dark:hover:text-rojoMarca transition transform shadow-[0_0_15px_rgba(193,18,31,0.3)] dark:shadow-[0_0_15px_rgba(193,18,31,0.5)]">
              Agendar Cita
            </a>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-negro dark:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-negro border-b border-gray-200 dark:border-grisMarca transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 py-4' : 'max-h-0 py-0'}`}>
          <div className="flex flex-col items-center gap-6 text-sm uppercase tracking-widest font-semibold text-negro dark:text-white">
            <a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Nosotros</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Servicios</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="hover:text-rojoMarca transition">Contacto</a>
            <a href="https://wa.me/593993112096" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="bg-rojoMarca text-white px-8 py-3 rounded-sm">Agendar Cita</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-200 dark:bg-negro">
          {/* Imagen Única para ambos temas */}
          <img 
            src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Moda Ejecutiva y Sastrería" 
            className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-[70%_center]"
          />
          
          {/* Capa de contraste adaptativa (Claro/Oscuro) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent dark:from-negro dark:via-negro/85 dark:to-transparent transition-colors duration-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:w-2/3 lg:w-1/2 mr-auto pt-20">
          <div className="w-16 h-1 bg-rojoMarca mb-6 animate-pulse"></div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-negro dark:text-white leading-tight mb-6 drop-shadow-lg transition-colors">
            Proyecta <br/> <span className="text-rojoMarca italic">Distinción</span> y Elegancia.
          </h2>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-10 font-medium md:font-light border-l-2 border-rojoMarca pl-4 transition-colors">
            Ropa ejecutiva y formal para damas y caballeros. Confección sobre medida que transforma tu presencia corporativa.
          </p>
          <div className="flex gap-4">
            <a href="#servicios" className="group bg-rojoMarca text-white px-8 py-4 uppercase tracking-widest text-sm font-bold flex items-center gap-3 hover:bg-negro dark:hover:bg-white dark:hover:text-rojoMarca transition duration-300 shadow-[0_0_15px_rgba(193,18,31,0.3)] dark:shadow-[0_0_20px_rgba(193,18,31,0.4)]">
              Descubrir <ArrowRight className="group-hover:translate-x-2 transition" size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-24 px-6 bg-white dark:bg-grisMarca/10 relative z-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-negro dark:text-white mb-6 transition-colors">Nuestra Esencia</h3>
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
                <div className="bg-gray-50 dark:bg-grisMarca/40 p-6 rounded-md border border-gray-100 dark:border-white/5 shadow-sm hover:border-rojoMarca/40 dark:hover:border-rojoMarca/50 transition-all duration-300">
                  <h4 className="text-xl font-serif font-bold text-rojoMarca mb-3">Misión</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Crear elegancia y confort a través de prendas formales de calidad superior. Nos especializamos en la confección a medida de ternos ejecutivos, camisas, blusas y uniformes, adaptándonos a las necesidades individuales.
                  </p>
                </div>
                
                {/* Card Visión */}
                <div className="bg-gray-50 dark:bg-grisMarca/40 p-6 rounded-md border border-gray-100 dark:border-white/5 shadow-sm hover:border-rojoMarca/40 dark:hover:border-rojoMarca/50 transition-all duration-300">
                  <h4 className="text-xl font-serif font-bold text-rojoMarca mb-3">Visión</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Liderar la industria de la moda formal en Ecuador, destacando por nuestra innovación, calidad impecable y atención al detalle, aspirando a ser siempre la primera opción para el estilo elegante.
                  </p>
                </div>
              </div>
            </div>

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
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 px-6 bg-grisClaro dark:bg-negro relative z-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-negro dark:text-white mb-4 transition-colors">Servicios Exclusivos</h3>
            <p className="text-rojoMarca tracking-widest uppercase text-sm font-bold">Trabajos 100% Garantizados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-grisMarca/30 border border-gray-200 dark:border-grisMarca p-10 hover:border-rojoMarca dark:hover:border-rojoMarca hover:-translate-y-2 transition duration-300 group cursor-pointer shadow-sm hover:shadow-lg dark:shadow-none">
              <Scissors className="w-12 h-12 text-rojoMarca mb-6 group-hover:scale-110 group-hover:rotate-12 transition" />
              <h4 className="text-2xl font-serif text-negro dark:text-white mb-4 transition-colors">Confección a Medida</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">Ternos ejecutivos, blusas y camisas diseñadas en exclusiva para ti. Un ajuste perfecto que realza tu silueta profesional.</p>
            </div>
            
            <div className="bg-white dark:bg-grisMarca/30 border border-gray-200 dark:border-grisMarca p-10 hover:border-rojoMarca dark:hover:border-rojoMarca hover:-translate-y-2 transition duration-300 group cursor-pointer relative overflow-hidden shadow-sm hover:shadow-lg dark:shadow-none">
              <div className="absolute top-0 left-0 w-full h-1 bg-rojoMarca transform scale-x-0 group-hover:scale-x-100 transition duration-500"></div>
              <Briefcase className="w-12 h-12 text-rojoMarca mb-6 group-hover:scale-110 group-hover:-rotate-12 transition" />
              <h4 className="text-2xl font-serif text-negro dark:text-white mb-4 transition-colors">Uniformes Corporativos</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">Elevamos la imagen de tu empresa con prendas formales de alta durabilidad, diseñadas para el confort diario del equipo.</p>
            </div>
            
            <div className="bg-white dark:bg-grisMarca/30 border border-gray-200 dark:border-grisMarca p-10 hover:border-rojoMarca dark:hover:border-rojoMarca hover:-translate-y-2 transition duration-300 group cursor-pointer shadow-sm hover:shadow-lg dark:shadow-none">
              <Ruler className="w-12 h-12 text-rojoMarca mb-6 group-hover:scale-110 transition" />
              <h4 className="text-2xl font-serif text-negro dark:text-white mb-4 transition-colors">Arreglos Precisos</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors">Restauramos y ajustamos todo tipo de prendas de vestir con acabados invisibles y totalmente profesionales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Llamativo */}
      <footer id="contacto" className="bg-negro text-white pt-20 pb-10 px-6 border-t-[6px] border-rojoMarca">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Marca */}
          <div>
            <a href="#" aria-label="Inicio" className="inline-block mb-4">
              <img 
                src="/logo-dark.png" 
                alt="Logo Trajes El Buen Vestir" 
                className="h-20 w-auto object-contain"
              />
            </a>
            <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
              Líderes en moda formal y estilo corporativo. Transformamos la tela en distinción.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/TrajesElbuenVestir" target="_blank" rel="noreferrer" className="bg-grisMarca p-2 rounded-full hover:bg-rojoMarca transition" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10v9h4v-9z"/>
                </svg>
              </a>
              <a href="https://instagram.com/trajeselbuenvestir" target="_blank" rel="noreferrer" className="bg-grisMarca p-2 rounded-full hover:bg-rojoMarca transition" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contacto Directo */}
          <div>
            <h5 className="text-lg font-serif font-bold mb-6 text-white">Atención al Cliente</h5>
            <div className="space-y-4">
              <a href="tel:+593993112096" className="flex items-center gap-3 text-white/80 hover:text-rojoMarca transition">
                <Phone size={18} className="text-rojoMarca" />
                <span>+593 993112096</span>
              </a>
              <a href="https://wa.me/593993112096" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-rojoMarca transition">
                <svg className="w-5 h-5 text-rojoMarca" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Directo</span>
              </a>
            </div>
          </div>

          {/* Ubicación y Horario */}
          <div>
            <h5 className="text-lg font-serif font-bold mb-6 text-white">Ubicación y Horarios</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/80">
                  <MapPin size={20} className="text-rojoMarca flex-shrink-0 mt-1" />
                  <a href="https://maps.app.goo.gl/Am7okmaG1hMyj6xJ8" className="flex items-center gap-3 text-white/80 hover:text-rojoMarca transition">
                    <span className="text-sm leading-relaxed">
                      Calle 9 de Octubre N21-157<br/>y Vicente Ramón Roca.<br/>Edf. Santa Teresita Local #1
                    </span>
                  </a>
              </div>
              <div className="pt-2 text-sm text-white/70">
                <p><strong className="text-white">Lun - Vie:</strong> 09:00 a 18:00</p>
                <p><strong className="text-white">Sábados:</strong> 10:00 a 14:00</p>
              </div>
            </div>
          </div>

          {/* Pagos */}
          <div>
            <h5 className="text-lg font-serif font-bold mb-6 text-white">Métodos de Pago</h5>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Para tu mayor comodidad, aceptamos pagos en efectivo, transferencias y <strong className="text-white">todas las tarjetas de crédito.</strong>
            </p>
            <div className="flex items-center gap-4 text-white/70 flex-wrap mt-6">
              
              {/* Tarjetas a color tipo "plástico" */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* Visa */}
                <div className="bg-[#1434CB] rounded-md flex items-center justify-center h-11 w-[72px] shrink-0 shadow-md transition hover:-translate-y-1" title="Visa">
                  <img src="https://cdn.simpleicons.org/visa/white" alt="Visa" className="w-[54px] h-auto object-contain" />
                </div>
                {/* Mastercard */}
                <div className="bg-[#1c1c1c] border border-white/10 rounded-md flex items-center justify-center h-11 w-[72px] shrink-0 shadow-md transition hover:-translate-y-1" title="Mastercard">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="w-[46px] h-auto object-contain" />
                </div>
                {/* American Express */}
                <div className="bg-[#006FCF] rounded-md flex items-center justify-center h-11 w-[72px] shrink-0 shadow-md transition hover:-translate-y-1" title="American Express">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-11 w-auto object-contain" />
                </div>
                {/* Diners Club */}
                <div className="bg-[#004B87] rounded-md flex items-center justify-center h-11 w-[72px] shrink-0 shadow-md transition hover:-translate-y-1" title="Diners Club">
                  <img src="https://cdn.simpleicons.org/dinersclub/white" alt="Diners Club" className="h-9 w-auto object-contain" />
                </div>
                {/* Discover */}
                <div className="bg-[#E55C20] rounded-md flex items-center justify-center h-11 w-[72px] shrink-0 shadow-md transition hover:-translate-y-1" title="Discover">
                  <img src="https://cdn.simpleicons.org/discover/white" alt="Discover" className="w-[58px] h-auto object-contain" />
                </div>
              </div>
              
              {/* Separador Visual */}
              <div className="hidden sm:block w-px h-10 bg-white/20 mx-2"></div>

              {/* Efectivo y Transferencias */}
              <div className="flex items-center gap-3 mt-2 lg:mt-0">
                <div className="bg-grisMarca/50 p-2.5 rounded-md border border-white/10 hover:text-rojoMarca hover:border-rojoMarca transition cursor-default flex items-center shadow-md" title="Efectivo">
                  <Wallet size={22} />
                </div>
                <div className="bg-grisMarca/50 p-2.5 rounded-md border border-white/10 hover:text-rojoMarca hover:border-rojoMarca transition cursor-default flex items-center shadow-md" title="Transferencias Bancarias">
                  <Landmark size={22} />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 uppercase tracking-widest">
          <p>© 2026 Trajes El Buen Vestir. Todos los derechos reservados.</p>
          <p>Distinción & Elegancia</p>
        </div>
      </footer>
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';

// --- COMPONENTES DE ANIMACIÓN ---
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Solo anima una vez cuando entra en pantalla
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- ICONOS SVG ---
const IconLeaf = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const IconCpu = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>;
const IconWhatsApp = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
const IconCheck = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const IconClock = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconUsers = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const IconCalendar = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IconChevronLeft = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const IconChevronRight = ({ className }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;

// --- COMPONENTES UI COMPARTIDOS ---
const Button = ({ children, href, variant = 'primary', className = '' }) => {
  const baseStyle = "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5";
  const variants = {
    primary: "bg-[#38BDF8] text-slate-900 hover:bg-[#0284c7] hover:text-white",
    secondary: "bg-white text-[#1D4ED8] border border-slate-200 hover:border-[#1D4ED8] hover:bg-slate-50",
    success: "bg-[#0B6A35] text-white hover:bg-[#054a24]"
  };
  
  return (
    <a href={href} className={`${baseStyle} ${variants[variant]} ${className} px-6 py-3`}>
      {children}
    </a>
  );
};

// --- SECCIONES DE LA PÁGINA ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Imágenes locales sin bucle de error */}
          <img src="/IPN.png" alt="IPN" className="h-10 w-auto object-contain drop-shadow-sm" onError={(e) => { e.target.style.display = 'none'; }} />
          <img src="/ESIQIE.png" alt="ESIQIE" className="h-10 w-auto object-contain drop-shadow-sm" onError={(e) => { e.target.style.display = 'none'; }} />
          <div className={`font-black text-xl leading-tight hidden sm:block ${scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
            ESIQIE
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className={`font-semibold hover:text-[#38BDF8] transition-colors ${scrolled ? 'text-slate-700' : 'text-white drop-shadow-md'}`}>Programa</a>
          <a href="#timeline" className={`font-semibold hover:text-[#38BDF8] transition-colors ${scrolled ? 'text-slate-700' : 'text-white drop-shadow-md'}`}>Temario</a>
          <a href="#facilitators" className={`font-semibold hover:text-[#38BDF8] transition-colors ${scrolled ? 'text-slate-700' : 'text-white drop-shadow-md'}`}>Facilitadores</a>
          <a href="#requirements" className={`font-semibold hover:text-[#38BDF8] transition-colors ${scrolled ? 'text-slate-700' : 'text-white drop-shadow-md'}`}>Requisitos</a>
        </div>
        <Button variant={scrolled ? 'success' : 'primary'} href="#enroll" className="text-sm px-4 py-2">
          Inscribirme
        </Button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Decorators */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/80 to-[#0B6A35]/90 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>
      </div>
      
      {/* Urgency Banner */}
      <div className="absolute top-0 left-0 w-full bg-[#38BDF8] text-slate-900 text-center py-2 font-bold text-sm z-40 animate-pulse">
        🔥 ÚLTIMOS LUGARES DISPONIBLES - DOS GRUPOS APERTURADOS 🔥
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          {/* Logo del Seminario local sin bucle de error */}
          <img src="/U1S1L.png" alt="Logo Seminario Economía Circular" className="mx-auto h-32 md:h-40 w-auto mb-6 object-contain drop-shadow-2xl bg-white/90 rounded-3xl p-3 shadow-lg border border-white/20" onError={(e) => { e.target.style.display = 'none'; }} />
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30 text-sm font-semibold tracking-wider mb-6">
            16 SEMANAS • 100% EN LÍNEA • OPCIÓN A TITULACIÓN
          </span>
        </FadeIn>
        
        <FadeIn delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            Seminario en <span className="text-[#38BDF8] drop-shadow-md">Economía Circular</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <p className="mt-4 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light mb-10 drop-shadow">
            Gestión de Proyectos orientados a implementar modelos de economía circular en las organizaciones.
          </p>
        </FadeIn>
        
        <FadeIn delay={300} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="#enroll" className="text-lg">Inicia tu proceso ahora</Button>
          <Button variant="secondary" href="#timeline" className="text-lg bg-white/10 text-white border-white/30 hover:bg-white hover:text-[#1D4ED8]">Ver Temario Completo</Button>
        </FadeIn>

        {/* Social Proof / Stats */}
        <FadeIn delay={400} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/20 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">16</div>
            <div className="text-sm text-blue-200 mt-1">Semanas de duración</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-[#38BDF8] whitespace-nowrap">31 Ago / 03 Sep</div>
            <div className="text-sm text-blue-200 mt-1">Fechas de inicio 2026</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">2</div>
            <div className="text-sm text-blue-200 mt-1">Grupos disponibles</div>
          </div>
          <div className="text-center relative">
            <div className="text-3xl font-bold text-yellow-400 flex justify-center items-center gap-1">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping absolute top-2 right-6"></div>
              59
            </div>
            <div className="text-sm text-blue-200 mt-1">Lugares restantes</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const About = () => {
  const benefits = [
    { title: "Moodle 24/7", desc: "Accede a todas las actividades y recursos en línea en cualquier momento.", icon: <IconClock className="w-8 h-8 text-[#1D4ED8]" /> },
    { title: "Sesiones MS Teams", desc: "Aprox. 10 reuniones en línea para asesoría, dudas y retroalimentación.", icon: <IconUsers className="w-8 h-8 text-[#0B6A35]" /> },
    { title: "Proyecto Escrito", desc: "Entrega de un trabajo final aplicable, a desarrollar de manera individual o en equipo.", icon: <IconCheck className="w-8 h-8 text-[#38BDF8]" /> },
    { title: "Industria 4.0 y 5.0", desc: "Aplica tecnologías emergentes hacia modelos de producción inteligentes y sostenibles.", icon: <IconCpu className="w-8 h-8 text-[#1D4ED8]" /> },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-[#1D4ED8] font-bold tracking-wide uppercase text-sm mb-2">Sobre el Seminario</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Transforma la industria, asegura el futuro</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Diseñado para egresados y profesionistas que buscan liderar la transición ecológica corporativa mediante estrategias reales, rentables y avaladas internacionalmente.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 h-full">
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const GlobalReach = () => {
  const companies = [
    "Diario de México", "Ricinomex", "Safran", "Adhesivos Perdura", "Ipam Proyectos",
    "Schlumberger", "PIMOSA", "Shukumei", "Tuxpas", "Baxter", "ACCIONA", "Grupo Rocher",
    "CIEFSA", "Axtel", "Jugos del Valle", "Grupo Bimbo", "Pepsico", "Médicos Sin Fronteras",
    "Sulzer Pumps", "Siemens Healthineers", "Trade Polymers", "GEPP", "Laboratorios Grin",
    "Porcelanite", "Volkswagen", "CIS Consultores"
  ];

  return (
    <section id="impact" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-[#0B6A35] font-bold tracking-wide uppercase text-sm mb-2">Impacto Real</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Alcance Nacional e Internacional</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Nuestros egresados cursaron seminario en organizaciones de primer nivel alrededor del mundo.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FadeIn delay={100}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1D4ED8]">
                <IconGlobe className="w-8 h-8" />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2">6</div>
              <div className="text-lg font-bold text-slate-700 mb-2">Países</div>
              <p className="text-sm text-slate-500">México, Alemania, China, Estados Unidos, India y Canadá.</p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0B6A35]">
                <IconMapPin className="w-8 h-8" />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2">9</div>
              <div className="text-lg font-bold text-slate-700 mb-2">Estados (México)</div>
              <p className="text-sm text-slate-500">CDMX, Edomex, N.L., Puebla, Veracruz, Hidalgo, Querétaro, Guanajuato, Tlaxcala, Oaxaca, Tlaxcala, Chiapas y Q. Roo.</p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#38BDF8]">
                <IconBriefcase className="w-8 h-8" />
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2">+25</div>
              <div className="text-lg font-bold text-slate-700 mb-2">Empresas</div>
              <p className="text-sm text-slate-500">Multinacionales y organizaciones líderes en su sector.</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
          <h4 className="text-center font-bold text-slate-800 mb-8 border-b border-slate-200 pb-4 inline-block w-full">Casos de Éxito en el Sector Productivo</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {companies.map((company, idx) => (
              <span key={idx} className="bg-slate-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#38BDF8] hover:text-white hover:border-[#38BDF8] transition-colors cursor-default shadow-sm">
                {company}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
const Timeline = () => {
  const modules = [
    { week: "Semanas 1-4", title: "Gestión de Proyectos", date: "Unidad I", desc: "Introducción a la gestión de proyectos, iniciación, planificación, ejecución y metodologías de gestión de proyectos 4.0 enfocadas en sustentabilidad." },
    { week: "Semanas 5-8", title: "Desarrollo Sustentable", date: "Unidad II", desc: "Antecedentes, cumbres internacionales (Río, Johannesburgo, Kioto), Objetivos de Desarrollo Sostenible (ODS) y Agenda 2030." },
    { week: "Semanas 9-12", title: "Economía Circular", date: "Unidad III", desc: "Economía lineal vs circular, ecodiseño, ecología industrial, reciclaje, normatividad ambiental aplicable (COA, LAU) y prevención del Greenwashing." },
    { week: "Semanas 13-14", title: "Industria 4.0 y 5.0", date: "Unidad IV", desc: "Evolución de la revolución industrial, aplicaciones tecnológicas (Big Data, IoT, IA, Robótica) y transición hacia la Industria 5.0." },
    { week: "Semanas 3, 7, 11 y 15", title: "Trabajo escrito", date: "Unidad Transversal", desc: "Metodología de la investigación, propuesta de proyecto, análisis de información y entrega de Proyecto de Investigación." },
  ];

  return (
    <section id="timeline" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1D4ED8] opacity-5 blur-3xl transform skew-x-12"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-[#38BDF8] font-bold tracking-wide uppercase text-sm mb-2">Estructura Curricular</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Plan de Estudios</h3>
        </FadeIn>

        <div className="space-y-8">
          {modules.map((mod, idx) => (
            <FadeIn key={idx} delay={idx * 100} className="relative">
              <div className="flex flex-col md:flex-row gap-6 bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-lg hover:border-[#38BDF8]/50 transition-colors">
                <div className="md:w-1/4 shrink-0">
                  <div className="text-[#38BDF8] font-bold text-lg">{mod.date}</div>
                  <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mt-1">{mod.week}</div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">{mod.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Facilitators = () => {
  // Lista de docentes actualizadas con enlaces de imagen.
  // IMPORTANTE: Asegúrate de guardar las imágenes en tu carpeta "public"
  // con estos nombres (ej. "foto-edgar.jpg") para que se muestren.
  const docentes = [
    { name: "M. en A. Edgar Maldonado Mosqueda", role: "Coordinador y Facilitador", img: "/foto-edgar.jpg" },
    { name: "Dra. Jahel Valdés Sauceda", role: "Facilitadora", img: "/foto-jahel.jpg" },
    { name: "M. en C. Angélica Jaime Fonseca", role: "Facilitadora", img: "/foto-angelica.jpg" },
    { name: "Dra. Aurora Hernández Garrido", role: "Facilitadora", img: "/foto-aurora.jpg" },
  ];

  const facilitadorasApoyo = [
    { name: "Ing. Nassyra María Larragoiti Gutiérrez", role: "Facilitadora", img: "/foto-nassyra.jpg" },
    { name: "Ing. Yuliana Garrido Garrido", role: "Facilitadora", img: "/foto-yuliana.jpg" },
  ];

  // Función para manejar errores de imagen y poner un icono de respaldo
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex'; // Muestra el icono de usuario
  };

  return (
    <section id="facilitators" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-[#1D4ED8] font-bold tracking-wide uppercase text-sm mb-2">Cuerpo Académico</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Expertos a cargo del seminario</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conoce a los facilitadores que guiarán tu aprendizaje.
          </p>
        </FadeIn>

        <div className="mb-12">
          <h4 className="text-2xl font-bold text-slate-800 border-b-2 border-[#0B6A35] pb-2 inline-block mb-8">Docentes</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docentes.map((person, idx) => (
              <FadeIn key={idx} delay={idx * 100} className="h-full">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 h-full flex flex-col items-center text-center hover:-translate-y-1 transition-transform group">
                  <div className="w-24 h-24 rounded-full bg-slate-200 mb-4 overflow-hidden border-4 border-white shadow-md relative">
                    {/* Imagen principal (si existe en la carpeta public) */}
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" onError={handleImageError} />
                    {/* Icono de respaldo (se muestra si la imagen falla) */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100" style={{ display: 'none' }}>
                      <IconUsers className="w-12 h-12" />
                    </div>
                  </div>
                  <h5 className="font-bold text-slate-900 text-base md:text-lg mb-1">{person.name}</h5>
                  <p className="text-[#1D4ED8] text-sm font-medium">{person.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-slate-800 border-b-2 border-[#38BDF8] pb-2 inline-block mb-8">Facilitadoras</h4>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            {facilitadorasApoyo.map((person, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0 overflow-hidden border-2 border-white shadow-sm relative">
                     {/* Imagen principal */}
                     <img src={person.img} alt={person.name} className="w-full h-full object-cover" onError={handleImageError} />
                     {/* Icono de respaldo */}
                     <div className="absolute inset-0 flex items-center justify-center text-[#38BDF8] bg-blue-50" style={{ display: 'none' }}>
                      <IconUsers className="w-8 h-8" />
                     </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{person.name}</h5>
                    <p className="text-slate-500 text-sm">{person.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Requirements = () => {
  const [activeTab, setActiveTab] = useState('esiqie');

  const tabs = [
    { id: 'esiqie', label: 'Egresados ESIQIE' },
    { id: 'recent', label: 'Recién Egresados ESIQIE' },
    { id: 'other', label: 'Otras Unidades / Externos' }
  ];

  const content = {
    esiqie: [
      "Carta de liberación de servicio social.",
      "Certificado de calificaciones oficial.",
      "Carta de pasante."
    ],
    recent: [
      "5to reporte de servicio social validado por gestión escolar.",
      "Boleta global con el 100% de créditos cubiertos."
    ],
    other: [
      "Carta de no inconveniencia emitida por la escuela de origen.",
      "Revisar con su unidad académica si les permiten trabajar en equipo multidisciplinario o individual.",
      "Solicitar los documentos necesarios para el trámite de la carta de no inconveniencia con la Ing. Nassyra M. Larragoiti.",
      "Para egresados titulados: Cédula profesional."
    ]
  };

  return (
    <section id="requirements" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#0B6A35] opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#1D4ED8] opacity-30 blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Requisitos de Inscripción</h2>
          <p className="text-blue-200">Selecciona tu perfil para conocer la documentación necesaria.</p>
        </FadeIn>

        <div className="bg-slate-800 rounded-3xl p-2 sm:p-4 shadow-2xl border border-slate-700">
          <div className="flex flex-col sm:flex-row gap-2 mb-8 border-b border-slate-700 pb-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 text-center ${
                  activeTab === tab.id 
                    ? 'bg-[#38BDF8] text-slate-900 shadow-md' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-8 min-h-[250px] flex justify-center">
            <FadeIn key={activeTab} className="max-w-3xl w-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Documentos requeridos:</h3>
                <ul className="space-y-4">
                  {content[activeTab].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <IconCheck className="w-6 h-6 text-[#0B6A35] mr-3 shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingAndMedia = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  const testimonials = [
    {
      quote: "Me abrió muchas puertas el conocer de todos los temas que se trataron en el seminario, definitivamente es algo que me gustó, lo recomiendo y lo volvería a tomar.",
      img: "11"
    },
    {
      quote: "Muy bueno, esta modalidad me facilitó mucho el poder realizar las actividades a mi ritmo sin que tuviera que cambiar demasiado mi rutina, al igual que la asesoría con los profesores.",
      img: "32"
    },
    {
      quote: "Un punto bastante fuerte en el seminario es la empatía de los profesores, sigan así, ayudan mucho a las personas que trabajamos y nuestro tiempo al igual que el de todos es limitado.",
      img: "12"
    },
    {
      quote: "El seminario es muy bueno, y te da una perspectiva mejor de lo que sucede en la industria y en la sociedad en general. Los conocimientos adquiridos los considero de gran valor.",
      img: "45"
    }
  ];

  // Lista de videos. Puedes agregar o cambiar URLs de YouTube aquí.
  const videoList = [
    "https://www.youtube.com/embed/QOM_mLsamcA?si=tgeS1S-zZMBRiheU",
    // Ejemplos adicionales de videos, cámbialos por los reales si tienes más
    "https://www.youtube.com/embed/zCRKvDyyHmI?si=WzXJ38sA7g5J2D_X", 
    "https://www.youtube.com/embed/2B2b8H5hJgI?si=Kq2l_X8_U9n6_xH9"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextVideo = () => setCurrentVideo((prev) => (prev + 1) % videoList.length);
  const prevVideo = () => setCurrentVideo((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#1D4ED8] mb-6">Fechas y Grupos Disponibles (2026-2)</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-inner hover:-translate-y-1 transition-transform">
                  <div className="font-bold text-xl text-slate-900 mb-2 border-b border-blue-200 pb-2">Grupo 1</div>
                  <div className="text-slate-700 flex items-center gap-2 mb-2 font-semibold">
                    <IconCalendar className="w-5 h-5 text-[#0B6A35]" /> Inicio: 31 de Agosto 2026
                  </div>
                  <div className="text-slate-600 flex items-center gap-2">
                    <IconClock className="w-5 h-5 text-slate-400" /> Término: 16 de Diciembre 2026
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-inner hover:-translate-y-1 transition-transform">
                  <div className="font-bold text-xl text-slate-900 mb-2 border-b border-blue-200 pb-2">Grupo 2</div>
                  <div className="text-slate-700 flex items-center gap-2 mb-2 font-semibold">
                    <IconCalendar className="w-5 h-5 text-[#0B6A35]" /> Inicio: 03 de Septiembre 2026
                  </div>
                  <div className="text-slate-600 flex items-center gap-2">
                    <IconClock className="w-5 h-5 text-slate-400" /> Término: 20 de Diciembre 2026
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Pricing Card */}
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1D4ED8] to-[#0B6A35]"></div>
              <div className="p-10 text-center bg-slate-50 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-600 mb-2 uppercase tracking-wide">Inversión Única</h3>
                <div className="text-5xl font-black text-slate-900 mb-4">$14,000 <span className="text-xl text-slate-500 font-medium">MXN</span></div>
                <p className="text-slate-500 text-sm">Programa completo de 16 semanas.</p>
              </div>
              <div className="p-10">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-600"><IconCheck className="w-5 h-5 text-[#0B6A35] mr-3 shrink-0" /> Acceso a Moodle 24/7 y sesiones en Teams</li>
                  <li className="flex items-center text-slate-600"><IconCheck className="w-5 h-5 text-[#0B6A35] mr-3 shrink-0" /> Material didáctico y casos de estudio</li>
                  <li className="flex items-center text-slate-600"><IconCheck className="w-5 h-5 text-[#0B6A35] mr-3 shrink-0" /> Constancia con valor curricular y opción a titulación</li>
                </ul>
                <div className="bg-slate-50 rounded-xl p-4 mb-8 border border-slate-100">
                  <p className="text-sm text-slate-500 font-semibold mb-2">Formas de pago aceptadas:</p>
                  <p className="text-xs text-slate-400">Transferencia bancaria SPEI y Depósito en ventanilla BBVA.</p>
                </div>
                <Button variant="primary" href="#enroll" className="w-full py-4 text-lg">
                  Reservar mi lugar
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Media & Testimonials */}
          <FadeIn delay={200} className="space-y-8">
            
            {/* Carrusel de Videos de YouTube */}
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 w-full aspect-video">
                <iframe 
                  className="w-full h-full"
                  src={videoList[currentVideo]} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Controles de video (Flechas) */}
              {videoList.length > 1 && (
                <>
                  <button onClick={prevVideo} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-[#1D4ED8] rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextVideo} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-[#1D4ED8] rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <IconChevronRight className="w-6 h-6" />
                  </button>
                  {/* Indicador de video */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {videoList.map((_, idx) => (
                      <div key={idx} className={`h-1.5 rounded-full transition-all ${currentVideo === idx ? 'w-4 bg-white shadow' : 'w-1.5 bg-white/50'}`}></div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Testimonios - Carrusel */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 relative">
              <div className="text-4xl text-[#38BDF8] opacity-20 absolute top-4 left-4 font-serif">"</div>
              
              <div className="relative z-10 transition-all duration-500 ease-in-out">
                <p className="text-slate-600 italic pl-6 text-sm mb-4 min-h-[100px] md:min-h-[80px]">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center gap-3 pl-6">
                  <img src={`https://i.pravatar.cc/100?img=${testimonials[currentTestimonial].img}`} alt="Egresado" className="w-10 h-10 rounded-full border-2 border-[#1D4ED8]" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Egresado del Seminario</div>
                    <div className="text-xs text-slate-500">Generaciones Anteriores</div>
                  </div>
                </div>
              </div>

              {/* Controles de Carrusel (Los puntitos) */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === idx ? 'bg-[#38BDF8] w-6' : 'bg-slate-300 w-2 hover:bg-[#1D4ED8]'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

const EnrollmentForm = () => {
  return (
    <section id="enroll" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-[#1D4ED8] mb-4">Inicia tu Inscripción</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Por favor, completa el siguiente formulario. Asegúrate de tener tus documentos listos en formato digital para agilizar tu proceso.
        </p>
        
        {/* Aquí va el iFrame de Microsoft Forms corregido para React */}
        <div className="bg-slate-50 p-2 sm:p-6 rounded-3xl border border-slate-200 shadow-inner w-full min-h-[600px] flex items-center justify-center">
          <iframe 
            width="640px"
            height="480px"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=2fRL-ZeAlEet9qVGbKKFY5_1DTWk4O5HlOXCR7ztX2VUNFpSU0s2VEFaOENRSk1SRDdPTzg2VDZSTC4u&embed=true"
            frameBorder="0" 
            marginWidth="0" 
            marginHeight="0"
            style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh', width: '100%' }}
            allowFullScreen 
            webkitallowfullscreen="true" 
            mozallowfullscreen="true" 
            msallowfullscreen="true"
            title="Formulario de inscripción"
          >
          </iframe>
        </div>

      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src="/IPN.png" alt="IPN" className="h-10 w-auto object-contain opacity-90" onError={(e) => { e.target.style.display = 'none'; }} />
          <img src="/ESIQIE.png" alt="ESIQIE" className="h-10 w-auto object-contain opacity-90" onError={(e) => { e.target.style.display = 'none'; }} />
          <div className="font-black text-lg leading-tight text-white">ESIQIE</div>
        </div>
        <p className="text-sm mb-4">Instituto Politécnico Nacional.<br/>"La Técnica al Servicio de la Patria"</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contacto</h4>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><span className="font-bold text-[#38BDF8]">Ing. Nassyra M. Larragoiti Gutiérrez</span></li>
          <li className="text-xs text-slate-400 mb-2">Coordinadora de comunicación y seguimiento académico.</li>
          <li>Email: nlarragoitig9200@egresado.ipn.mx</li>
          <li>WhatsApp: 5512011338</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Enlaces</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#about" className="hover:text-white transition-colors">Sobre el Seminario</a></li>
          <li><a href="#requirements" className="hover:text-white transition-colors">Requisitos</a></li>
          <li><a href="#pricing" className="hover:text-white transition-colors">Inversión</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
      <p>&copy; {new Date().getFullYear()} ESIQIE - IPN. Todos los derechos reservados.</p>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a href="https://chat.whatsapp.com/Geyk4SdaRtoK305RgeufDF" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 group">
    <IconWhatsApp className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      ¿Dudas? Escríbenos
    </span>
  </a>
);

export default function App() {
  return (
    <div className="font-sans text-slate-800 antialiased selection:bg-[#38BDF8] selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <GlobalReach /> {/* <-- ESTA ES LA LÍNEA MÁGICA QUE FALTA */}
      <Timeline />
      <Facilitators />
      <Requirements />
      <PricingAndMedia />
      <EnrollmentForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

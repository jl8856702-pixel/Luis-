/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Wine, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  Star, 
  X, 
  Send, 
  ChevronRight, 
  Calendar, 
  Flame,
  Sparkles,
  ShoppingBag,
  Menu as MenuIcon
} from 'lucide-react';

// ================= CONFIGURACIÓN GLOBAL =================
const CONFIG = {
  whatsapp: '593989375331',
  phoneDisplay: '+593 98 937 5331',
  address: 'Av. Principal 123, Sector Culinario',
  instagram: 'https://instagram.com/aromafuego',
  facebook: 'https://facebook.com/aromafuego',
};

// ================= MENÚ OFICIAL =================
const menuItems = [
  {
    id: '1',
    name: 'Costillar Wagyu Ahumado 48h',
    category: 'Plato Principal',
    description: 'Corte Wagyu de grado superior cocinado a baja temperatura durante 48 horas con carbón de roble blanco y reducción de vino tinto y trufa negra.',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    badge: 'Especialidad de la Casa'
  },
  {
    id: '2',
    name: 'Pulpo a la Brasa con Emulsión de Azafrán',
    category: 'Entrada',
    description: 'Pulpo gallego braseado al punto de fuego vivo, acompañado de parmentier de papa morada, aceite de pimentón ahumado y hilos de azafrán.',
    price: 36.00,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    badge: 'Recomendado del Chef'
  },
  {
    id: '3',
    name: 'Vino Tinto Gran Reserva Malbec 2018',
    category: 'Vinos & Bodega',
    description: 'Notas intensas de frutos negros maduros, toques de vainilla y tabaco con 18 meses de barrica de roble francés. Excepcional maridaje.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    badge: 'Gran Reserva'
  }
];

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<{ name: string; price: number } | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] selection:bg-[#c5a059] selection:text-black">
      
      {/* ================= NAVEGACIÓN (HEADER) ================= */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c5a059] to-[#8c6d28] flex items-center justify-center text-black font-bold shadow-lg shadow-[#c5a059]/20">
              <Flame className="w-5 h-5 fill-black" />
            </div>
            <div>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white group-hover:text-[#c5a059] transition-colors">
                Aroma & Fuego
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#c5a059]">
                Alta Cocina de Autor
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#inicio" className="hover:text-[#c5a059] transition-colors whitespace-nowrap">Inicio</a>
            <a href="#menu" className="hover:text-[#c5a059] transition-colors whitespace-nowrap">Menú</a>
            <a href="#nosotros" className="hover:text-[#c5a059] transition-colors whitespace-nowrap">Nosotros</a>
            <a href="#contacto" className="hover:text-[#c5a059] transition-colors whitespace-nowrap">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsReservationOpen(true)}
              className="px-6 py-2.5 text-sm font-semibold text-black bg-[#c5a059] hover:bg-[#b08b47] rounded-full transition-all shadow-lg shadow-[#c5a059]/20 whitespace-nowrap flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reservar Mesa
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="md:hidden p-2 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121212] border-b border-[#222] px-6 py-6 space-y-4">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-[#c5a059] font-medium">Inicio</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-[#c5a059] font-medium">Menú</a>
            <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-[#c5a059] font-medium">Nosotros</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-[#c5a059] font-medium">Contacto</a>
            <div className="pt-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); setIsReservationOpen(true); }}
                className="w-full py-3 text-center text-sm font-semibold text-black bg-[#c5a059] rounded-full shadow-md"
              >
                Reservar Mesa
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85" 
            alt="Ambiente Aroma & Fuego" 
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Gastronomía de Vanguardia & Fuego Vivo
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Una Experiencia Culinaria Inolvidable
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-300 font-light mb-10 leading-relaxed">
            Descubra el arte del fuego y la alta cocina de autor en un ambiente íntimo y sofisticado donde cada platillo cuenta una historia de pasión y excelencia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#b08b47] rounded-full transition-all shadow-xl shadow-[#c5a059]/20 flex items-center justify-center gap-2"
            >
              Explorar Menú
              <ChevronRight className="w-4 h-4" />
            </a>
            <button 
              onClick={() => setIsReservationOpen(true)}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              Reservar Mesa
            </button>
          </div>
        </div>
      </section>

      {/* ================= MENÚ DESTACADO ================= */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-semibold block mb-3">Nuestra Carta Selecta</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">Menú Destacado</h2>
          <div className="w-16 h-0.5 bg-[#c5a059] mx-auto mb-6"></div>
          <p className="text-neutral-400 text-base sm:text-lg">
            Una selección de nuestras creaciones más emblemáticas preparadas con ingredientes de origen excepcional y técnicas culinarias de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-[#121212] rounded-2xl overflow-hidden border border-[#222] hover:border-[#c5a059]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 text-xs font-medium text-neutral-300 uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">{item.name}</h3>
                    <span className="text-xl font-bold text-[#c5a059] font-mono whitespace-nowrap">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">{item.description}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <button 
                  onClick={() => setSelectedDish({ name: item.name, price: item.price })}
                  className="w-full py-3 bg-neutral-900 hover:bg-[#c5a059] hover:text-black text-neutral-200 text-xs uppercase tracking-wider font-semibold rounded-xl border border-neutral-800 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <ShoppingBag className="w-4 h-4 text-[#c5a059] group-hover/btn:text-black transition-colors" />
                  Pedir por WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SOBRE NOSOTROS ================= */}
      <section id="nosotros" className="py-24 bg-[#121212] border-t border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-semibold block">Nuestra Filosofía</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">El Arte de Cocinar con Alma, Fuego y Precisión</h2>
            <p className="text-neutral-300 leading-relaxed text-base sm:text-lg font-light">
              Fundado bajo la premisa de rescatar los sabores primigenios de la cocina a la brasa, <strong className="text-white font-medium">Aroma & Fuego</strong> combina técnicas culinarias ancestrales con la alta cocina contemporánea.
            </p>
            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
              Cada brasa es controlada meticulosamente con maderas nobles seleccionadas, aportando matices ahumados inigualables a cortes de carne madurados y mariscos frescos del día.
            </p>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#333]">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85" alt="Chef preparing dish" className="w-full h-[480px] object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER / CONTACTO ================= */}
      <footer id="contacto" className="bg-[#0f0f0f] border-t border-[#222] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#c5a059] flex items-center justify-center text-black font-bold">
                <Flame className="w-4 h-4 fill-black" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">Aroma & Fuego</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">Alta cocina y cocina de autor al calor de las brasas.</p>
            <div className="flex items-center gap-3 pt-2">
              {CONFIG.instagram && (
                <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-neutral-300 hover:text-[#c5a059]"><Instagram className="w-4 h-4" /></a>
              )}
              {CONFIG.facebook && (
                <a href={CONFIG.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-neutral-300 hover:text-[#c5a059]"><Facebook className="w-4 h-4" /></a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Horarios de Atención</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" /><div><strong className="text-neutral-200 block">Martes a Sábado</strong>13:00 - 15:30 | 19:30 - 23:30</div></li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" /><div><strong className="text-neutral-200 block">Domingos</strong>13:00 - 16:30</div></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4">Ubicación & Contacto</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" /><span>{CONFIG.address}</span></li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" /><span>{CONFIG.phoneDisplay}</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Aroma & Fuego. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* MODAL DE PEDIDO POR WHATSAPP */}
      {selectedDish && (
        <OrderModal 
          dish={selectedDish} 
          onClose={() => setSelectedDish(null)} 
        />
      )}

      {/* MODAL DE RESERVA */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />

    </div>
  );
}

// ================= COMPONENTE ORDER MODAL =================
function OrderModal({ dish, onClose }: { dish: { name: string; price: number }; onClose: () => void }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, me gustaría ordenar el platillo:%0A- Platillo: ${encodeURIComponent(dish.name)}%0A- Precio: $${dish.price.toFixed(2)}%0A- Nombre: ${encodeURIComponent(form.name)}%0A- Gmail: ${encodeURIComponent(form.email)}%0A- Teléfono: ${encodeURIComponent(form.phone)}%0A- Notas: ${encodeURIComponent(form.notes || 'Ninguna')}`;
    
    const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#121212] border border-[#333] rounded-2xl max-w-md w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} aria-label="Cerrar modal" className="absolute top-6 right-6 text-neutral-400 hover:text-white p-1 rounded-lg">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-semibold block mb-2">Pedido Directo</span>
          <h3 className="font-serif text-2xl font-bold text-white mb-1">{dish.name}</h3>
          <p className="text-lg font-mono font-bold text-[#c5a059]">${dish.price.toFixed(2)}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Nombre Completo</label>
            <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Ej. Roberto Gómez" className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Correo Gmail</label>
            <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Ej. roberto@gmail.com" className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Teléfono / WhatsApp</label>
            <input type="tel" required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} placeholder="Ej. +593 99..." className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Notas Especiales (Opcional)</label>
            <textarea rows={2} value={form.notes} onChange={(e) => setForm({...form, notes: e.target.value})} placeholder="Término de la carne, alergias..." className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-4 text-sm font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#b08b47] rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
            Enviar Pedido por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

// ================= COMPONENTE RESERVATION MODAL =================
function ReservationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [resForm, setResForm] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    notes: ''
  });

  if (!isOpen) return null;

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, deseo solicitar una reserva en Aroma & Fuego:%0A- Nombre: ${encodeURIComponent(resForm.name)}%0A- Teléfono: ${encodeURIComponent(resForm.phone)}%0A- Fecha: ${encodeURIComponent(resForm.date)}%0A- Hora: ${encodeURIComponent(resForm.time)}%0A- Personas: ${encodeURIComponent(resForm.guests)}%0A- Notas: ${encodeURIComponent(resForm.notes || 'Ninguna')}`;
    
    const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#121212] border border-[#333] rounded-2xl max-w-lg w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} aria-label="Cerrar modal de reserva" className="absolute top-6 right-6 text-neutral-400 hover:text-white p-1 rounded-lg">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-semibold block mb-2">Reserva Exclusiva</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">Reserve su Mesa en Aroma & Fuego</h3>
          <p className="text-xs text-neutral-400">La solicitud se confirma directamente a través de nuestro WhatsApp oficial.</p>
        </div>

        <form onSubmit={handleReservationSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Nombre Completo</label>
              <input type="text" required value={resForm.name} onChange={(e) => setResForm({...resForm, name: e.target.value})} placeholder="Ej. Roberto Gómez" className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Teléfono / WhatsApp</label>
              <input type="tel" required value={resForm.phone} onChange={(e) => setResForm({...resForm, phone: e.target.value})} placeholder="Ej. +593 99..." className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Fecha</label>
              <input type="date" required min={new Date().toISOString().split('T')[0]} value={resForm.date} onChange={(e) => setResForm({...resForm, date: e.target.value})} className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Hora</label>
              <select value={resForm.time} onChange={(e) => setResForm({...resForm, time: e.target.value})} className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]">
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="19:30">19:30</option>
                <option value="20:30">20:30</option>
                <option value="21:30">21:30</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Personas</label>
              <select value={resForm.guests} onChange={(e) => setResForm({...resForm, guests: e.target.value})} className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059]">
                <option value="1">1 Persona</option>
                <option value="2">2 Personas</option>
                <option value="4">4 Personas</option>
                <option value="6">6 Personas</option>
                <option value="8">8+ Personas</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">Notas Especiales (Opcional)</label>
            <textarea rows={2} value={resForm.notes} onChange={(e) => setResForm({...resForm, notes: e.target.value})} placeholder="Alergias, ocasión especial..." className="w-full bg-[#1a1a1a] border border-[#333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c5a059] resize-none"></textarea>
          </div>
          <button type="submit" className="w-full py-4 text-sm font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#b08b47] rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
            Confirmar Reserva por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

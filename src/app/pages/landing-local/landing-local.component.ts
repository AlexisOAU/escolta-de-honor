import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type Stat = { label: string };
type ValuePoint = { title: string; desc: string };
type Step = {
  n: string;
  title: string;
  desc: string;
  mediaSrc: string;
  mediaAlt: string;
};
type GalleryItem = { src: string; alt: string };

@Component({
  selector: 'app-landing-local',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './landing-local.component.html',
  styleUrl: './landing-local.component.scss',
})
export class LandingLocalComponent {
  // Assets
  heroImage = 'assets/img/hero-portada.jpg';
  videoSrc = 'assets/video/hero.mp4';

  // Branding / Copy
  brand = 'ESCOLTA DE HONOR';
  tagline = 'Ceremonia de Cruce de Espadas para Quinceaños y Promociones';
  heroDesc =
    'Un ingreso de gala que aporta presencia, orden y distinción al momento más importante del evento.';

  // ✅ WhatsApp (REEMPLAZA con tu número en formato internacional sin +)
  whatsappNumber = '51994503279'; // EJ: 51987654321
  whatsappText =
    'Hola, quiero cotizar la Escolta de Honor para un evento. Fecha y lugar: _____. Tipo de evento: Quinceaños/Promoción.';

  // CTA (Clientes)
  ctaPrimary = 'COTIZAR POR WHATSAPP';
  ctaSecondary = 'VER PROTOCOLO';

  // Badges/Stats (mensajes cortos y potentes)
  stats: Stat[] = [
    { label: '⚔️ Cruce de Espadas' },
    { label: '🎖️ Ceremonia de Gala' },
    { label: '📸 Impacto para fotos y video' },
  ];

  // Propuesta de valor (marketing)
  values: ValuePoint[] = [
    { title: 'Elegancia real', desc: 'Presencia ceremonial con disciplina, estética y coordinación.' },
    { title: 'Orden y seguridad', desc: 'Movimientos controlados y distancias cuidadas para un ingreso impecable.' },
    { title: 'Momentos inolvidables', desc: 'Un espectáculo visual perfecto para grabación y fotografía.' },
    { title: 'Cero estrés', desc: 'Se coordina previamente. No requiere ensayo ni complicaciones.' },
  ];

  // ✅ Reserva en 3 pasos (reduce consultas)
  reservaPasos: ValuePoint[] = [
    { title: '1) Escríbenos por WhatsApp', desc: 'Indica fecha, distrito, tipo de evento y hora aproximada.' },
    { title: '2) Confirmamos logística', desc: 'Te decimos disponibilidad, costo y el flujo exacto en tu evento.' },
    { title: '3) Reservas y listo', desc: 'Se separa fecha y coordinamos el ingreso ceremonial.' },
  ];

  // ✅ Info rápida (FAQ de alto impacto)
  infoRapida: ValuePoint[] = [
    { title: 'Cobertura', desc: 'Servicio disponible por coordinación (según ciudad y logística).' },
    { title: 'Duración', desc: 'Depende del programa; el ingreso ceremonial se integra al evento.' },
    { title: 'Requisitos', desc: 'Espacio para formación y coordinación de música/ingreso (si aplica).' },
    { title: 'Ensayo', desc: 'No se requiere ensayo: trabajamos con protocolo y señal del evento.' },
  ];

  // Protocolo paso a paso (10) + video por paso
  steps: Step[] = [
    {
      n: '01',
      title: 'Acompañamiento vehicular',
      desc: 'Formación alrededor del vehículo que traslada a la quinceañera hasta la puerta del local.',
      mediaSrc: 'assets/video/protocolo/01.mp4',
      mediaAlt: 'Acompañamiento vehicular',
    },
    {
      n: '02',
      title: 'Túnel de velas / rosas',
      desc: 'El chambelán acompaña a la quinceañera durante el apagado de velas o la toma de rosas.',
      mediaSrc: 'assets/video/protocolo/02.mp4',
      mediaAlt: 'Túnel de velas o rosas',
    },
    {
      n: '03',
      title: 'Ingreso ceremonial (cruce de espadas)',
      desc: 'La figura paterna recibe a la quinceañera. Mamá ingresa con el chambelán; padrinos, a continuación.',
      mediaSrc: 'assets/video/protocolo/03.mp4',
      mediaAlt: 'Ingreso ceremonial con cruce de espadas',
    },
    {
      n: '04',
      title: 'Cambio de zapatillas',
      desc: 'Acompañamiento ceremonial para que el momento se vea ordenado y elegante.',
      mediaSrc: 'assets/video/protocolo/04.mp4',
      mediaAlt: 'Cambio de zapatillas',
    },
    {
      n: '05',
      title: 'Baile con papá e invitados',
      desc: 'Formación alrededor para enmarcar el baile y elevar el impacto visual.',
      mediaSrc: 'assets/video/protocolo/05.mp4',
      mediaAlt: 'Baile con papá e invitados',
    },
    {
      n: '06',
      title: 'Palabras de familiares y quinceañera',
      desc: 'Presencia discreta y ordenada durante los mensajes, sin interrumpir el programa.',
      mediaSrc: 'assets/video/protocolo/06.mp4',
      mediaAlt: 'Palabras familiares y quinceañera',
    },
    {
      n: '07',
      title: 'Brindis',
      desc: 'Acompañamiento ceremonial para que el brindis se vea coordinado y elegante.',
      mediaSrc: 'assets/video/protocolo/07.mp4',
      mediaAlt: 'Brindis',
    },
    {
      n: '08',
      title: 'Baile con el chambelán',
      desc: 'Formación en la pista. El chambelán solicita permiso a los padres antes de iniciar.',
      mediaSrc: 'assets/video/protocolo/08.mp4',
      mediaAlt: 'Baile con el chambelán',
    },
    {
      n: '09',
      title: 'Sesión de fotos',
      desc: 'Sesión breve con formación para tomas más impactantes.',
      mediaSrc: 'assets/video/protocolo/09.mp4',
      mediaAlt: 'Sesión de fotos',
    },
    {
      n: '10',
      title: 'Despedida',
      desc: 'Despedida formal deseando felicidades y cierre ceremonial del servicio.',
      mediaSrc: 'assets/video/protocolo/10.mp4',
      mediaAlt: 'Despedida',
    },
  ];

  // ✅ Checklist (ahora para cliente)
  checklist: string[] = [
    'Fecha y hora del ingreso / ceremonia',
    'Distrito / referencia del local',
    'Tipo de evento (Quinceaños o Promoción)',
    'Nombre de la homenajeada / promoción',
    'Punto exacto de ingreso y música (si aplica)',
  ];

  // Galería (IMÁGENES + VIDEOS)
  gallery: GalleryItem[] = [
    { src: 'assets/img/gallery/01.jpg', alt: 'Cruce de espadas - túnel' },
    { src: 'assets/img/gallery/02.jpg', alt: 'Ingreso ceremonial - foto central' },
    { src: 'assets/img/gallery/03.jpg', alt: 'Evento - presentación' },
    { src: 'assets/img/gallery/04.jpg', alt: 'Quinceaños - momento principal' },
    { src: 'assets/img/gallery/05.mp4', alt: 'Video - ingreso (1)' },
    { src: 'assets/img/gallery/06.mp4', alt: 'Video - ingreso (2)' },
  ];

  isVideo(src?: string): boolean {
    if (!src) return false;
    const s = src.toLowerCase().split('?')[0].split('#')[0];
    return s.endsWith('.mp4') || s.endsWith('.webm') || s.endsWith('.ogg');
  }

  // ✅ Abre WhatsApp con mensaje listo
  openWhatsApp(): void {
    const text = encodeURIComponent(this.whatsappText);
    const url = `https://wa.me/${this.whatsappNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  trackBySrc(_: number, item: GalleryItem): string {
    return item.src;
  }

  forceMuteAndPlay(ev: Event): void {
    const video = ev.target as HTMLVideoElement;
    video.muted = true;
    video.volume = 0;

    const p = video.play();
    if (p && typeof (p as Promise<void>).catch === 'function') {
      (p as Promise<void>).catch(() => {});
    }
  }
}

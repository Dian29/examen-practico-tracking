/**
 * Configuración de tema para la aplicación.
 * Define la estructura de propiedades necesarias para personalizar la apariencia visual de la interfaz.
 * 
 * @interface ThemeConfiguration
 * @property {number} id - Identificador único del tema.
 * @property {string} logo - Ruta o URL del logo del tema.
 * @property {boolean} [isLogoUrl] - Indica si la propiedad logo es una URL. Opcional.
 * @property {string} title - Título principal del tema.
 * @property {string} subtitle - Subtítulo del tema.
 * @property {string} primaryButton - Color o clase CSS del botón principal.
 * @property {string} bgClass - Clase CSS para el fondo de la aplicación.
 * @property {string} textClass - Clase CSS para el color del texto.
 * @property {string} cardBg - Clase CSS para el fondo de las tarjetas.
 * @property {string} titleColor - Clase CSS para el color del título.
 * @property {string} inputClass - Clase CSS para los campos de entrada.
 * @property {string} modalBg - Clase CSS para el fondo de los modales.
 * @property {string} modalContent - Clase CSS para el contenido de los modales.
 * @property {string} modalButton - Clase CSS para los botones de los modales.
 * 
 * @constant {Record<number, ThemeConfiguration>} THEME_CONFIGS - Configuraciones de temas disponibles, indexados por su ID.
 * @constant {ThemeConfiguration} DEFAULT_THEME - Configuración de tema predeterminada utilizada si no se especifica un tema válido.
 */

export interface ThemeConfiguration {
  id: number;
  logo: string;
  isLogoUrl?: boolean;
  isIcon?: boolean;
  title: string;
  subtitle: string;
  primaryButton: string;
  bgClass: string;
  textClass: string;
  cardBg: string;
  titleColor: string;
  inputClass: string;
  modalBg: string;  
  modalContent: string;
  modalButton: string;
}

export const THEME_CONFIGS: Record<number, ThemeConfiguration> = {
  1: {
    id: 1,
    logo: "\u{1F680}",
    title: "Portal de Innovación",
    subtitle: "Captura tu identidad para comenzar el viaje.",
    primaryButton: "bg-indigo-600 hover:bg-indigo-700 text-white",
    bgClass: "bg-gradient-to-br from-slate-900 to-indigo-950",
    textClass: "text-indigo-100",
    cardBg: "bg-slate-800/80 backdrop-blur-md border border-indigo-500/20",
    titleColor: "text-indigo-400",
    inputClass: "bg-slate-900/50 border-slate-700 text-white placeholder-slate-400 focus:ring-indigo-500",
    modalBg: "bg-slate-900 border border-indigo-500/30", 
    modalContent: "text-indigo-400", 
    modalButton: "bg-indigo-600 hover:bg-indigo-700 text-white"
  },
  2: {
    id: 2,
    logo: "\u{1F33F}",
    title: "Ecosistema Sustentable",
    subtitle: "Regístrate en nuestra plataforma verde.",
    primaryButton: "bg-emerald-600 hover:bg-emerald-700 text-white",
    bgClass: "bg-gradient-to-br from-stone-900 to-emerald-950",
    textClass: "text-emerald-100",
    cardBg: "bg-stone-800/80 backdrop-blur-md border border-emerald-500/20",
    titleColor: "text-emerald-400",
    inputClass: "bg-slate-900/50 border-slate-700 text-white placeholder-slate-400 focus:ring-indigo-500",
    modalBg: "bg-stone-900 border border-emerald-500/30", 
    modalContent: "text-emerald-400", 
    modalButton: "bg-emerald-600 hover:bg-emerald-700 text-white"
  },
  3: {
    id: 3,
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&h=150&q=80",
    isLogoUrl: true,
    title: "Nexo Artificial",
    subtitle: "Sincroniza tu interfaz con la red neuronal.",
    primaryButton: "bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-fuchsia-500/20",
    bgClass: "bg-gradient-to-br from-zinc-950 via-slate-900 to-fuchsia-950",
    textClass: "text-fuchsia-100",
    cardBg: "bg-zinc-900/90 backdrop-blur-md border border-fuchsia-500/30",
    titleColor: "text-fuchsia-400",
    inputClass: "bg-slate-900/50 border-slate-700 text-white placeholder-slate-400 focus:ring-indigo-500",
    modalBg: "bg-zinc-900 border border-fuchsia-500/30", 
    modalContent: "text-fuchsia-400", 
    modalButton: "bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
  },
  4: {
    id: 4,
    logo: "auto_awesome",
    isIcon: true,
    title: "Estudio de Diseño",
    subtitle: "Interfaz fluida orientada a la experiencia de usuario.",
    primaryButton: "bg-rose-500 hover:bg-rose-600 text-white",
    bgClass: "bg-gradient-to-br from-zinc-100 via-stone-50 to-rose-50",
    textClass: "text-stone-800",
    cardBg: "bg-white/80 backdrop-blur-md border border-rose-200 shadow-xl",
    titleColor: "text-rose-600",
    inputClass: "bg-stone-100/80 border-stone-300 text-stone-900 placeholder-stone-400 focus:ring-rose-500",
    modalBg: "bg-white border border-rose-200 shadow-xl",
    modalContent: "text-rose-600",
    modalButton: "bg-rose-500 hover:bg-rose-600 text-white"
  }
};

export const DEFAULT_THEME = THEME_CONFIGS[1];
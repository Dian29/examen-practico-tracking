# ExamenPracticoTracking - Angular 21 & Tailwind CSS v4

¡Bienvenido al repositorio oficial del proyecto! Esta aplicación es una demostración de arquitectura limpia desarrollada bajo los estándares más recientes de **Angular 21**, aprovechando el manejo de estado puramente reactivo mediante **Signals**, componentes autónomos (**Standalone Components**), carga perezosa nativa (**Lazy Loading**), e integración fluida con la **Web Speech API** para dictado por voz.

El diseño visual está motorizado por **Tailwind CSS v4**, implementando un motor dinámico de temas (*multi-theme system*) gobernado en su totalidad por parámetros de consulta en la URL (`?num=1`, `?num=2`, etc.) sincronizado con una capa robusta de analíticas y eventos de seguimiento.

---

## 🛠️ Stack Tecnológico & Decisiones Arquitectónicas

1. **Angular 21 (Capa Core & Presentación):**
   - **Standalone Components:** Eliminación total de `NgModules` para lograr un acoplamiento débil y máxima modularidad.
   - **Angular Signals:** Gestión del estado reactivo de punta a punta. Se evita el uso de librerías de estado global pesadas y la sobrecarga de suscripciones manuales con `RxJS`.
   - **API `model()` (Two-Way Binding Reactivo):** Utilizado en el componente de entrada para sincronizar el estado del valor de forma bidireccional de manera nativa y eficiente.
   - **Control Flow Moderno (`@if`, `@else if`, `@switch`):** Renderizado condicional nativo y optimizado, eliminando el uso de directivas estructurales antiguas como `*ngIf`.
   - **Component-Input Binding (`withComponentInputBinding`):** Configurado en el enrutador global para leer parámetros de consulta de la URL (`queryParam`) directamente como `input()` reactivos dentro de los componentes.

2. **Tailwind CSS v4 (Capa de Estilos):**
   - **Utility-First & Aislamiento de Presentación:** Los estilos visuales se encapsulan dentro de las plantillas HTML de cada componente, respetando el principio de separación de responsabilidades al no mezclar lógica de negocio (`.ts`) con diseño visual.
   - **Configuración Integrada (`@theme`):** Uso de la directiva nativa de la v4 en el archivo `styles.css` global para la inyección de variables CSS y comportamientos base del framework.

3. **Web Speech API (Capa de Asistencia/Accesibilidad):**
   - Integración nativa a través de un servicio inyectable especializado (`SpeechToTextService`), permitiendo el dictado por voz interactivo y controlando de manera reactiva los estados de hardware (micrófono activo, inactivo o no soportado).

---

## 📂 Estructura Limpia del Proyecto

El espacio de trabajo sigue una distribución estricta orientada al dominio y la reutilización de componentes atómicos:

```text
src/
├── app/
│   ├── components/                # Componentes Standalone de la interfaz
│   │   ├── button/
│   │   │   ├── button.component.html
│   │   │   └── button.component.ts
│   │   ├── input/
│   │   │   ├── input.component.html
│   │   │   └── input.component.ts
│   │   ├── modal/
│   │   │   ├── modal.component.html
│   │   │   └── modal.component.ts
│   │   └── home/
│   │       ├── home.component.html
│   │       └── home.component.ts
│   ├── config/
│   │   └── themes.config.ts              # Diccionario y tipado de Temas Dinámicos
│   ├── services/
│   │   ├── voice-to-text.service.ts  # Servicio del motor de dictado por voz
│   │   └── tracking.service.ts        # Servicio para la analítica de eventos
│   ├── app.component.ts           # Cascarón raíz (Contenedor del RouterOutlet)
│   ├── app.config.ts              # Configuración y proveedores globales de Angular
│   └── app.routes.ts              # Matriz de enrutamiento con Carga Perezosa (Lazy Loading)
├── index.html                     # Archivo base (Carga de Google Material Icons)
└── styles.css                     # Configuración base de Tailwind CSS v4

🎨 Catálogo de Temas Dinámicos Integrados
La aplicación transforma por completo su paleta de colores, tipografía, logotipos, estados de los inputs e iconos vectoriales según el parámetro numérico de la URL (/home?num=X):

Tema 1 (?num=1) - Portal de Innovación (Cohete U+1F680 🚀): Estética espacial oscura con gradientes en azul índigo profundo y acentos eléctricos.

Tema 2 (?num=2) - Ecosistema Sustentable (Hoja U+1F33F 🌿): Paleta orgánica en tonos piedra y verdes esmeralda mates, diseñada para interfaces ecológicas.

Tema 3 (?num=3) - Nexo Artificial (Cyberpunk 🌌): Interfaz premium y disruptiva con bordes de neón fucsia y fondos oscuros de alta tecnología.

Tema 4 (?num=4) - Estudio de Diseño (Modo Claro 🎨): Interfaz suave y minimalista con fondos claros, textos contrastantes en escala de grises y un icono vectorial de creatividad (auto_awesome) que el cual implementa un micro-parpadeo reactivo (animate-pulse).

🚀 Instalación y Despliegue en Entorno Local
Para ejecutar este proyecto en tu máquina local, asegúrate de tener instalado Node.js (versión 18 o superior recomendada) y sigue estos pasos:

Clonar el repositorio:
    git clone <url-del-repositorio>
    cd <nombre-de-la-carpeta>


Instalar las dependencias del proyecto:
    npm install


Iniciar el servidor de desarrollo local:
    npm run start
# o alternativamente si usas la CLI de Angular global:
    ng serve

Acceder a la aplicación:
    Abre tu navegador preferido e ingresa a la siguiente dirección web segura:
        http://localhost:4200/home?num=1
Nota: Recuerda que la Web Speech API requiere por motivos de privacidad un contexto seguro (Secure Context). Utiliza siempre la palabra clave localhost en la barra de direcciones en lugar de IPs locales para asegurar que el navegador otorgue los permisos del micrófono sin restricciones.

📊 Sistema de Tracking y Eventos de Analítica
El proyecto cuenta con un motor de telemetría pasivo inyectado en la capa de negocio que registra y reporta las interacciones clave del usuario. Los eventos capturados son:

theme_loaded: Se detona al inicializar la vista, reportando el ID del tema exacto procesado desde la URL.

name_input: Se dispara cuando el usuario introduce información en el campo de texto, segmentando el método de entrada empleado (voice para dictado por voz o manual para teclado tradicional).

name_displayed: Se ejecuta al presionar con éxito el botón de envío principal, confirmando la apertura del modal con la proyección del saludo personalizado.

🔒 Consideraciones de Seguridad y Buenas Prácticas de Código
Cumplimiento estricto del Principio de Responsabilidad Única (SRP): Las plantillas de presentación se mantienen completamente aisladas en archivos .html independientes, limpiando el código de los archivos de lógica TypeScript (.ts).

Inyección de Dependencias Moderna: Uso prioritario de la función inject() de Angular para declarar servicios de forma segura y legible, alineado con las directrices más actuales de desarrollo corporativo.

Cero estilos en línea nativos (style=""): Toda la maquetación visual recae en el poder de las clases atómicas de Tailwind CSS v4, lo que garantiza consistencia y un alto rendimiento de renderizado en el navegador.

Desarrollado con dedicación bajo estándares modernos de ingeniería de software.
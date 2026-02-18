import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[210mm] mx-auto bg-white">
        {/* PÁGINA 1 */}
        <div className="p-4 sm:p-8 md:p-12">
          {/* ENCABEZADO FIJO */}
          <header className="sticky top-0 z-50 bg-white border-b-4 border-blue-600 pb-4 sm:pb-6 mb-6 sm:mb-8 shadow-sm">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">ALBERTO ROMÁN PÉREZ</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-600 font-semibold mb-3 sm:mb-4">
              Desarrollador Senior FullStack • React Native & Web
            </p>
            
            <div className="flex flex-wrap gap-x-3 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                <span className="break-words">Tecámac, Estado de México</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                <span>55 4028 4794</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                <span className="break-all">aromanp.93@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Edad: 32 años</span>
              </div>
            </div>
          </header>

          {/* RESUMEN PROFESIONAL */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
              RESUMEN PROFESIONAL
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Desarrollador Senior FullStack con más de 8 años de experiencia trabajando con clientes 
              y equipos de producto e ingeniería para construir y operar aplicaciones móviles y web 
              en producción. Especializado en proyectos de alta demanda y criticidad en sectores 
              fintech, healthtech y banca, priorizando calidad, entregas predecibles y comunicación 
              clara. Enfoque fuerte en ownership, mejora continua y resultados medibles con equipos 
              multifuncionales.
            </p>
          </section>

          {/* HABILIDADES TÉCNICAS */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
              HABILIDADES TÉCNICAS
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Desarrollo Web (Frontend)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  React • Next.js • TypeScript • JavaScript • SSR/SSG • SPA • HTML5 • CSS3
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Desarrollo Mobile</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  React Native (CLI/Expo) • TypeScript • Redux • Zustand • Context API • Axios • 
                  Push Notifications (Expo/FCM/APNs) • Fastlane • EAS Build • Xcode • 
                  Integración Nativa (Biométricos: FaceID/TouchID/BiometricPrompt) • Ionic • Angular
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Backend & APIs</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Node.js • BFF (Backend for Frontend) • REST APIs • GraphQL • Microservices • 
                  .NET • Java • Auth0 • Firebase
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Cloud & Bases de Datos</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  AWS (EC2, Lambda) • IBM Bluemix • IBM MobileFirst • MongoDB • PostgreSQL • 
                  SQL Server • IBM dashDB
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Calidad & DevOps</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Jest • React Native Testing Library • Unit Testing • Integration Testing • 
                  SonarQube • CI/CD • Git • Code Review • Lint/Format Standards
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Metodologías & Herramientas</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Scrum • Agile • Google Maps API • Twilio (OTP/SMS/2FA) • Geolocalización • 
                  Bootstrap
                </p>
              </div>
            </div>
          </section>

          {/* EXPERIENCIA PROFESIONAL */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
              EXPERIENCIA PROFESIONAL
            </h2>

            {/* WHITELABS */}
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">FullStack Developer</h3>
                  <p className="text-blue-600 font-semibold">WHITELABS • México</p>
                  <p className="text-sm text-gray-600 italic">Fintech / Banca (Core Bancario)</p>
                </div>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Nov 2023 - Actualidad
                </span>
              </div>
              
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-700 text-sm mb-3">
                <li>
                  Desarrollo y mantenimiento de aplicaciones iOS/Android con <strong>React Native + TypeScript</strong> 
                  para productos fintech/banca (core bancario).
                </li>
                <li>
                  Implementación de flujos transaccionales end-to-end: alta/onboarding, autenticación, 
                  perfil, consultas y operación de transferencias (creación, confirmación, estatus).
                </li>
                <li>
                  Integración de servicios de pagos/transferencias (<strong>SPEI/STP</strong>) desde el front 
                  vía BFF/APIs: armado de payloads, validaciones, manejo de estados y visualización de 
                  estatus (pendiente/procesando/aprobada/fallida).
                </li>
                <li>
                  Integración de <strong>Twilio (OTP/SMS/2FA)</strong> coordinando front-back para 
                  challenge/verification y UX de captura/validación en flujos de autenticación.
                </li>
                <li>
                  Consumo de APIs REST con <strong>Axios</strong>: capa de cliente HTTP con headers, 
                  manejo de errores normalizado, cancelación/race conditions y estados UI (loading/error/empty).
                </li>
                <li>
                  Manejo de estado con <strong>Redux, Zustand y Context API</strong> (separación de 
                  UI-state vs server-state según módulo).
                </li>
                <li>
                  Implementación de <strong>Push Notifications</strong> con Expo Notifications (APNs/FCM) 
                  y routing a pantallas relevantes (alertas de transacción/estatus).
                </li>
                <li>
                  Integración nativa para <strong>Biométricos (FaceID/TouchID/BiometricPrompt)</strong> en 
                  flujos de autenticación y confirmación (step-up).
                </li>
                <li>
                  Enfoque fuerte en <strong>performance</strong>: optimización de listas, control de 
                  re-renders, memoización donde aplica y carga eficiente de datos para pantallas operativas.
                </li>
                <li>
                  Calidad y estándares: testing (unitario e integración), code review, convenciones de 
                  código y análisis estático con <strong>SonarQube</strong>.
                </li>
                <li>
                  Pipelines de build/release con <strong>EAS Build (Expo) y Fastlane</strong>; soporte a 
                  releases, troubleshooting de builds y gestión por ambientes.
                </li>
                <li>
                  Soporte fullstack en BFF/backend (<strong>Node.js / Java</strong>) y despliegues en 
                  <strong>AWS</strong>, coordinando contratos API y cambios end-to-end.
                </li>
              </ul>
              
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-xs font-semibold text-gray-700 mb-1">Stack utilizado:</p>
                <p className="text-xs text-gray-600">
                  React Native • TypeScript • Redux • Zustand • Context API • Axios • Expo Notifications • 
                  EAS Build • Fastlane • Twilio • SPEI/STP • Biometría (FaceID/TouchID) • Node.js • 
                  Java • AWS • Jest • SonarQube • CI/CD
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* PÁGINA 2 */}
        <div className="p-4 sm:p-8 md:p-12 print:page-break-before-always">
          {/* PRIXZ */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-0">
              <div>
                <h3 className="text-lg font-bold text-gray-900">FullStack Developer</h3>
                <p className="text-blue-600 font-semibold">PRIXZ • México</p>
                <p className="text-sm text-gray-600 italic">Healthtech / E-commerce Farmacéutico</p>
              </div>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                May 2021 - Oct 2023
              </span>
            </div>
            
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-700 text-sm mb-3">
              <li>
                Desarrollo end-to-end de la app <strong>PRIXZ</strong> publicada en App Store / Google Play 
                (e-commerce farmacéutico) con <strong>React Native CLI + TypeScript</strong>.
              </li>
              <li>
                Desarrollo de una aplicación adicional para <strong>repartidores</strong>: operación de 
                entregas, actualización de estatus y soporte a flujos en campo.
              </li>
              <li>
                Integración de <strong>geolocalización y Google Maps API</strong> (mapas, markers, 
                rutas/zonas y seguimiento según flujo).
              </li>
              <li>
                Manejo de estado global con <strong>Redux</strong> y construcción de UI modular con 
                <strong>React Hooks</strong>.
              </li>
              <li>
                Consumo e integración de <strong>APIs REST/GraphQL con Axios</strong>; manejo de sesión, 
                errores y estados de carga (loading/error/empty).
              </li>
              <li>
                Desarrollo web con <strong>React / Next.js</strong> y backend/BFF con <strong>Node.js</strong> 
                para integrar servicios y exponer endpoints orientados a frontend.
              </li>
              <li>
                Operación en nube con <strong>AWS (EC2, Lambda)</strong> y manejo de datos con 
                <strong>MongoDB / PostgreSQL / SQL Server</strong>.
              </li>
            </ul>
            
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-xs font-semibold text-gray-700 mb-1">Stack utilizado:</p>
              <p className="text-xs text-gray-600">
                React Native CLI • TypeScript • Redux • React Hooks • Axios • REST APIs • GraphQL • 
                Google Maps API • Geolocalización • React • Next.js • Node.js • AWS (EC2, Lambda) • 
                MongoDB • PostgreSQL • SQL Server
              </p>
            </div>
          </div>

          {/* SERVICIOS TELEPRO */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">FullStack Developer</h3>
                <p className="text-blue-600 font-semibold">SERVICIOS TELEPRO • México</p>
                <p className="text-sm text-gray-600 italic">Cotización / Precotización de Créditos</p>
              </div>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                Abr 2019 - Dic 2020
              </span>
            </div>
            
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-700 text-sm mb-3">
              <li>
                Desarrollo y mantenimiento de <strong>aplicaciones web</strong> (frontend y backend) 
                para sistemas de cotización y precotización de créditos.
              </li>
              <li>
                Creación de módulos funcionales e integraciones orientadas al usuario final.
              </li>
              <li>
                <strong>Migración de aplicaciones monolíticas a microservicios</strong>, mejorando 
                escalabilidad y mantenibilidad del sistema.
              </li>
              <li>
                Integraciones backend con <strong>Node.js</strong>, autenticación con <strong>Auth0</strong>, 
                y uso de <strong>Firebase</strong> para soporte a funcionalidades móviles.
              </li>
              <li>
                Uso de servicios <strong>IBM Bluemix / MobileFirst / dashDB</strong> con enfoque en 
                availability, integración y estabilidad de plataformas.
              </li>
              <li>
                Control de calidad y desarrollo estructurado con tecnologías <strong>.NET, SQL Server 
                y AWS</strong>.
              </li>
            </ul>
            
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-xs font-semibold text-gray-700 mb-1">Stack utilizado:</p>
              <p className="text-xs text-gray-600">
                Node.js • .NET • Auth0 • Firebase • IBM Bluemix • IBM MobileFirst • IBM dashDB • 
                SQL Server • AWS • Microservices
              </p>
            </div>
          </div>

          {/* IBM */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">FullStack Developer</h3>
                <p className="text-blue-600 font-semibold">IBM México</p>
                <p className="text-sm text-gray-600 italic">Soporte/Availability + Desarrollo Híbrido</p>
              </div>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                Nov 2016 - Oct 2018
              </span>
            </div>
            
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-gray-700 text-sm mb-3">
              <li>
                Desarrollo de <strong>aplicaciones híbridas</strong> con <strong>Ionic, Angular y 
                Bootstrap</strong> para iOS/Android/web.
              </li>
              <li>
                Colaboración en proyectos para <strong>clientes empresariales</strong> de alto perfil: 
                Heineken, Santander, GNP, ADO.
              </li>
              <li>
                Implementación de soluciones con <strong>Node.js, Firebase y Auth0</strong> para 
                autenticación y funcionalidades backend.
              </li>
              <li>
                Uso de servicios <strong>IBM Bluemix (Cloud, MobileFirst, dashDB)</strong> con enfoque 
                en disponibilidad, integración y estabilidad de plataformas.
              </li>
            </ul>
            
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-xs font-semibold text-gray-700 mb-1">Stack utilizado:</p>
              <p className="text-xs text-gray-600">
                Ionic • Angular • Bootstrap • Node.js • Firebase • Auth0 • IBM Bluemix • 
                IBM MobileFirst • IBM dashDB
              </p>
            </div>
          </div>

          {/* COMPETENCIAS CLAVE */}
          <section className="mb-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
              COMPETENCIAS Y CARACTERÍSTICAS CLAVE
            </h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Arquitectura y Diseño</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Experiencia en arquitectura React Native + TypeScript; diseño por módulos/feature-based; 
                  consumo de APIs REST vía BFF; entendimiento profundo de microservicios y contratos 
                  (DTOs, versionado, paginación, filtros).
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Calidad y Testing</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Testing unitario y de componentes, code review disciplinado, estándares de lint/format, 
                  enfoque en mantenibilidad; uso de SonarQube para control de calidad y deuda técnica.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Performance & UX</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Optimización de listas y renderizado, control de re-renders, memoización estratégica, 
                  carga eficiente de datos e imágenes, gestión de estados UI (loading/error/empty), 
                  enfoque en estabilidad y experiencia fluida.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Entrega a Producción</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  CI/CD, builds y releases con EAS/Fastlane, troubleshooting de builds, debugging y 
                  soporte a incidencias en diferentes entornos.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Seguridad (Fintech)</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Manejo responsable de sesión y datos sensibles, implementación de flujos de 
                  autenticación/confirmación (biometría/OTP) y aplicación de buenas prácticas para 
                  evitar exposición de información.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Colaboración Cross-Functional</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Trabajo efectivo con equipos de producto, diseño y backend; comunicación clara, 
                  estimaciones realistas y alineación de requerimientos con impacto técnico.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Ownership y Mejora Continua</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Responsabilidad end-to-end de módulos (desde definición técnica hasta release), 
                  mejora continua proactiva y ejecución de optimizaciones con impacto medible.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* PÁGINA 3 */}
        <div className="p-4 sm:p-8 md:p-12 print:page-break-before-always">
          {/* EDUCACIÓN */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 border-b-2 border-gray-300 pb-2">
              EDUCACIÓN
            </h2>
            
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1 sm:gap-0">
                <div>
                  <h3 className="font-bold text-gray-900">Licenciatura en Sistemas Informáticos</h3>
                  <p className="text-blue-600 font-semibold">Universidad Tecnológica de Tecámac</p>
                </div>
                <span className="text-sm font-semibold text-gray-700">2012 - 2015</span>
              </div>
            </div>
          </section>

          {/* PROYECTOS DESTACADOS */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 border-b-2 border-gray-300 pb-2">
              PROYECTOS DESTACADOS
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Aplicaciones Fintech/Banca (Core Bancario) - WhiteLabs
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  Desarrollo de aplicaciones móviles iOS/Android para operaciones bancarias críticas, 
                  incluyendo transferencias SPEI/STP, autenticación biométrica, OTP/2FA con Twilio, 
                  y flujos transaccionales completos. Implementación de arquitectura robusta con 
                  manejo de estados complejos y enfoque en seguridad fintech.
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Impacto:</strong> Sistema en producción para operaciones financieras de 
                  alta criticidad con usuarios activos.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  App PRIXZ (E-commerce Farmacéutico) - Prixz
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  Desarrollo end-to-end de aplicación móvil publicada en App Store y Google Play para 
                  e-commerce farmacéutico, incluyendo app para repartidores con geolocalización en 
                  tiempo real, integración de Google Maps API, y gestión de entregas en campo.
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Impacto:</strong> Aplicación publicada y en operación con usuarios reales 
                  en iOS y Android.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Migración Monolítico a Microservicios - Servicios Telepro
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  Liderazgo técnico en migración de aplicaciones monolíticas a arquitectura de 
                  microservicios para sistemas de cotización de créditos, mejorando escalabilidad, 
                  mantenibilidad y disponibilidad de plataforma.
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Impacto:</strong> Mejora significativa en escalabilidad y mantenibilidad 
                  del sistema.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Aplicaciones Empresariales Híbridas - IBM
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">
                  Desarrollo de aplicaciones híbridas multiplataforma para clientes empresariales de 
                  alto perfil (Heineken, Santander, GNP, ADO) utilizando Ionic, Angular y servicios 
                  cloud de IBM, con enfoque en disponibilidad y estabilidad.
                </p>
                <p className="text-xs text-gray-600">
                  <strong>Impacto:</strong> Soluciones empresariales desplegadas para clientes 
                  corporativos de gran escala.
                </p>
              </div>
            </div>
          </section>

          {/* INFORMACIÓN ADICIONAL */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">
              INFORMACIÓN ADICIONAL
            </h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Experiencia en Sectores</h3>
                <p className="text-gray-700 text-sm">
                  Fintech • Banca • Healthtech • E-commerce • Servicios Financieros • Retail • 
                  Logística • Empresarial
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Tipo de Proyectos</h3>
                <p className="text-gray-700 text-sm">
                  Aplicaciones móviles nativas y multiplataforma • Aplicaciones web (SPA, SSR, SSG) • 
                  Sistemas transaccionales • E-commerce • Plataformas empresariales • Migración de 
                  arquitecturas • Integraciones de APIs • Sistemas de geolocalización
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Clientes Destacados (IBM)</h3>
                <p className="text-gray-700 text-sm">
                  Heineken • Banco Santander • GNP (Grupo Nacional Provincial) • ADO (Autobuses del Oriente)
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Enfoque Profesional</h3>
                <p className="text-gray-700 text-sm">
                  Desarrollo orientado a calidad y entrega predecible • Ownership de productos • 
                  Mejora continua • Comunicación efectiva en equipos multifuncionales • 
                  Resultados medibles • Performance y optimización
                </p>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-12 pt-6 border-t border-gray-300 text-center">
            <p className="text-xs text-gray-500">
              Este CV ha sido diseñado para ser ATS-friendly. Todos los datos son seleccionables y estructurados.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Alberto Román Pérez • Desarrollador Senior FullStack
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
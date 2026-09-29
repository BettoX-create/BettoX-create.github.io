export const money=n=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR'}).format(n);
const base=['Adaptación a ordenador, móvil y pantallas táctiles','Enlace web público operativo y código QR para redes sociales','Botón de contacto directo'];
const business=['4 a 5 páginas clave: Inicio, Servicios, Quiénes somos y Contacto','Formulario de contacto directo','Carga optimizada y rápida','Preparación para indexación y aparición en experiencias de IA','Optimización de imágenes aportadas: fondo blanco y alta resolución profesional'];
const advanced=['Diseño visual único y moderno a medida','Sección de trabajos o catálogo detallado','Estadísticas básicas de visitas configuradas'];
export const plans=[
 {name:'Plan Express',short:'Exprés',price:55,ideal:'Para emprendedores que necesitan mostrar lo que hacen, de forma sencilla.',features:[...base,'1 sección principal de presentación','Plantilla básica limpia']},
 {name:'Plan Essential',short:'Esencial',price:79.99,ideal:'Para delivery, repuestos, panaderías y servicios de barrio.',features:[...base,'3 a 4 secciones ordenadas','Horarios, ubicación o información clave']},
 {name:'Plan Empresa',short:'Empresa',price:149,ideal:'Para clínicas, bufetes, despachos profesionales y academias locales.',features:[...base,...business]},
 {name:'Plan Conversión',short:'Conversión',price:255,ideal:'Para negocios con tracción que quieren transmitir autoridad y captar clientes.',features:[...base,...business,...advanced,'Pequeños movimientos fluidos al navegar']},
 {name:'Plan Geolocal',short:'Agencia',price:399,ideal:'Para marcas que quieren destacar con una experiencia visual a medida.',features:[...base,...business,...advanced,'Pequeños movimientos fluidos al navegar','Efectos visuales de cine: movimientos, 3D ligero y transiciones especiales','Estética de agencia boutique','Carga ultraligera optimizada para móviles económicos','Microinteracciones de alta gama','Jerarquía visual orientada a servicios de alto valor']}
];

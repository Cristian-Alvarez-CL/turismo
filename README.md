# Turismo Mapumay

Turismo Mapumay es una aplicación web moderna para una agencia de turismo, diseñada para mostrar destinos turísticos, servicios, y facilitar la comunicación con los clientes.

## Características

- Diseño responsivo para todos los dispositivos
- Modo claro/oscuro automático y manual
- Catálogo de destinos turísticos
- Formulario de contacto
- Integración con WhatsApp para comunicación rápida
- Optimización de imágenes y rendimiento

## Tecnologías Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI Components

## Requisitos Previos

- Node.js 18.x o superior
- npm 8.x o superior

## Instalación

1. Clonar el repositorio:
   \`\`\`
   git clone https://github.com/tu-usuario/turismo-mapumay.git
   cd turismo-mapumay
   \`\`\`

2. Instalar dependencias:
   \`\`\`
   npm install
   \`\`\`

3. Crear un archivo \`.env.local\` en la raíz del proyecto y añadir las variables de entorno necesarias:
   \`\`\`
   NEXT_PUBLIC_WHATSAPP_NUMBER=tu_numero_de_whatsapp
   \`\`\`

## Desarrollo

Para iniciar el servidor de desarrollo:

\`\`\`
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Construcción

Para construir la aplicación para producción:

\`\`\`
npm run build
\`\`\`

## Despliegue

La aplicación está optimizada para ser desplegada en Vercel. Simplemente conecta tu repositorio de GitHub a Vercel y despliega.

## Estructura del Proyecto

\`\`\`
turismo-mapumay/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   └── ...
│   ├── about-us.tsx
│   ├── contact-section.tsx
│   ├── featured-destinations.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── testimonials.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── whatsapp-icon.tsx
├── public/
│   └── images/
│       └── navbar/
│           └── mapumay_circular.svg
├── styles/
├── lib/
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
\`\`\`

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request para sugerir cambios o mejoras.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

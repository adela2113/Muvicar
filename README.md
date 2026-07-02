# Muvicar Web App - Prototipo Funcional de Distribución Urbana

Este directorio contiene la implementación optimizada, modularizada y responsive de la plataforma **Muvicar**, resolviendo la problemática de la informalidad de transporte de carga liviana urbana mediante motocarros verificados.

## Estructura de Archivos del Entregable
* `index.html`: Estructura enriquecida semánticamente que incorpora el panel de cotización extendido, rastreadores visuales, fleet grids y el formulario de contacto.
* `style.css`: Estilos personalizados, efectos cristalinos (*glassmorphism*) ajustados y animaciones ligeras para hardware móvil limitado.
* `script.js`: Código JavaScript Vanilla estructurado bajo controladores de eventos para simulación algorítmica de transporte de última milla.

## Funcionalidades Clave Añadidas
1.  **Cálculo Tarifario Algorítmico**: El sistema evalúa de forma dinámica la ruta y el peso de la carga seleccionada basándose en un costo base de `$6.000 COP` y `$2.200 COP` por kilómetro.
2.  **Rastreador de Flujo Operativo**: Ejecuta una línea de tiempo por estados con barras de carga síncronas que simulan el aprovisionamiento de un conductor idóneo real en el cuadrante.
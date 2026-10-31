# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Estudiantes, builders y universidades en Puebla que deciden si entran al mes de Ruta CoDi. Llegan desde un enlace, casi siempre en el teléfono, en las dos semanas previas al 14 de noviembre de 2026. También lo usa quien arma el programa: edita JSON para publicar una ponencia, un premio o un aliado.

## Product Purpose

Contar la visión de Ruta CoDi y llevar a la apertura presencial. Ruta CoDi es la sede Puebla de Hackatón México: un mes, del 14 de noviembre al 14 de diciembre de 2026, para construir productos fintech que usen CoDi.

## Positioning

Hackatón México es la iniciativa nacional. Ruta CoDi no la organiza: es su sede en Puebla, armada por Kevin Jiménez y el Clúster de Startups e Innovación. El registro de proyectos sigue en hackatonmexico.com. El cupo de la apertura vive en el Luma de la sede.

## Operating Context

La sede aún confirma lugar, ponencias y premios. Esos datos se editan en `src/data/main.json`, `src/data/closed.json` y `src/data/follow.json`. Quien asiste a la apertura recibe un código de Cursor. El contacto del clúster es hola@clusterdestartups.org.

## Capabilities and Constraints

- Landing estática. Sin formulario propio.
- La sede de la apertura y de las sesiones está por confirmar. No se publica Workósfera ni DGIEN hasta que se cierre.
- Las sesiones del 28 nov, 5 dic y 10 dic son tentativas.
- Premios de la sede: por confirmar. No se inventan montos.
- Ponencias: lista vacía hasta que se confirmen. Cada entrada usa `title`, `speaker` y `org`.
- Aliados: CONCORA ya está. Una universidad nueva es un objeto en `follow.allies.items` con `name`, `href`, `logo`, `width` y `height`.
- Logos de «Organizado por» son los archivos oficiales de Hackatón México: SpaceXAI, Pey y AI Builders México. El wordmark del clúster es el archivo de medios, sin recolorir.
- Paleta de la interfaz: rosa `#E8186A`, blancos, grises y rosas. La interfaz no usa azul ni el navy del clúster.

## Brand Commitments

Nombre: Ruta CoDi. Tipografía del clúster: Archivo en titulares, Raleway en texto. El wordmark del clúster no se reconstruye con esas fuentes. Rosa mexicano `#E8186A`. Referencia de layout: landings fintech de una columna en móvil, con fila de logos y una franja de color. Esas referencias no dictan el color.

## Evidence on Hand

Programa universitario del clúster (PDF), hackatonmexico.com y el Luma https://luma.com/jro3jq5m. Logos en `public/logos/`. No hay ponencias confirmadas, ni monto de premios, ni sede publicada.

## Product Principles

- La iniciativa se nombra: Hackatón México. La sede se nombra: Puebla.
- Lo que no está cerrado se dice, no se rellena.
- Un dato que cambia vive en JSON, no en el componente.
- El teléfono es la primera lectura.
- La acción de la página es apartar la apertura.

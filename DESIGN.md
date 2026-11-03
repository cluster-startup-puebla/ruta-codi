---
name: Ruta CoDi
description: Sede Puebla de Hackatón México. Papel, gris y rosa mexicano.
colors:
  rose: "#E8186A"
  rose-deep: "#A81C70"
  rose-press: "#86145C"
  rose-soft: "#FDE8EF"
  rose-mist: "#FFF5F8"
  ink: "#2A2A2C"
  mute: "#5A5A5C"
  line: "#E6E6E8"
  paper: "#FFFFFF"
  mist: "#F6F6F7"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Raleway, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Raleway, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  panel: "1.5rem"
  sheet: "2rem"
  pill: "9999px"
spacing:
  section: "4rem"
  section-lg: "6rem"
  content: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.rose-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.rose-press}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-secondary-hover:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.75rem"
---

## Overview

Landing de una sola ruta. El primer pantallazo es un campo de rayos en rosa, titular al centro y un teléfono con el mes, con tarjetas alrededor. Abajo la página vuelve a papel. La franja `#E8186A` de los códigos de Cursor repite ese rosa más abajo.

## Colors

`#E8186A` lleva texto blanco solo desde 24px. El botón y los enlaces usan `#A81C70`, que aguanta texto chico en blanco o sobre blanco. El gris `#5A5A5C` va sobre papel o mist, nunca sobre rosa. No hay azul ni el navy `#16284F` del manual del clúster. Los logos oficiales conservan su tinta: Pey trae el azul de su archivo y no se recolorea.

## Typography

Archivo para el nombre, los titulares y las fechas. Raleway para el texto. El wordmark del clúster es el SVG de medios, con ancho mínimo de 140px. Una sola línea de entrada, en el hero: «Sede Puebla · 14 nov – 12 dic 2026». Las demás secciones entran directo al título.

## Layout

Mobile first. El hero apila titular, acciones y el panel del mes. Desde `lg`, el panel queda a la derecha. Las secciones miden el texto a unas 65ch. Hay más aire arriba de un título que entre el título y su párrafo. La fila de logos hace wrap. Aliados es una fila que crece con el JSON.

## Elevation & Depth

Sin sombras. La separación es de tono: mist, papel, rosa mist y la franja rosa. El foco es un anillo de 2px en `#E8186A`.

## Shapes

Pastilla en los botones. El panel del mes usa radio de 1.5rem y fondo rosa mist. La hoja de escritorio usa radio de 2rem.

## Components

El botón primario aparta la apertura. El secundario lleva al registro nacional. La lista del mes marca cada fecha con un punto rosa, no con una barra lateral. Ponencias, premios y aliados vacíos dicen que están por confirmar. Un aliado es logo con enlace, altura de 3.5rem en el teléfono y 4rem desde `sm`.

## Do's and Don'ts

Usa `#E8186A`, blanco, gris y rosa. Deja los logos como llegaron. No reconstruyas el wordmark del clúster. No publiques una sede, una ponencia ni un monto que no esté en el JSON. No pongas texto gris sobre la franja rosa.

/**
 * PROBLEMA: Añadir pokemon dinamicamente
 *
 * 1. Crear un li
 * 2. Añadir a ese li la clase "bla_bla"
 * 3. Crear un article
 * 4. añadira X clase a ese article
 * 5. añadir el article como hijo del li
 * ....
 * N. añadir el li como hijo de la lista (UL) que hay en el HTML
 *
 */



const pokemonButton = document.createElement("button"); // paso 1
pokemonButton.classList.add("pokemon_button"); // paso 2
pokemonButton.type = "button";

const link = document.createElement ('a')
link.href = "https://www.google.com/"
link.target = "blank"
link.textContent = "Ir a google"
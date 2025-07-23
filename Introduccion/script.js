let nombre;
nombre = prompt("¿Cómo te llamas?: ");

console.log("Hola " + nombre + ", bienvenido a la página de introducción.");
console.log(
  "Este es otro mensaje de consola con comillas simples " + nombre + "."
);
console.log(
  `Este es un mensaje de consola con comillas invertidas: ${nombre}.`
); //Interpolación de datos
console.log(23 + 5); //Suma
console.log(true); //Booleano
console.log(34 > 5); //Comparación
alert("¡Hola " + nombre + " Esto es un mensaje de alerta."); //mensaje de alerta


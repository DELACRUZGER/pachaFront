let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer número"));
let num4 = parseInt(prompt("Ingrese el cuarto número"));

// Contar números pares
let pares = 0;
if (num1 % 2 === 0) {
  pares++;
}
if (num2 % 2 === 0) {
  pares++;
}
if (num3 % 2 === 0) {
  pares++;
}
if (num4 % 2 === 0) {
  pares++;
}
console.log(`Cantidad de números pares: ${pares}`);

// Calcular el mayor
let mayor = num1;
if (num2 > mayor) {
  mayor = num2;
}
if (num3 > mayor) {
  mayor = num3;
}
if (num4 > mayor) {
  mayor = num4;
}
console.log(`El número mayor es: ${mayor}`);

// Si el tercero es par, calcular el cuadrado del segundo
if (num3 % 2 === 0) {
  let cuadrado = num2 * num2;
  console.log(`El cuadrado del segundo número es: ${cuadrado}`);
}

// Si el primero es menor que el cuarto, calcular la media de los 4 números
if (num1 < num4) {
  let media = (num1 + num2 + num3 + num4) / 4;
  console.log(`La media de los 4 números es: ${media}`);
}

// Si el segundo es mayor que el tercero y el tercero está comprendido entre los valores 50 y 700, calcular la suma de los 4 números
if (num2 > num3 && num3 >= 50 && num3 <= 700) {
  let suma = num1 + num2 + num3 + num4;
  console.log(`La suma de los 4 números es: ${suma}`);
}
/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   return Math.max(x,y);
   if(x===y){
      return x || y
     }
   }
   obtenerMayor(5,10);
   obtenerMayor(5,5);

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if(edad >= 18){
      return "Allowed"
  }else{
     return "Not allowed"
  }
}
mayoriaDeEdad(19);
mayoriaDeEdad(18);
mayoriaDeEdad(17);

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if(status===1){
      return "Online"
  } else if(status===2){
      return "Away"
  }else{
      return "Offline"
  }
}
  conection(1);
  conection(2);
  conection(3);


function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   switch(true){
      case idioma === "aleman":
       return "Guten Tag!"
         break;
      case idioma === "mandarin":
         return "Ni Hao!"
         break;
      case idioma ==="ingles":
         return "Hello!"
         break;
      default:
         return "Hola!"
     }
}
saludo("aleman");
saludo("mandarin");
saludo("ingles");
saludo("ruso");


function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch (color){
      case "blue":
          return "This is blue"
      break;
      case "red":
          return "This is red"
      break;
      case "green":
          return "This is green"
      break;
      case "orange":
          return"This is orange"
      break;
      default :
          return"Color not found"
  } 
}
colors("blue");
colors("red");
colors("green");
colors("orange");
colors("grey");

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if(num===10 || num===5)
     return true
   else 
     return false
}
esDiezOCinco(10);
esDiezOCinco(9);
esDiezOCinco(5);
esDiezOCinco(4);

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if(num < 50 && num > 20)
   return true
   else
   return false 
}
estaEnRango(51);
estaEnRango(49);
estaEnRango(21);
estaEnRango(19);

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if (num % 1 == 0) {
      return true
   } else {
      return false
}
}
esEntero(1);
esEntero(-1);
esEntero(0.1);

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   switch(true){
      case num % 3 == 0 && num % 5 == 0:
         return "fizzbuzz"
           break;
      case num % 5 == 0:
         return "buzz"
           break;
      case num % 3 == 0:
         return "fizz"
            break;
      default:
         return false
   }
}

fizzBuzz(9);
fizzBuzz(10);
fizzBuzz(30);

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   switch (true){
      case (num1 > num2 && num1 > num3 && num1 >= 0):
         return "Numero 1 es mayor y positivo"
          break;
      case (num1 < 0 || num2 < 0 || num3 < 0):
         return "Hay negativos"
          break;
      case (num3 > num1 && num3 > num2):
         return num3 + 1
          break;
      case (num1 === 0 && num2 == 0 && num3 === 0):
         return "Error"
          break;
      default:
         return false
     }
  }

   operadoresLogicos(10,9,8);
   operadoresLogicos(-10,-9,-8);
   operadoresLogicos(8,9,10);
   operadoresLogicos(0,0,0);
   operadoresLogicos(1,1,1,);


function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if (num <= 1){
      return false}
  for (let i=2; i < num; i++){      
     if (num % i === 0){
      return false
     }
  }
      return true
}

esPrimo(1);
esPrimo(-7);
esPrimo(7);


function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if(valor===true)
   return "Soy verdadero"
   else 
   return "Soy falso"
}
esVerdadero(true);
 esVerdadero(false);

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   if(num >= 100 && num <= 999)
   return true
   else 
   return false
}
tieneTresDigitos(99);
tieneTresDigitos(100);
tieneTresDigitos(1000);

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let i = 0;
  do {
    num += 5;
    i++;
  } while (i < 8);
  return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};

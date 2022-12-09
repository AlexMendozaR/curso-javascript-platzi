# Coerción 

Es el proceso por el cual le podemos cambiar el tipo de valor a otro valor, es decir. 

Ingresamos un valor tipo Number cómo "40".
Al estar dentro de comillas JS nos lo detecta cómo string pero nosotros necesitamos que este valor sea leido cómo Number.

Lo que debemos realizar es forzar ese cambio de tipo de valor usando la Coerción. 

### De esta forma

var a = "40";  __Tenemos un valor tipo String__ 
var b = Number(a); __Convertimos la variable "a" a un dato tipo number__

console.log(b);

Nos imprimirá 40 cómo un valor tipo __Number__
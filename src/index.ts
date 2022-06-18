let producto = document.getElementById("valorProd");
let cantidad = document.getElementById("cantidad1");
let btnCalcular = document.getElementById("btnCalc");
let descuento: number = 0;
let precioFinal1: number = 0;
let precioFinal2: number = 0;

btnCalcular.addEventListener("click", () => {
  let producto: number = Number(valorProd.value);
  let cantidad: number = Number(cantidad1.value);
  let precioFinal1: number = producto * cantidad;
  let descuento: number = precioFinal1 * 0.1;
  let precioFinal2: number=precioFinal1-descuento;

  if (precioFinal1 > 1000) {
    console.log("Hiciste una compra total de:", precioFinal1);    
    console.log("Por lo que se aplica el 10% de descuento, el cuál corresponde a:"+ descuento);
    console.log("Por lo tanto, el precio total de tu compra es de:" + precioFinal2);
  } else {
    console.log("El precio total de tu compra es de:" + precioFinal1);
  }
  console.log("Gracias por su compra ¡vuelva pronto!"
});
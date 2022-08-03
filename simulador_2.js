
const cursos = [];


class Curso {
  constructor(nombre, fechaInicio, precio, disponibilidad) {
    this.nombre = nombre;
    this.fechaInicio = fechaInicio;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    
  }
}

function saludar() {
    alert("Bienvenidos a Ritmo Urbano (Taller de Música & Arte)");
}

saludar ();

const precioTotal = (precio) => {return precio*1.21}
let curso= prompt("Ingresa el curso que quieres comprar: \n Guitarra \n Batería \n Canto \n Ukelele \n Piano / Teclado \n Trompeta \n Bajo \n Flauta Traversa \n Saxo \n Violín \n Iniciación Musical \n Ensamble \n Arte \n Comprar \n Para Finalizar su Compra presione Salir").toLowerCase();
let precio = 0;
let ahora = new Date();

function cursoOnline(curso, precio){
    while(curso!="salir"){
        switch(curso){            
            case "guitarra":
                cursos.push(new Curso("Guitarra ", "10/08", "$5000 + IVA", "Sin Cupos"));
                console.log("Este curso de Guitarra no está a la venta \nNo hay más cupo");
                break;           
            
            case "batería":           
            case "bateria":        
                precio= precio + 5000  
                cursos.push(new Curso("Batería", "20/08", "$5000 + IVA", "Disponible"));          
                console.log("El curso está disponible \nLa clase de Batería tiene un costo de $5000 + IVA");
                break;
           
            case "flauta traversa":            
            case "flauta":
                cursos.push(new Curso("Flauta Traversa", "11/09", "$4500 + IVA", "Sin Cupos"));
                console.log("Este curso de Flauta Traversa no está a la venta \nNo hay más cupo");
                break;    
          
            case "saxo":                 
                cursos.push(new Curso("Saxo", "20/08", "$8500 + IVA", "Disponible"));
                precio= precio + 8500              
                console.log("El curso está disponible \nLa clase de Saxo tiene un costo de $8500 + IVA");
                break;

            case "bajo":
                cursos.push(new Curso("Bajo", "20/08", "$5450 + IVA", "Disponible"));                        
                precio= precio + 5450              
                console.log("El curso está disponible \nLa clase de Bajo tiene un costo de $5450 + IVA");
                break;

            case "iniciación musical":
            case "iniciacion musical":
                cursos.push(new Curso("Iniciación Musical", "20/08", "$5450 + IVA", "Sin Cupos"));                       
                console.log("Este curso de Iniciación Musical no está a la venta \nNo hay más cupo");
                break;

            case "trompeta":
                cursos.push(new Curso("Trompeta", "11/09", "$5600 + IVA", "Sin Cupos"));                        
                console.log("Este curso de Trompeta no está a la venta \nNo hay más cupo");
                break;

            case "piano":
                cursos.push(new Curso("Piano", "11/09", "$6500 + IVA", "Disponible"));                        
                precio= precio + 6500              
                console.log("El curso está disponible \nLa clase de Piano tiene un costo de $6500 + IVA");
                break;
            
            case "ensamble":
                cursos.push(new Curso("Ensamble", "11/09", "$6500 + IVA", "Disponible"));                        
                precio= precio + 8500              
                console.log("El curso está disponible \nLa clase de Ensamble tiene un costo de $6500 + IVA");
                break;

            case "ukelele":
                cursos.push(new Curso("Ukelele", "20/08", "$6200 + IVA", "Disponible"));                                
                precio= precio + 6200              
                console.log("El curso está disponible \nLa clase de Ukelele tiene un costo de $6200 + IVA");
                break;

            case "violín":
            case "violin":
                cursos.push(new Curso("Violín", "11/09", "$6200 + IVA", "Disponible"));                                 
                precio= precio + 7200              
                console.log("El curso está disponible \nLa clase de Violín tiene un costo de $6200 + IVA");
                break;

            case "canto":
                cursos.push(new Curso("Canto", "11/09", "$7000 + IVA", "Disponible"));                                
                precio= precio + 7000              
                console.log("El curso está disponible \nLa clase de Canto tiene un costo de $7000 + IVA");
                break;

            case "arte":
                cursos.push(new Curso("Arte", "11/09", "$5200 + IVA", "Disponible"));                                
                precio= precio + 5200              
                console.log("El curso está disponible \nLa clase de Arte tiene un costo de $5200 + IVA");
                break;

            case "comprar":
                console.log("Total a pagar: $" + (precio*1.21)  + " IVA incluido");
                console.log("Tu compra se realizó el " + ahora.toLocaleString());
                break;
               
            default:
                console.log("Esta Clase no está en disponible");
                break;
        }
    
    curso= prompt("Ingresa el curso que quieres comprar: \n Guitarra \n Batería \n Canto \n Ukelele \n Piano / Teclado \n Trompeta \n Bajo \n Flauta Traversa \n Saxo \n Violín \n Iniciación Musical \n Ensamble \n Arte \n Comprar \n Para Finalizar su Compra presione Salir").toLowerCase();
    }
console.table(cursos)
const disponible = cursos.filter((curso) => curso.disponibilidad.includes("Sin Cupos"))
console.log("Estos cursos no están disponibles: ")
console.table(disponible)
}

cursoOnline(curso, precio); 


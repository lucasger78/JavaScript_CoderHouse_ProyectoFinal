function saludar() {
    alert("Bienvenidos a Ritmo Urbano (Taller de Música & Arte)");
}

saludar ();

let curso= prompt("Ingresa el curso que quieres comprar: \n Guitarra \n Batería \n Canto \n Ukelele \n Piano / Teclado \n Trompeta \n Bajo \n Flauta Traversa \n Saxo \n Violín \n Iniciación Musical \n Ensamble \n Arte \n Comprar \n Para Finalizar su Compra presione Salir");
let precio = 0;
//let precioMasIva = (precio * 1.21);
function cursoOnline(curso, precio){
    while(curso!="Salir"){
        switch(curso){
            case "Guitarra":
            case "guitarra":
                console.log("Este curso de Guitarra no está a la venta \nNo hay más cupo");
                break;
           
            case "Batería":
            case "batería":
            case "Bateria":
            case "bateria":        
                precio= precio + 5000            
                console.log("El curso está disponible \nLa clase de Batería tiene un costo de $5000 + IVA");
                break;

            case "Flauta Traversa":
            case "flauta traversa":
                console.log("Este curso de Flauta Traversa no está a la venta \nNo hay más cupo");
                break;
    
            case "Saxo":
            case "saxo":                        
                precio= precio + 8500              
                console.log("El curso está disponible \nLa clase de Saxo tiene un costo de $8500 + IVA");
                break;

            case "Bajo":
            case "bajo":                        
                precio= precio + 5450              
                console.log("El curso está disponible \nLa clase de Bajo tiene un costo de $5450 + IVA");
                break;

            case "Iniciación Musical":
            case "Iniciacion Musical":   
            case "iniciación musical":
            case "iniciacion musical":                       
                console.log("Este curso de Iniciación Musical no está a la venta \nNo hay más cupo");
                break;

            case "Trompeta":
            case "Trompeta":                        
                console.log("Este curso de Trompeta no está a la venta \nNo hay más cupo");
                break;

            case "Piano":
            case "piano":                        
                precio= precio + 6500              
                console.log("El curso está disponible \nLa clase de Piano tiene un costo de $6500 + IVA");
                break;
            
            case "Ensamble":
            case "ensamble":                        
                precio= precio + 8500              
                console.log("El curso está disponible \nLa clase de Ensamble tiene un costo de $6500 + IVA");
                break;

            case "Ukelele":
            case "ukelele":                                
                precio= precio + 6200              
                console.log("El curso está disponible \nLa clase de Ukelele tiene un costo de $6200 + IVA");
                break;
                

            case "Violín":
            case "violín":
            case "Violin":
            case "violin":                                 
                precio= precio + 7200              
                console.log("El curso está disponible \nLa clase de Violín tiene un costo de $6200 + IVA");
                break;

            case "Canto":
            case "canto":                                
                precio= precio + 7000              
                console.log("El curso está disponible \nLa clase de Canto tiene un costo de $7000 + IVA");
                break;
    
            case "Arte":
            case "arte":                                
                precio= precio + 5200              
                console.log("El curso está disponible \nLa clase de Arte tiene un costo de $5200 + IVA");
                break;

            case "Comprar":
            case "comprar":
                console.log("Total a pagar: $" + (precio*1.21)  + " IVA incluido");
                break;
               
            default:
                console.log("Esta Clase no está en disponible");
                break;
        }
    curso= prompt("Ingresa el curso que quieres comprar: \n Guitarra \n Batería \n Canto \n Ukelele \n Piano / Teclado \n Trompeta \n Bajo \n Flauta Traversa \n Saxo \n Violín \n Iniciación Musical \n Ensamble \n Arte \n Comprar \n Para Finalizar su Compra presione Salir");
    }
}
cursoOnline(curso, precio);

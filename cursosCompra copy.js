


class Curso {
    constructor(nombre, fechaInicio, precio, disponibilidad, imagen){
      this.nombre = nombre;
      this.fechaInicio = fechaInicio;
      this.precio = precio;
      this.disponibilidad = disponibilidad;
      this.imagen = imagen;
      
    }
  }
  
  const compra = [];
  
  const cursos = [
  
    {
      nombre: "Guitarra: Eléctrica / Acústica / Ukelele",
      fechaInicio: "Inicio: 10/08",
      precio: 5000,
      disponibilidad: "Curso No Disponible",
      imagen: src="static/assets/compraCurso/guitarra.jpg"
    },
  
    {
      nombre: "Saxo Alto / Tenor",
      fechaInicio: "Inicio: 12/08",
      precio: 6500,
      disponibilidad: "Curso Disponible",
      imagen: src="static/assets/compraCurso/saxo.jpg"
    },
    {
      nombre: "Flauta Traversa",
      fechaInicio: "Inicio: 10/08",
      precio: 4500,
      disponibilidad: "Curso Disponible",
      imagen: src="static/assets/compraCurso/flauta.jpg"
    },
  
    {
      nombre: "Piano / Teclado / Acordeón",
      fechaInicio: "Inicio: 15/08",
      precio: 5500,
      disponibilidad: "Curso Disponible",
      imagen: src="static/assets/compraCurso/piano.jpg"
    },
  
    {
      nombre: "Trompeta",
      fechaInicio: "Inicio: 11/09",
      precio: 6000,
      disponibilidad: "Curso No Disponible",
      imagen: src="static/assets/compraCurso/trompeta.jpg"
    },
  
    {
      nombre: "Batería",
      fechaInicio: "Inicio: 20/08",
      precio: 5800,
      disponibilidad: "Curso Disponible",
      imagen: src="static/assets/compraCurso/bata.jpg"
    },
  
  
    {
      nombre: "Bajo Eléctrico",
      fechaInicio: "Inicio: 14/08",
      precio: 5500,
      disponibilidad: "Curso Disponible",
      imagen: src="static/assets/compraCurso/bajo.jpg"
    },
  
    {
      nombre: "Violín",
      fechaInicio: "Inicio: 11/08",
      precio: 7500,
      disponibilidad: "Curso Disponible",
      imagen: src="static/assets/compraCurso/violin.jpg"
    },
  
    {
      nombre: "Canto",
      fechaInicio: "Inicio: 10/08",
      precio: 5900,
      disponibilidad: "Curso Disponible",
      imagen: src="static/assets/compraCurso/canto.jpg"
    },
  
    
    ];
  
  //CARDS
  function crearCard() {
    let cards=document.getElementById("cursosCompra");
  
    for(const curso of cursos){
  
      let card=document.createElement("div");
      card.className="card col-4 justify-content-md-center align-items-center";
      card.innerHTML=`
      <div class="card bg-primary text-black text-center p-3" style="width: 18rem;">        
      <img class="card-img-top" src=${curso.imagen} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title" style="font-family: montserrat black";>${curso.nombre}</h5>
          <p class="card-text" style="font-family: montserrat";>${curso.precio}</p>
          <p class="card-text" style="font-family: montserrat";>${curso.fechaInicio}</p>
          <p class="card-text" style="font-family: montserrat";>${curso.disponibilidad}</p>
        <button id="miBoton--${curso.nombre}" class="btn btn-dark" style="font-family: montserrat";>AGERGAR AL CARRITO</button>
      </div>
    </div>
      `;
    cards.append(card);
  
    
  
      //AGREGAR ELEMENTOS AL CARRITO
    let miBoton = document.getElementById(`miBoton--${curso.nombre}`);
  
    miBoton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Agregaste" + " " + curso.nombre + " " +"al carrito \nTotal a pagar: $"+ curso.precio);
      compra.push(curso);
      localStorage.setItem("compra",JSON.stringify(compra));

     
     
      })
  
    }
  }
  crearCard();
  
 
  
  
  //EFECTUAR LA COMPRA TOTAL
  function comprar(){
  
    let botonFinDeCompra = document.getElementById("compraFinal")
    let precioFinal = 0
    let finalCompra = 0
    botonFinDeCompra.addEventListener ("click", (e) => {
  
      e.preventDefault ();
    
      finalCompra = compra.reduce ((ac,curso) => ac + curso.precio,0)
    
      console.table(compra);
      const filtro = compra.filter ((cur) => cur.disponibilidad=="Curso No Disponible")
   
      console.log ("Los siguientes Curso No Están Disponibles")
      console.table (filtro);
    
  
      // finalCompra = compra.reduce ((ac,curso, filtro) => ac + curso.precio - filtro, 0)
      console.log ("El total a pagar es $" + finalCompra);
  
     console.log (JSON.parse(localStorage.getItem('compra')))
  
  })
  
  }
   
  comprar();



const carroCompra = JSON.parse(localStorage.getItem('compra')) || [];
console.log(carroCompra);
class Curso {
  constructor(nombre, fechaInicio, precio, disponibilidad, imagen){
    this.nombre = nombre;
    this.fechaInicio = fechaInicio;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    this.imagen = imagen;
    
  }
}


let elementoCarrito = [];
const cursosCarro = [

  {
    nombre: "Guitarra: Eléctrica / Acústica / Ukelele",
    fechaInicio: "Inicio: 10/08",
    precio: 5000,
    
  },

  {
    nombre: "Saxo Alto / Tenor",
    fechaInicio: "Inicio: 12/08",
    precio: 6500,
    
  },
  {
    nombre: "Flauta Traversa",
    fechaInicio: "Inicio: 10/08",
    precio: 4500,
    
  },

  {
    nombre: "Piano / Teclado / Acordeón",
    fechaInicio: "Inicio: 15/08",
    precio: 5500,
    
  },

  {
    nombre: "Trompeta",
    fechaInicio: "Inicio: 11/09",
    precio: 6000,
    
  },

  {
    nombre: "Batería",
    fechaInicio: "Inicio: 20/08",
    precio: 5800,
    
  },


  {
    nombre: "Bajo Eléctrico",
    fechaInicio: "Inicio: 14/08",
    precio: 5500,
   
  },

  {
    nombre: "Violín",
    fechaInicio: "Inicio: 11/08",
    precio: 7500,
    
  },

  {
    nombre: "Canto",
    fechaInicio: "Inicio: 10/08",
    precio: 5900,
    
  },

];
const cursos = [

  {
    nombre: "Guitarra: Eléctrica / Acústica / Ukelele",
    fechaInicio: "Inicio: 10/08",
    precio: 5000,
    disponibilidad: "Curso Disponible",
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
    disponibilidad: "Curso Disponible",
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

  //RECUPERAR CARRITO ABANDONADO
  elementoCarrito = JSON.parse(localStorage.getItem('elementoCarrito')) || []

  const contenedorCarritoCompras = document.querySelector("#items")
  
  const contenedorFooterCarrito = document.querySelector("#footer");

  crearCard();
  mostrarCarrito();
  comprar();

//CARDS
function crearCard() {
  let cards=document.getElementById("cursosCompra");

  for(const curso of cursos){

    let card=document.createElement("div");
    card.className="card col-4 justify-content-md-center align-items-center";
    card.innerHTML=`
    <div class="card bg-primary text-black text-center p-3" style="width: 18rem;">        
    <img class="card-img-top" src=${curso.imagen} alt="${curso.nombre}">
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

  // Para iniciar compra
  elementoCarrito.length === 0 && Swal.fire({
    title: 'EL CARRITO ESTÁ VACÍO',     
    text: 'Elegí un Curso para Iniciar tu Compra',
    imageUrl: 'static/assets/img/carritovacio.png',
    imageWidth: 80,
    imageHeight: 80,
    imageAlt: 'ok',
    
});
 
  //AGREGAR ELEMENTOS AL CARRITO
 
  let miBoton = document.getElementById(`miBoton--${curso.nombre}`);

  miBoton.addEventListener("click", (e) => {    
    elementoCarrito.push(curso);
    
    localStorage.setItem("elementoCarrito",JSON.stringify(elementoCarrito));

    
    
      Toastify({
        text:"AGREGADO",
        duration:3500,
        gravity:"top",
        position:"right",
        style:{
          background: "linear-gradient(to right, #212529, #2f3236)"   
        }
       
    }).showToast();

    })

  }
}




//MOSTRAR CARRITO

function mostrarCarrito(){
    
    finalCompra = elementoCarrito.reduce ((ac,curso) => ac + curso.precio,0)
    let armarCarrito = document.getElementById("carritologo")
    armarCarrito.addEventListener("click", (e) => {
    
    contenedorCarritoCompras.innerHTML = "";
   
       elementoCarrito.forEach(

        (elemento)=>{

            let itemCarrito = document.createElement("tr");
           itemCarrito.id = `fila${elemento.nombre}`;

            itemCarrito.innerHTML = `


              <td>${elemento.nombre}</td>
              <td>${elemento.fechaInicio}</td>
              <td>${elemento.precio}</td>
              <td> <button class='btn btn-light' onclick='eliminar("${elemento.nombre}")'>🗑️</button>
    

              `;
            contenedorCarritoCompras.append(itemCarrito);
            mostrarCarrito()

    }

  );

  cursosCarro.length === 0 ? contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Carrito vacío</th>` :
  contenedorFooterCarrito.innerHTML = `<th scope="row" colspan="5">Total de la compra: $${finalCompra}</th>`;
  

    }
)}

//ELIMINAR PRODUCTO CARRITO
function eliminar(nombre) {
  let indice = elementoCarrito.find(el => el.nombre == nombre);
  elementoCarrito.splice(indice, 1);//eliminando del carro
  let fila = document.getElementById(`fila${nombre}`);
  document.getElementById("items").removeChild(fila);
  localStorage.removeItem("elementoCarrito", JSON.stringify(elementoCarrito)); 
  mostrarCarrito();
 
  Toastify({
    text:"ELIMINADO",
    duration:3500,
    gravity:"top",
    position:"right",
    style:{
      background: "linear-gradient(to right, #212529, #2f3236)"   
    }
   
}).showToast();

}
mostrarCarrito(); 


//COMPRAR
function comprar(){

  let botonFinDeCompra = document.getElementById("compraFinal")
  
 
  botonFinDeCompra.addEventListener ("click", (e) => {
    

   

   console.log (JSON.parse(localStorage.getItem('elementoCarrito')))
   localStorage.removeItem("elementoCarrito",JSON.stringify(elementoCarrito));

   
   

})
}
 





 





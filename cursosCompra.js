class Curso {
  constructor(nombre, fechaInicio, precio, disponibilidad, imagen){
    this.nombre = nombre;
    this.fechaInicio = fechaInicio;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    this.imagen = imagen;
    
  }
}


let compra = [];

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

  // Para iniciar compra
  compra.length === 0 && Swal.fire({
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
    e.preventDefault();
    console.log("Agregaste" + " " + curso.nombre + " " +"al carrito \nTotal a pagar: $"+ curso.precio);
    compra.push(curso);
    localStorage.setItem("compra",JSON.stringify(compra));
    
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

crearCard();


//EFECTUAR LA COMPRA TOTAL
function comprar(){

  let botonFinDeCompra = document.getElementById("compraFinal")
  
  let finalCompra = 0
  botonFinDeCompra.addEventListener ("click", (e) => {

    e.preventDefault ();
  
    finalCompra = compra.reduce ((ac,curso) => ac + curso.precio,0)
  
    console.table(compra);
    const filtro = compra.filter ((cur) => cur.disponibilidad=="Curso No Disponible")
 
     
    console.log ("El total a pagar es $" + finalCompra);

   console.log (JSON.parse(localStorage.getItem('compra')))
   localStorage.removeItem("compra",JSON.stringify(compra));
   

 swal.fire
   Swal.fire({
    
    title: 'GRACIAS POR TU COMPRA \nCOMPLETÁ EL FORMULARIO Y RECIBÍ EL LINK',
   //text: 'Tus cursos: '  + JSON.stringify(compra.nombre) + ' El total a pagar es $ '+ finalCompra,
    text: 'El total a pagar es $ '+ finalCompra,
    imageUrl: 'static/assets/img/ok.png',
    imageWidth: 90,
    imageHeight: 80,
    imageAlt: 'ok',
    style:{
      font: 'montserrat medium'
                    }
}).then((result) => {
  if (result.value) {
    window.location.href = "formularioCompra.html";
  }
});


// Swal.fire({
    
//   title: 'GRACIAS POR TU COMPRA \nCOMPLETÁ EL FORMULARIO Y RECIBÍ EL LINK',
//   // text: 'Tus cursos: '  + JSON.stringify(compra) + ' El total a pagar es $ '+ finalCompra,
//   text: 'El total a pagar es $ '+ finalCompra,
//   imageUrl: 'static/assets/img/ok.png',
//   imageWidth: 90,
//   imageHeight: 80,
//   imageAlt: 'ok',
  
// });


})
}
 
comprar();
const carroCompra = JSON.parse(localStorage.getItem('compra')) || [];
console.log(carroCompra);


//FORMULARIO (YA SE INDIVIADUALIZÓ)
// let usuario = [];
// const formularioNombre = document.querySelector(".nombreForm");
// const telefonoFormulario = document.querySelector(".telForm");

// formularioNombre.onchange = function () {
//   console.log(formularioNombre.value);
//   usuario.push(formularioNombre.value);
//   localStorage.setItem("usuario", JSON.stringify(usuario));
// }

// telefonoFormulario.onchange = function () {
//   console.log(telefonoFormulario.value);
//   usuario.push(telefonoFormulario.value);
//   localStorage.setItem("usuario", JSON.stringify(usuario));
// }

// const btn = document.getElementById('btnSubmit');

// document.getElementById('form')
//   .addEventListener('submit', function (event) {
//       event.preventDefault();

//       const serviceID = 'default_service';
//       const templateID = 'template_7xbn0c3';

//       emailjs.sendForm(serviceID, templateID, this)          
//           .then(() => {
//             Toastify({
//               text:"ENVIADO",
//               duration:2500,
//               gravity:"top",
//               position:"right",
//               style:{
//                 background: "linear-gradient(to right, #212529, #2f3236)"   
//               }
             
//             }).showToast()        

//           }, (err) => {
//               alert(JSON.stringify(err));
//           });
//       console.log(email.value);
//       usuario.push(email.value);    
//       localStorage.setItem("email", JSON.stringify(usuario))
//       form.reset();
      
//   });


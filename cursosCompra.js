


class Curso {
  constructor(nombre, fechaInicio, precio, disponibilidad, imagen){
    this.nombre = nombre;
    this.fechaInicio = fechaInicio;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    this.imagen = imagen;
    
  }
}

const cursos = [

  {
    nombre: "Guitarra: Eléctrica / Acústica / Ukelele",
    precio: "$ 5000",
    fechaInicio: "Inicio: 10/08",
    disponibilidad: "Curso No Disponible",
    imagen: src="static/assets/compraCurso/guitarra.jpg"
  },

  {
    nombre: "Saxo Alto / Tenor",
    precio: "$ 6500",
    fechaInicio: "Inicio: 12/08",
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/saxo.jpg"
  },
  {
    nombre: "Flauta Traversa",
    precio: "$ 4500",
    fechaInicio: "Inicio: 10/08",
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/flauta.jpg"
  },

  {
    nombre: "Piano / Teclado / Acordeón",
    precio: "$ 5500",
    fechaInicio: "Inicio: 15/08",
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/piano.jpg"
  },

  {
    nombre: "Trompeta",
    precio: "$ 6000",
    fechaInicio: "Inicio: 11/09",
    disponibilidad: "Curso No Disponible",
    imagen: src="static/assets/compraCurso/trompeta.jpg"
  },

  {
    nombre: "Batería",
    precio: "$ 5800",
    fechaInicio: "Inicio: 20/08",
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/bata.jpg"
  },


  {
    nombre: "Bajo Eléctrico",
    precio: "$ 5500",
    fechaInicio: "Inicio: 14/08",
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/bajo.jpg"
  },

  {
    nombre: "Violín",
    precio: "$ 7500",
    fechaInicio: "Inicio: 11/08",
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/violin.jpg"
  },

  {
    nombre: "Canto",
    precio: "$ 5900",
    fechaInicio: "Inicio: 10/08",
    disponibilidad: "Curso Disponible",
    imagen: src="static/assets/compraCurso/canto.jpg"
  },

  
  ];


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
    <a href="#" class="btn btn-dark" style="font-family: montserrat";>COMPRAR CURSO</a>
  </div>
</div>
    `;
    cards.append(card);
}


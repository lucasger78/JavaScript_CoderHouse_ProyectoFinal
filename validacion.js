//Variables y Constantes Globales

const userNombre = document.getElementById('NombreUsuario');
const contraseña = document.getElementById('contraseña');
const login = document.getElementById('ingreso');
const frmLogin = document.getElementById('frm-Login');

const busqueda = localStorage.getItem("user");
const validarUsuario = JSON.parse(busqueda); 

//LogIn Usuario
frmLogin.addEventListener('submit', LoginUser);



function LoginUser(event) {

  const busqueda = localStorage.getItem("user");
  const validarUsuario = JSON.parse(busqueda); 
  
  // Prevenir los eventos precargados
  event.preventDefault();

  // Validar que se llene el formulario
  if (userNombre.value === "" || contraseña.value === "") {
    Swal.fire({
      position: 'center',
      icon: "warning",
      title: 'POR FAVOR LLENA TODOS LOS CAMPOS',
      button: true,
      })
  }
  // Validar que el usuario SÍ exista
  else if (!validarUsuario.find(user => user.user === userNombre.value)) {
    Swal.fire({
      position: 'center',
      icon: "warning",
      title: 'EL USUARIO NO EXISTE',
      button: true,
      })
  }
  // Validar que la contraseña coincida con el usuario almacenado
  else if (
    validarUsuario.find(user => user.user === userNombre.value).pass !== contraseña.value) {
      Swal.fire({
        position: 'center',
        icon: "error",
        title: 'NO COINCIDE LA CONTRASEÑA',
        button: true,
        })
    }
  else {
    Swal.fire({
      position: 'center',
      icon: "success",
      text: 'BINVENIDO A RITMO URBANO',
      title: 'Ahora podés comprar un curso',
      button: false,
      })
    
    setTimeout( function() { window.location.href = "compra.html"; }, 1500 );
  }      
}
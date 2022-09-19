const frmRegistro = document.getElementById("frm-register");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const email=document.getElementById ("correo")
const telefono=document.getElementById ("telefono")
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const userRegistered = [];

const getLocal = localStorage.getItem("user");
const validateUser = JSON.parse(getLocal); 


frmRegistro.addEventListener("submit", RegisterUser);
 

// Registro Usuario
function RegisterUser(event) {


  const getLocal = localStorage.getItem("user");
  const validateUser = JSON.parse(getLocal); 
    
  event.preventDefault();

  // Crear usuario 
  const user = {
    nameFull: fullName.value,
    user: userName.value,
    pass: password.value,
    confPassword: confirmPassword.value
  };

  // Validar que se llene el formulario
  if (
    fullName.value === "" ||
    userName.value === "" ||
    email.value === "" ||
    telefono.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
    ) {
      Swal.fire({
        position: 'center',
        icon: "warning",
        title: 'POR FAVOR LLENA TODOS LOS CAMPOS',
        button: true,
        })
    }
    // Validar que las contraseñas coincidan
  else if (password.value !== confirmPassword.value) {
    Swal.fire({
      position: 'center',
      icon: "error",
      title: 'NO COINCIDEN LAS CONTRASEÑAS',
      button: true,
      })
  }
  // Validar que el usuario no exista
  else if (validateUser.find(user => user.user === userName.value)) {
  
    Swal.fire({
      position: 'center',
      icon: "warning",
      title: 'USUARIO NO DISPONIBLE',
      button: true,
      })
  }
  
  else {
    // Agregar usuario
    userRegistered.push(user);
    console.table(user)
    
    localStorage.setItem("user",JSON.stringify(userRegistered));              
    Swal.fire({
      position: 'center',
      icon: "success",
      text: 'BINVENIDO A RITMO URBANO',
      title: 'Ahora podés comprar un curso',
      button: false,
      })
    // Limpiar campos
    fullName.value = "";
    userName.value = "";
    email.value = ""; 
    telefono.value = ""; 
    password.value = "";
    confirmPassword.value = "";  
    setTimeout( function() { window.location.href = "compra.html"; }, 1500 );
  }
}




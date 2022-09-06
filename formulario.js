//FORMULARIO
let usuario = []
const formularioNombre = document.querySelector(".nombreForm");
const telefonoFormulario = document.querySelector(".telForm");

formularioNombre.onchange = function () {
  console.log(formularioNombre.value);
  usuario.push(formularioNombre.value);
  localStorage.setItem("usuario", JSON.stringify(usuario));
}

telefonoFormulario.onchange = function () {
  console.log(telefonoFormulario.value);
  usuario.push(telefonoFormulario.value);
  localStorage.setItem("usuario", JSON.stringify(usuario));
}

const btn = document.getElementById('btnSubmit');

document.getElementById('form')
  .addEventListener('submit', function (event) {
      event.preventDefault();

      const serviceID = 'default_service';
      const templateID = 'template_7xbn0c3';

      emailjs.sendForm(serviceID, templateID, this)          
          .then(() => {
            Toastify({
              text:"ENVIADO",
              duration:2500,
              gravity:"top",
              position:"right",
              style:{
                background: "linear-gradient(to right, #212529, #2f3236)"   
              }
             
            }).showToast()        

          }, (err) => {
              alert(JSON.stringify(err));
          });
      console.log(email.value);
      usuario.push(email.value);    
      localStorage.setItem("email", JSON.stringify(usuario))

      form.reset();
      
  });

  
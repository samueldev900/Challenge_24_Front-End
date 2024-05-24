// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="radioGroup"]');
  const labels = document.querySelectorAll(".radioGrupo");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", function () {
      labels.forEach((label) => {
        label.classList.remove("active");
      });
      if (radio.checked) {
        radio.closest(".radioGrupo").classList.add("active");
      }
    });
  });
});


function showModal() {
  var name = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("iemail").value.trim();
  var radio1 = document.getElementById("exampleCheck1").checked;
  var radio2 = document.getElementById("exampleCheck2").checked;
  var checkBox = document.getElementById("boxCheck").checked;
  var myModal = document.getElementById("myModal");
  var mainElement = document.querySelector("main");

  if (name && lastName && email && (radio1 || radio2) && checkBox) {
    // Todos os campos estão preenchidos e o formulário é válido, então ativamos o modal
    myModal.style.top = "calc(0% - 110px)";
    mainElement.style.marginTop = "100px";

    var contador = 0;
    var intervalo = setInterval(function() {
        contador++;
        if (contador >= 5) {
            clearInterval(intervalo); // Para o temporizador quando alcançar 5 segundos
            console.log("Contagem de 5 segundos completada!");
            // Seu código aqui que você deseja executar após 5 segundos
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}


}

var form = document.getElementById('myForm');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  showModal();
  form.submit();
});
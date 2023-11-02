document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".copy-button");
  
    copyButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const codeElement = this.parentElement.querySelector(".code");
        const codeText = codeElement.textContent;
  
        // Extrae el código buscando la cadena que sigue a "CODIGO:"
        const code = codeText.split("CODIGO: ")[1];
  
        if (code) {
          const tempInput = document.createElement("textarea");
          tempInput.value = code;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
  
          alert("Código copiado al portapapeles: " + code);
        } else {
          alert("No se encontró un código válido.");
        }
      });
    });
  });







  document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".copy-button");
  
    copyButtons.forEach(function (copyButton, index) {
      copyButton.addEventListener("click", function () {
        const accountNumberElement = this.parentElement.querySelector(".account-number");
        const accountNumberText = accountNumberElement.textContent.match(/(\d+)/);
  
        if (accountNumberText && accountNumberText.length > 0) {
          const tempInput = document.createElement("input");
          tempInput.value = accountNumberText[0];
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
  
          alert("Número de cuenta copiado al portapapeles: " + accountNumberText[0]);
        } else {
          alert("No se encontró un número de cuenta válido.");
        }
      });
    });
  });
  
  
  
  
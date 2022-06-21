       function validarPassword() {
         let pass = document.getElementById("primero").value + document.getElementById("segundo").value + document.getElementById("tercero").value;
        let message = pass==="991" ? "password 1 correcto":(pass==="714" ? "password 2 correcto":"password incorrecto");
        alert(message);
      }
 
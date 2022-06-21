       function verificarCantidad() {
        let x = document.getElementById("cantFlor1").value || 0;
        let y = document.getElementById("cantFlor2").value || 0;
        let z = document.getElementById("cantFlor3").value || 0;
        let cantSel=parseFloat(x)+parseFloat(y)+parseFloat(z);
        if (cantSel > 10) 
        {
          document.getElementById('respuesta').innerHTML = "Llevas demasiados Stickers";
        }
        else
        {
          document.getElementById('respuesta').innerHTML = "Llevas "  + cantSel + " Stickers";
        }
      }
 
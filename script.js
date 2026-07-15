const btnGuardar = document.getElementById("btnGuardar");

const inputNombre = document.getElementById("nombreIngresado");
const inputCorreo = document.getElementById("correoIngresado");
const inputContra = document.getElementById("contraIngresada");

function validarCampos(){
	if (
		inputNombre.value.trim() == "" ||
		inputCorreo.value.trim() == "" ||
		inputContra.value.trim() == ""
	){
		btnGuardar.disabled = true;
	} else{
		btnGuardar.disabled = false;
	}
}

inputNombre.addEventListener("input", validarCampos);
inputCorreo.addEventListener("input", validarCampos);
inputContra.addEventListener("input", validarCampos);

let nombre, correo, contra

btnGuardar.addEventListener("click", function (e) {
    e.preventDefault();

    try {
        const nombre = document.getElementById("nombreIngresado").value.trim();
        const correo = document.getElementById("correoIngresado").value.trim();
        const contra = document.getElementById("contraIngresada").value.trim();

        const datos = {
            nombre: nombre,
            correo: correo,
            password: contra
        };

        fetch("https://script.google.com/macros/s/AKfycbyxsjG_h7dyW6HRcba8jNHN_YFgG7XkOtbXhNDr3h3bYknc-kA2_kqlniAzN2YrgeanEw/exec", {
            method: "POST",
            
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        .then(() => {
            alert("Usuario guardado correctamente.");

            document.getElementById("nombreIngresado").value = "";
            document.getElementById("correoIngresado").value = "";
            document.getElementById("contraIngresada").value = "";

            btnGuardar.disabled = true;
        })
        .catch(error => {
            alert(" Error al enviar los datos: " + error);
        });

    } catch (error) {
        alert("Algo salió mal: " + error.message);
    }
});

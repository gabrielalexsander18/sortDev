const button = document.querySelector('.sort')
const buttonReturn = document.querySelector('#button_return')

const sortNumber = () => {
    const max =  Math.floor(document.querySelector(".input_max").value)
    const min = Math.ceil(document.querySelector(".input_min").value)
    const quantity = document.querySelector(".input_quantity").value

    const rNumero = document.querySelector("#resultadoNumero")
    const containerOpacity = document.querySelector("#container_opacity")

    const Arr = []
    
    if(min >= max) {
        alert("Número mínimo não pode ser maior ou igual ao máximo")
    } else {
        for (var i = 0; i < quantity; i++) {

            const result = Math.floor(Math.random() * (max - min + 1)) + min;
        
            Arr.push(result)
        }
                containerOpacity.style.display = 'flex',

                    rNumero.innerHTML = `Número: ${Arr}`
            
    }
}


function mostrarLoader() {
    // Mostra o spinner
    document.getElementById("container_loader").style.display = "flex";

    // Simula um tempo de carregamento de 3 segundos
    setTimeout(function() {
        // Esconde o spinner
        document.getElementById("container_loader").style.display = "none";

        sortNumber()
    }, 5000);
}

const returnHome = () => {
    const containerOpacity = document.querySelector("#container_opacity")

    containerOpacity.style.display = 'none'

    recarregarPagina()
}

function recarregarPagina() {
    location.reload();
}

button.addEventListener('click', mostrarLoader)
buttonReturn.addEventListener('click', returnHome)
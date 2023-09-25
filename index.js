const button = document.querySelector('.sort')

const sortNumber = () => {
    const max =  Math.floor(document.querySelector(".input_max").value)
    const min = Math.ceil(document.querySelector(".input_min").value)
    const quantity = document.querySelector(".input_quantity").value

    const Arr = []
    
    if(min >= max) {
        alert("Número mínimo não pode ser maior ou igual ao máximo")
    } else {
        for (var i = 0; i < quantity; i++) {

            const result = Math.floor(Math.random() * (max - min + 1)) + min;
        
            Arr.push(result)
        }
            alert(Arr)
        }
    }
button.addEventListener('click', sortNumber)
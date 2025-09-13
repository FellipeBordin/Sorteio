function generateNumber() {
    const min = Math.ceil(document.getElementById('inpunt-min').value)
    const max = Math.floor(document.getElementById('input-max').value)


    if (min >= max) {// se o valor min for maior que o max aparece o alerta        
        alert('O valor minimo tem que ser MENOR que o valor máximo.')
    } 


    else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
     
    alert(result)
    
    }

    
}
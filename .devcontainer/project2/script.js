const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    if(height === ''|| height <=0 || isNaN(height)){
        result.innerHTML = 'please give a valid height';
    }
})

const buttons = document.querySelectorAll('.btn')
const body = document.querySelector('body')

buttons.forEach(function(button){

    button.addEventListener('click', function(e){

        if(e.target.id === 'orange'){
            body.style.backgroundColor = 'orange'
            body.style.color = 'black'
        }

        if(e.target.id === 'black'){
            body.style.backgroundColor = 'black'
            body.style.color = 'white'
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
            body.style.color = 'white'
        }

        if(e.target.id === 'green'){
            body.style.backgroundColor = 'green'
            body.style.color = 'white'
        }

    })

})
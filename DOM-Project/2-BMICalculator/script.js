const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value)
// in this usecase will give you en=mpty value

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please give a valid height';
    }
})
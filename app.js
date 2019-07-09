let numberInput = document.querySelector('#number');

let outputBox = document.querySelector('.output') ;
let output = document.querySelector('.output-text');



numberInput.addEventListener('input' , () =>{
    // let numberCurrent = document.querySelector('#number');
    fetch('http://numbersapi.com/'+numberInput.value)
        .then(response => response.text())
        .then(data =>{
            if(numberInput.value !=''){
                outputBox.style.visibility = 'visible';
                output.textContent = data;
            }
        })
        .catch(err => console.log(err));
});




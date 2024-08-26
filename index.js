let nbA = document.getElementById('nombreA');
    let nbB = document.getElementById('nombreB');
    console.log(nbA);
    console.log(nbB);
    const result = document.getElementById('result');

    const sum = document.getElementById('sum');
    const substract = document.getElementById('substract');
    const reset = document.getElementById('erase');
    sum.addEventListener("click", function(){
        let a = document.getElementById('nombreA').value;
        let b = document.getElementById('nombreB').value;
        
        let total = Number(a)+Number(b);
        console.log(total);


        result.value = total;
        result.innerText = total;
    });
    substract.addEventListener("click", function(){
        let a = document.getElementById('nombreA').value;
        let b = document.getElementById('nombreB').value;
        
        let total = Number(a)-Number(b);
        console.log(total);


        result.value = total;
        result.innerText = total;
    });

    reset.addEventListener("click", function(){
        let inputs = document.querySelectorAll('.input');
        inputs.forEach((input) => {
            input.value='';
            input.innerText='';
        })
    });
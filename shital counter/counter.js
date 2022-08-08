let counter=0

    function addition(){
        counter++
        console.log(document.getElementById("zero").innerHTML = counter);
    if (counter == 10)
    console.log(document.getElementById("message").innerHTML= "keep going");

    }



    function reset(){
        counter = 0
        console.log(document.getElementById("zero").innerHTML = counter);
    }

    function subtract(){
        counter--
        console.log(document.getElementById("zero").innerHTML = counter);

    }
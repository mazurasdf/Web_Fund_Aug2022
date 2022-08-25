function fetchPokemon(){
    var input = document.getElementById("input");
    console.log(input.value);

    //THIS IS WHERE THE API CALL HAPPENS
    // promises exist PENDING, RESOLVED, REJECTED
    fetch("https://pokeapi.co/api/v2/pokemon/"+input.value)
        .then(res => res.json())
        .then(res => {
            //whatever you want to do with the response
            console.log(res);
            console.log(res.sprites.front_default);

            document.getElementById("pokepic").src = res.sprites.front_default;
        })
        .catch(err => {
            alert("it didn't work");
            console.log(err);
        })
    // var response = fetch("https://pokeapi.co/api/v2/pokemon/"+input.value);
    // console.log(response);
}
function calculator() {
    let inp =  document.getElementById('value');
    let inp_history = document.getElementById('history');
    let result = eval(inp.value);
    if(result != null) {
        inp_history.innerHTML = "10";
        inp.innerHTML = result;
    }

    console.log(result);
}
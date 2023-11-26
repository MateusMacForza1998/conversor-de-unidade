//selecionando elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outElement = document.querySelector("#out");
const converteButton = document.querySelector("#converte");
const msgElement = document.querySelector("#msg");

//função de conversão

function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toElement){
        outElement.value = inputElement.value;
        
        return;
    }
//converter para metros
switch (fromValue) {
    case "mm":
        meters = inputElement.value / 1000;
        break;
    case "cm":
        meters = inputElement.value / 100;
        break
    case "m":
        meters = inputElement.value;
        break;
    case "km":
        meters = inputElement.value * 1000;
        break;


}

//converter Metros para alguma saida
let result;
switch (toValue) {
    case "mm":
        result = meters * 1000;
        break;
    case "cm":
        result = meters * 100;
        break
    case "m":
        result = meters;
        break;
    case "km":
        result = meters / 1000;
        break;


}
//input
    outElement.value = result;

}

// Adicionar um ouvinte de eventos ao botão de conversão
converteButton.addEventListener("click", convert);
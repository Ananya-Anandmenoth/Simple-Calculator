function buttonClick(value){
    document.getElementById('screen').value += value
}

function clearDisplay(C){
document.getElementById('screen').value=""
}

function equalClick(){
    var text = document.getElementById('screen').value
    var result = eval(text)
    document.getElementById('screen').value = result
}
 


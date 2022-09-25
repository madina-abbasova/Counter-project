console.log('f')


function plus (){
    document.getElementById('counter').innerText = Number(document.getElementById('counter').innerText) +1
}


function minus(){
    document.getElementById('counter').innerText = Number(document.getElementById('counter').innerText) -1
}


function reset(){
    document.getElementById('counter').innerText =0 
}
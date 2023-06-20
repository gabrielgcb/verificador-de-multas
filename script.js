function calcular() {
    var txtv = window.document.querySelector('input#txtvel');
    var vel = Number(txtv.value);
    var resultado = window.document.querySelector('div#res');
    resultado.innerHTML = `<p>Sua velocidade atual é de<strong> ${vel}km/h</strong></p>`;
    if(vel > 80) {
        resultado.innerHTML += '<p>Você ultrapassou a velocidade máxima permitida (80km/h) <strong>MULTADO!</strong></p>'
    } else {
        resultado.innerHTML += '<p>Você <strong>não</strong> ultrapassou a velocidade máxima permitida (80km/h)</p>'
        resultado.innerHTML += '<p>Dirija sempre com o cinto de segurança!</p>'
    }
}
function converter(){
    // ID´S LINKADOS PARA O STYLE
   let corp = document.getElementById('corpo')
   let m = document.getElementById('principal')

    // ID´S LINKADOS PARA CONVERSÃO
    let b_number = Number(document.getElementById('btn-number').value);
    let r = document.getElementById('res')

    // CRIANDO VARIAVEL CONV COM O B_NUMBER E O VALOR ATUAL DO DOLAR
    let conv = Number(b_number * 4.76).toFixed(2)
    
    // SE O VALOR FOR 0 OU MENOR QUE O
    if(b_number == 0 || b_number < 0){
        alert('Digite um valor valido para a conversão!'),
        r.innerHTML = ''
    }

    //CONTEUDO NO r (res) 
    r.innerHTML = "O valor convertido é: " + "US$" + conv
    // let desc = "O valor convertido é: " + "US$" + conv
    

    // STYLE 
    // r.style.backgroundColor = 'white'
    r.style.backgroundColor = '#005db9'
    r.style.boxShadow = '0 0 0.5m #00224e'
    corp.style.backgroundColor = '#c42021'
    m.style.backgroundColor = '#296eb4'

}


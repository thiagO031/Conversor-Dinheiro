function converter(){
   let corp = document.getElementById('corpo')
   let m = document.getElementById('principal')

    let b_number = Number(document.getElementById('btn-number').value);
    let r = document.getElementById('res')

    let conv = Number(b_number * 4.76)
    
    let desc = "O valor convertido é: " + "US$" + conv
    // let desc = "R$ " + b_number + "  ->>  US$ " + conv 
    
    r.innerHTML = desc

    // r.style.backgroundColor = 'white'
    r.style.backgroundColor = '#005db9'
    corp.style.backgroundColor = '#c42021'
    m.style.backgroundColor = '#296eb4'

}


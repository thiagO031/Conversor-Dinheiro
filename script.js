function converter(){
    let b_number = Number(document.getElementById('btn-number').value);
    let r = document.getElementById('res')

    let conv = Number(b_number * 5)
    
    let desc = "O valor convertido é US$ " + conv
    // let desc = "R$ " + b_number + "  ->>  US$ " + conv 
    
    r.innerHTML = desc

}
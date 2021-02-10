function porcem(){
 var num1 = document.getElementById('txtn1')
 var num2 = document.getElementById('txtn2')
 var res = document.getElementById('res')
 if (num1.value.length ==0 && num2.value.length == 0){
    alert('[Erro] Verifique os dados')
    }else {
        var ca = document.getElementsByName('c')
    }if (ca[0].checked){
       var num1 = Number(num1.value)
       var num2 = Number(num2.value)
       var porcem = num1 * num2 / 100
       res.innerHTML = `${num2} % de ${num1} é igual a ${porcem}`
    }else if (ca[1].checked){
        var num1 = Number(num1.value)
        var num2 = Number(num2.value)
        var porcem = num1 + (num1 * num2/100) 
        res.innerHTML = `Com o <strong>aumento</strong> de ${num2} %, o valor de ${num1} passa a ser de ${porcem}`
    }else if (ca[2].checked){
        var num1 = Number(num1.value)
        var num2 = Number(num2.value)
        var porcem = num1 - (num1*num2/100)
        res.innerHTML = `Com o <strong>desconto</strong> de ${num2} % o valor de ${num1} passa a ser de ${porcem}`
    }
     
    
}
function PA(){
    var valor = parseInt(document.getElementById('inicial').value);
    var razao = parseInt(document.getElementById('razao').value);
    var termo = parseInt(document.getElementById('termo').value);
    var res = document.getElementById('res')
    var pa='';
  
    for(var c=1; c<=termo ; c++){
     pa += `Termo `+c+` = `+valor+`<br />`;
      valor += razao;
    }
    res.innerHTML = (pa)
  }
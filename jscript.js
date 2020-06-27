function calcular05(){
    let moeda5 = window.document.getElementById("5cents")
    let num = Number(moeda5.value)
    let final
    final = (num * 0.05);
    res5.innerHTML = ''
    res5.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final
    }

    function calcular10(){
    let moeda5 = window.document.getElementById("10cents")
    let num = Number(moeda5.value)
    let final
    final = (num * 0.10);
    res10.innerHTML = ''
    res10.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final   
    }



    function calcular25(){
    let moeda5 = window.document.getElementById("25cents")
    let num = Number(moeda5.value)
    let final
    final = (num * 0.25);
    res25.innerHTML = ''
    res25.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final            
     }




    function calcular50(){
    let moeda5 = window.document.getElementById("50cents")
    let num = Number(moeda5.value)
    let final
    final = (num * 0.50);
    res50.innerHTML = ''
    res50.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final                
    }

    function calcular1r(){
    let moeda5 = window.document.getElementById("1rs")
    let num = Number(moeda5.value)
    let final
    final = (num * 1.00);
    res1r.innerHTML = ''
    res1r.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final                
    }



    function calcular2r(){
    let moeda5 = window.document.getElementById("2rs")
    let num = Number(moeda5.value)
    let final
    final = (num * 2.00);
    res2r.innerHTML = ''
    res2r.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final                    
    }


    function calcular5r(){
    let moeda5 = window.document.getElementById("5rs")
    let num = Number(moeda5.value)
    let final
    final = (num * 5.00);
    res5r.innerHTML = ''
    res5r.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final                        
    }

    function calcular10r(){
    let moeda5 = window.document.getElementById("10rs")
    let num = Number(moeda5.value)
    let final
    final = (num * 10.00);
    res10r.innerHTML = ''
    res10r.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final                            
    }

    function calcular20r(){
    let moeda5 = window.document.getElementById("20rs")
    let num = Number(moeda5.value)
    let final
    final = (num * 20.00);
    res20r.innerHTML = ''
    res20r.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final                            
    }

    function calcular50r(){
    let moeda5 = window.document.getElementById("50rs")
    let num = Number(moeda5.value)
    let final
    final = (num * 50.00);
    res50r.innerHTML = ''
    res50r.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final                                
    }

    function calcular100r(){
    let moeda5 = window.document.getElementById("100rs")
    let num = Number(moeda5.value)
    let final
    final = (num * 100.00);
    res100r.innerHTML = ''
    res100r.innerHTML += `O valor das moedas é R$${final.toFixed(2)}`
    return final
    }
    
   function calculoFinal(){
    let v05 = calcular05()
    let v10 = calcular10()
    let v25 = calcular25()
    let v50 = calcular50()
    let v1r = calcular1r()
    let v2r = calcular2r()
    let v5r = calcular5r()
    let v10r = calcular10r()
    let v20r = calcular20r()
    let v50r = calcular50r()
    let v100r = calcular100r()
    let total = v05 + v10 + v25 + v50 + v1r + v2r + v5r + v10r + v20r + v50r + v100r
    resfinal.innerHTML = ''
    resfinal.innerHTML += `O valor total é R$ ${total.toFixed(2)}`
    return total
   }
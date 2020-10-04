
var ar =[] 
let dv = window.document.getElementById(`div`)
function add() { 

    
ar.sort()
    let v3 = window.document.getElementById(`in`)
    let v4 = Number(v3.value)
     if(ar.indexOf(v4) == -1 ){ ar.push(v4)
        dv.innerHTML+=`  ${ar[ar.length-1] }` 
         
        }else{ 
            alert (`Esse número já foi adicionado`)
            
    }  }
   function ordenar(){
    Array.prototype.sort()
     dv.innerHTML= ar
   
  
  } 
    
    
    
     
     function analisar(){
    
       if(ar.length!=1){ 
        
        var soma= ar.reduce((soma, currentElement)=> soma+currentElement)
        var media = soma/ar.length
        let maior = ar[ar.length-1]
        let menor = ar[0]
        let div=window.document.getElementById(`div2`)
       div.innerHTML=`Foram adicionados ${ar.length } valores, sendo o maior deles igual a ${maior} e o menor igual a ${menor}. a soma desses valores é ${soma} e a média é ${media}.`
}else if (ar.length==1){alert(`Foi adicionado apenas um valor, ${ar[0]}.`)
}else{alert(`Nenhum valor foi adicionado.`)}
     } function zerar(){
        ar=[]
       let div=window.document.getElementById(`div2`)
       
        dv.innerHTML= ` `
        div.innerHTML=` `
           }
        
 



 let gg = document.querySelectorAll(".item");// seleciona todos objetos que pertencem a class que foi passada como parametro
         for( let i = 0; i < gg.length; i ++){
            gg[i].style.color = "purple";
            gg[1].style.color = 'blue';
         }
      let tit= document.getElementById("titulo");
    
      //tit.style.display = "none";
      tit.style.backgroundColor = "Red";
   
      let center=document.querySelectorAll(".form");
      for(let i = 0;i < center.length;i++){

         center[i].style.color= "green";

      }
      
      let hrlink = document.getElementById("img");
      hrlink.setAttribute("class","content ");
      hrlink.removeAttribute("style");
      hrlink.setAttribute("href","https://uol.com.br");

      let bd = document.getElementsByTagName("body");
      bd.removeAttribute('style');

      if(hrlink.hasAttribute("style")){
         console.log("Não era pra ter");
      }
         document.write(Date());// imprime data e hora local
   

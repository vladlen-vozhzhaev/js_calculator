      var calc_btn = document.getElementsByTagName("button");
      var symbols = [0,1,2,3,4,5,6,7,8,9,".","+","-","/","*","="];
      var error=false;
      var count_of_uses=0;
      function calc(){
          display.value=display.value.replace("null","");
          display.value=display.value.replace("=","");
          display.value=display.value.replace(",",".");
          for (let i=0;i<display.value.length;i++){
            for (let j=0; j<symbols.length;j++){
              if (display.value[i].indexOf(symbols[j])!=-1) {
                error=false;
                break;
              }
              else {
                error=true;
              }
            }
            if (error) return "Введены недопустимые символы!";
          }
          switch(count_of_uses) {
            case 0:
              message.innerHTML = "Результат";
              break;
            case 1:
              message.innerHTML = "Результаты";
              break;
          }
          count_of_uses++;
          return eval(display.value);
      }
      
      function getChar(event) {
        if (event.which == null) {
          if (event.keyCode < 32) return null;
          return String.fromCharCode(event.keyCode)
        }
        if (event.which != 0 && event.charCode != 0) { 
          if (event.which < 32) return null; 
          return String.fromCharCode(event.which);
        }
        return null;
      }
      
      for (let i=0; i<calc_btn.length; i++) {
        calc_btn[i].addEventListener("click", function(e) {
          this.innerText!="="?display.value+=this.innerText:result.innerHTML+='<p>'+count_of_uses+') '+calc()+'</p>';
        });
      }
      document.addEventListener("keypress", function(e) {
        getChar(e)!=null&&getChar(e)!="="?display.value+=getChar(e):result.innerHTML+='<p>'+count_of_uses+') '+calc()+'</p>';
        });
var slideIndex = 0;
        csusztat();
        
        function csusztat() {
          var i;
          var slides = document.getElementsByClassName("csuszik");
          var dots = document.getElementsByClassName("pont");
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          setTimeout(csusztat, 4000); 
        }


document.getElementsByClassName("tablink")[0].click();
        function openCity(evt, cityName) {
          var i, x, tablinks;
          x = document.getElementsByClassName("city");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablink");
          for (i = 0; i < x.length; i++) {
            tablinks[i].classList.remove("w3-light-grey");
          }
          document.getElementById(cityName).style.display = "block";
          evt.currentTarget.classList.add("w3-light-grey");
        }

//------    MODAL SCRIPT ---------------

 function csere() {                 
            var x = document.urlap.nev.value;
            document.getElementById("pelda").innerHTML= x ;
            if(x === "")  
              {
                x = "barátom";
              }
            document.getElementById("wellcome").innerHTML= "üdvözöllek !"; 
            document.getElementById("tagline").innerHTML= "Kedves "+ x +" szeretném ezen az oldalon bemutatni, hogyan is láttam én az \"El Camino\"-t";
            document.getElementById("footer").innerHTML= "Tisztelt " + x + " gyorsan belátható, hogy nem állok a design \"magaslatán\" de azért kérlek kattints a továbblépéshez...";                
         }

        function opcio() {
            var obj = document.getElementById("Select");            
            document.getElementById("prefix").innerHTML =
            obj.options[obj.selectedIndex].text;            
            csere();
            document.getElementById("zar").disabled = false;
         }   
         
//------   Bejelentkező SCRIPT ---------------

function belep() {
          var nev = document.urlap2.username.value;
          var jel = document.urlap2.pass.value;
         
          if ( nev === "admin" && jel === "jelszo")
            {
              alert("Rendben. Sikeresen beléptél.");
              document.getElementById("neved").innerHTML= "Belépve mint: " + nev;  
              document.getElementById('id01').style.display='none';            
            }

          else if (nev != "admin")
            {
              alert("Helytelen a felhasználónév");
              document.getElementById("kerdes").reset();
            }

          else if (jel != "jelszo")
            {
              alert("Helytelen a jelszó");
              document.getElementById("kerdes").reset();
            }
}
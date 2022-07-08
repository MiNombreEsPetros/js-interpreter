         document.getElementById('myFile').addEventListener('change', function() {
                 
               var fr=new FileReader();
         
               fr.onload=function(){
                   
                   document.getElementById('main').textContent=fr.result;
               }
                 
               fr.readAsText(this.files[0]);
           }) 
         
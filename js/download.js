function download(filename, text) {
         var element = document.createElement('a');
         element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
         element.setAttribute('download', filename);
         
         element.style.display = 'none';
         document.body.appendChild(element);
         
         element.click();
         
         document.body.removeChild(element);
         }
         
         // Start file download.
         document.getElementById("dwn-btn").addEventListener("click", function(){
         // Generate download of hello.txt file with some content
         var text = document.getElementById("main").value;
         var text1 = document.getElementById("title").value;
         var filename = text1 ;
         
         download(filename, text);
         }, false);
      </script>
      <script>
         // clear
         function clr() {
             if (confirm('Are you sure?')) {
                 document.getElementById('main').value = '';
             }
         }
         
         function run() {
             eval(document.getElementById('main').value);
         }
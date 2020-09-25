function loadDoc() {
  var xhr=new XMLHttpRequest();

 	xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =  this.responseText;
  }
  };
xhttp.open("GET", "ajax_info.txt", true);
xhr.send();
}
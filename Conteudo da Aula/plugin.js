function ler() {
    var xhttp = new XMLHttpRequest();
    var div = document.getElementById('resultado');
    div.innerHTML = "Carregando...";

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            div.innerHTML = this.responseText;
        } else {
            div.innerHTML = "Tivemos um Problema!!" + this.status;
        }
    };

    xhttp.open("GET", "info.txt");
    xhttp.send();
}


function gerarNumeros() {
    var http = new XMLHttpRequest();
    var div = document.getElementById("divNumeros");
    div.innerHTML = "Carregando.."
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            div.innerHTML = this.responseText;            
        } else {
            div.innerHTML = "DEU ERRO AI"
        }
    };
    var valor = document.getElementById("txtValor").value;
    http.open("POST", "server.php");
    http.send("Valor = " + valor);
}
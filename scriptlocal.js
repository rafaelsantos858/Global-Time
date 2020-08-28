function loadCidades(continente) {
    const xhr = new XMLHttpRequest();
    const select = document.getElementById("cidade");
    select.innerHTML = "<option selected>Carregando...<option>"
    xhr.open("GET", "https://worldtimeapi.org/api/timezone/" + continente);

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            select.innerHTML = "";
            const continentes = JSON.parse(xhr.responseText);
            const cidade = document.getElementById("cidade")
            for (let i = 0; i < continentes.length; i++) {

                select.innerHTML += "<option value=" + continentes[i] + ">" + continentes[i] + "</option>"
            }
        }
    }

    xhr.send();
}



function loadhora(cidade) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://worldtimeapi.org/api/timezone/" + cidade);

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            const info = JSON.parse(xhr.responseText);
            var regiao = document.getElementById("regiao")
            var section = document.querySelector("section")
            section.innerHTML = ""





            var date = info.datetime

            let ano = date.substring(0, 4);
            let mes = date.substring(5, 7);
            let dia = date.substring(8, 10);


            let hora = date.substring(11, 13);
            let minutos = date.substring(14, 16);
            let segundos = date.substring(17, 19);

            let datacom = new Date(ano, (mes - 1), dia, hora, minutos, segundos);


            if(hora > 06 && hora < 18){
                section.innerHTML += "<div id='dia'> <p id='horaaqui'>Carregando...</p> <br> <br> <p>Região:" + info.timezone + "</p> <br> </div>"
             }else {
                section.innerHTML += "<div id='noite'> <p id='horaaqui'>Carregando...</p> <br> <br> <p>Região:" + info.timezone + "</p> <br> </div>"
             }


            setInterval(function () {
                let aux = datacom.getSeconds();
                datacom.setSeconds(aux + 1);
                document.getElementById("horaaqui").innerHTML = datacom.getDate() + "/" + (datacom.getMonth() + 1) + "/" + datacom.getFullYear() + " - " + datacom.getHours() + ":" + datacom.getMinutes() + ":" + datacom.getSeconds();
            }, 1000);


        }
    }

    xhr.send();
}
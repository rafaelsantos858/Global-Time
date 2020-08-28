function loadhrasip() {
    const xhr = new XMLHttpRequest();
    // select.innerHTML = "<option selected>Carregando...<option>"
    xhr.open("GET", "https://worldtimeapi.org/api/ip");

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            const infoip = JSON.parse(xhr.responseText);
            var section = document.querySelector('section')
            var ip = document.getElementById('ip')
            var regiao = document.getElementById('regiao')

            console.log(infoip);
            
            var date = infoip.datetime

            var ip = infoip.client_ip

            


            let ano = date.substring(0, 4);
            let mes = date.substring(5, 7);
            let dia = date.substring(8, 10);

            let hora = date.substring(11, 13);
            
            let minutos = date.substring(14, 16);
        
            let segundos = date.substring(17, 19);
            
            let datacom = new Date(ano, (mes - 1), dia, hora, minutos, segundos);

            if(hora > 06 && hora < 18){
                section.innerHTML += "<div id='dia'> <p id='horaaqui'>Carregando...</p> <br> <br> <p>Região:" + infoip.timezone + "</p> <br><p> Seu IP: "+infoip.client_ip+" </p> </div>"
             }else {
                section.innerHTML += "<div id='noite'> <p id='horaaqui'>Carregando...</p> <br> <br> <p>Região:" + infoip.timezone + "</p> <br> <br> <p> Seu IP: "+infoip.client_ip+" </p> </div>"
             }

           

            setInterval(function(){
                let aux = datacom.getSeconds();
                datacom.setSeconds(aux + 1);
                document.getElementById("horaaqui").innerHTML = datacom.getDate() + "/" + (datacom.getMonth() + 1) + "/" + datacom.getFullYear() + " - " + datacom.getHours() + ":" + datacom.getMinutes() + ":" + datacom.getSeconds();
            }, 1000);
               
            
        }
    }

    xhr.send();
}
loadhrasip()
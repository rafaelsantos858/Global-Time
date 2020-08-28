function loadtempo() {


    var xhr = new XMLHttpRequest()
    xhr.open('GET', "https://worldtimeapi.org/api/timezone", true)


    xhr.onreadystatechange = function () {

        if (this.status == 200 && this.readyState == 4) {
            const infotempo = JSON.parse(this.responseText)


            for (let i = 0; i < 12; i++) {

                var random = infotempo[Math.floor(infotempo.length * Math.random())];
                var section = document.querySelector("section")


                var xhr = new XMLHttpRequest()
                xhr.open('GET', "https://worldtimeapi.org/api/timezone/" + random, true)

                xhr.onreadystatechange = function () {


                    if (this.status == 200 && this.readyState == 4) {
                        const inforegiao = JSON.parse(this.responseText)

                        var date = inforegiao.datetime

                        let ano = date.substring(0, 4);
                        let mes = date.substring(5, 7);
                        let dia = date.substring(8, 10);


                        let hora = date.substring(11, 13);
                        let minutos = date.substring(14, 16);
                        let segundos = date.substring(17, 19);

                        let datacom = new Date(ano, (mes - 1), dia, hora, minutos, segundos);

                        console.log(hora);

                         if(hora > 06 && hora < 18){
                            section.innerHTML += "<div class='dia'> <div id='divregiao'><p>" + inforegiao.timezone + "</p> </div> <div  id='divhora'><p id='"+i+"'>Carregando ...</p> <br> <br></div></div>"
                         }else {
                            section.innerHTML += "<div class='noite'> <div id='divregiao'><p>" + inforegiao.timezone + "</p> </div> <div  id='divhora'><p id='"+i+"'>Carregando ...</p> <br> <br></div></div>"
                         }

                        

                        setInterval(function(){
                            let aux = datacom.getSeconds();
                            datacom.setSeconds(aux + 1);
                            var horafinal = datacom.getDate() + "/" + (datacom.getMonth() + 1) + "/" + datacom.getFullYear() + " <br> <br> " + datacom.getHours() + ":" + datacom.getMinutes() + ":" + datacom.getSeconds() 
                            document.getElementById(i).innerHTML = datacom.getDate() + "/" + (datacom.getMonth() + 1) + "/" + datacom.getFullYear() + " <br> <br> " + datacom.getHours() + ":" + datacom.getMinutes() + ":" + datacom.getSeconds();
                        }, 1000);

                        
                        
                    }
                }
                xhr.send();


            }


            

                
            
            

        }

    }
    xhr.send();


}
loadtempo()
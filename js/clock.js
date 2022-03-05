function clock() {
    let now = new Date();
    let horas = now.getHours();


    if((horas >=0) && (horas < 6)){
        $( "#clockDiv" ).addClass("madrugada")
            .append('<span>Ainda está acordado?</span>')
    }
    if((horas >=6) && (horas < 12)){
        $( "#clockDiv" ).addClass("manha")
            .append('<span>Bom dia!</span>')
    }
    if((horas >=12) && (horas < 18)){
        $( "#clockDiv" ).addClass("tarde")
            .append('<span>Boa Tarde!</span>')
    }
    if((horas >=18) && (horas < 24)){
        $( "#clockDiv" ).addClass("noite")
            .append('<span>Boa Noite!</span>')
    }
}
clock();

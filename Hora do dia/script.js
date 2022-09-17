function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var reshr = window.document.querySelector('div#reshr')
    var resimg = window.document.querySelector('img#img')
    var res = window.document.querySelector('div#res')
    reshr.innerHTML = `Agora são ${hora}:${minutos}`

    function noite() {
        res.innerHTML = `Boa noite!`
        resimg.src = 'img/noite.png'
        window.document.body.style.background = 'rgb(26, 25, 119)'
    }
    function tarde() {
        res.innerHTML = `Boa tarde!`
        resimg.src = 'img/tarde.png'
        window.document.body.style.background = 'rgb(236, 133, 65)'
    }
    function dia() {
        res.innerHTML = `Bom dia!`
        resimg.src = 'img/manha.png'
        window.document.body.style.background = 'rgb(223, 206, 59)'
    }
    function madrugada() {
        res.innerHTML = `Vai dormir!`
        resimg.src = 'img/noite.png'
        window.document.body.style.background = 'rgb(36, 36, 35)'
    }
    
    if (hora >= 18){
        noite()
    } else if(hora >= 12){
        tarde()
    } else if(hora >= 4){
        dia()
    } else {
        madrugada()
    }
    
}

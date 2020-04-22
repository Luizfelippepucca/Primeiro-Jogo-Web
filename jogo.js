function addbola(){
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");

    var p1 = Math.floor(Math.random()*400);
    var p2 = Math.floor(Math.random() *400);
    var idcor = Math.floor(Math.random()*4);
    var cores = ["orange","green","red","blue"];
    var cor = cores[idcor];
    bola.setAttribute("style","top:"+p1+"px;right:"+p2+"px;background-color:"+cor);
    bola.setAttribute("onclick", "estourar(this)");
    document.getElementById('jogo').appendChild(bola);
}
function estourar(elemento){
    document.getElementById('jogo').removeChild(elemento);
    document.getElementById('pontos').innerHTML++;
}
function clicou(){
    setInterval(addbola ,0750);
    //iniciar jogo na tela
}

function parar(pontos){
    window.location.href = window.location.href;
   var pontuação = document.getElementById('pontos').innerHTML;
   if (parar){
    alert( "Você marcou " +pontuação+ " pontos");
   }
}

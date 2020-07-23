function carregarUsuario(){

    var usuarioLogado = localStorage.getItem("user");
    if(!usuarioLogado){
        window.location="index.html";
    }else{
        var usuarioJson = JSON.parse(usuarioLogado);
        document.getElementById("dados").innerHTML=

        "<h6 id='nomeUsuario'>" + usuarioJson.nome + "</h6>" +
        "<br><h6>" + usuarioJson.email + "<br>" + 
        "Código: " + usuarioJson.id + "<br></h6>";
    
        document.getElementById("foto").innerHTML=
        "<img width='20%' alt='Imagem não encontrada' src=images/" + usuarioJson.foto + ">";
    
    }
}
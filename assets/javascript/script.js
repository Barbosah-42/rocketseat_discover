function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
    //if(html.classList.contains('light')){
    //html.classList.remove('light')
    //} else{
    //    html.classList.add('')
    //}

    // Pegar a tag img
    const img = document.querySelector("#profile img")

    // Substituir a imagem
    
    // Se tiver light mode, adicionar a imagem light 
    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/img/avatar-light.png")

    //se não manter a imagem normal
    }else{
        img.setAttribute("src", "./assets/img/avatar.png")
    }


}
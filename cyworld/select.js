function menuHome(){
    // alert("home")
    //innerText가 아니고 안에 있는 속성인 src를 바꿔줘야함. => setAttribute("a","b")
    //setAttribute("a","b") : a의 속성을 b로 바꿔줘!
    //.style ="" : 스타일 지정 가능
    document.getElementById("main").setAttribute("src","home.html")
    document.getElementById("navigation__home").style ="background-color: white; color: black"
    document.getElementById("navigation__game").style ="background-color: #298EB5; color: white"
    document.getElementById("navigation__jukebox").style ="background-color: #298EB5; color: white"
}

function menuGame(){
    // alert("game")
    document.getElementById("main").setAttribute("src","game.html")
    document.getElementById("navigation__game").style ="background-color: white; color: black"
    document.getElementById("navigation__home").style ="background-color: #298EB5; color: white"
    document.getElementById("navigation__jukebox").style ="background-color: #298EB5; color: white"
}

function menuJukebox(){
    // alert("Jukebox")
    document.getElementById("main").setAttribute("src","jukebox.html")
    document.getElementById("navigation__jukebox").style ="background-color: white; color: black"
    document.getElementById("navigation__home").style ="background-color: #298EB5; color: white"
    document.getElementById("navigation__game").style ="background-color: #298EB5; color: white"
}
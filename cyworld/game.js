function startWord() {
    //html에서 가져올때나 넣어줄 때는 document.getElement~~ 써주기
    const word = document.getElementById("word").innerText
    const lastword = word[word.length-1]
    //myword는 innerText가 없음. 입력한 값을 넘겨받아야함.
    //value가 input 태그에서 입력한 값임.
    const myword = document.getElementById("myword").value
    const firstword = myword[0]

    if(lastword === firstword){
        document.getElementById("result").innerText = "정답!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    }
    
    else{
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myword").value = ""
    }
}

function lotto(){
    const rd1 = Math.floor((Math.random()*45)+1)
    const rd2 = Math.floor((Math.random()*45)+1)
    const rd3 = Math.floor((Math.random()*45)+1)
    const rd4 = Math.floor((Math.random()*45)+1)
    const rd5 = Math.floor((Math.random()*45)+1)
    const rd6 = Math.floor((Math.random()*45)+1)
    
    document.getElementById("n1").innerText = rd1
    document.getElementById("n2").innerText = rd2
    document.getElementById("n3").innerText = rd3
    document.getElementById("n4").innerText = rd4
    document.getElementById("n5").innerText = rd5
    document.getElementById("n6").innerText = rd6
}
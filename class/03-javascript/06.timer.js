let aaa
        
function AuthNumber(){
    //aaa가 실행되고 있으면 Interval가 반복되고 있으면 없애줘라!
    clearInterval(aaa)

    const AuthNum = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("num").innerText = AuthNum

    let count = 5
    // Interval 하는 행동을 aaa라는 변수에 넣어줌
    aaa = setInterval( () => {
        let min = String(Math.floor(count/60)).padStart(2,"0")
        let sec = String(count%60).padStart(2,"0")
        if(count >= 0){
            
            document.getElementById("minutes").innerText = min
            document.getElementById("seconds").innerText = sec
            count = count - 1

            if(document.getElementById("seconds").innerText === "00"){
                document.getElementById("finishButton").setAttribute("disabled","true")
            }

            if(count < 59){
                document.getElementById("time").style="color:red"
            }
        }
    }, 1000)
}

function finish(){
    if(document.getElementById("num").innerText === document.getElementById("text").value){
        alert("인증완료!")
        clearInterval(aaa)
    }
    else{
        alert("다시 입력하세요")
    }
}
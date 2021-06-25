const getToken = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("authNumber").innerText = token
}
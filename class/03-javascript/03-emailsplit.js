const email = "codecamp@gmail.com"
// undefined
email.includes("@")
// true
email[0]
// "c"
email[1]
// "o"
email[2]
// "d"
email[3]
// "e"
email.split("@")
// (2) ["codecamp", "gmail.com"]
email.split("@")[0]
// "codecamp"
email.split("@")[1]
// "gmail.com"
let front = email.split("@")[0]
// undefined
const back = email.split("@")[1]
// undefined
front
// "codecamp"
back
// "gmail.com"
const newFront = []
// undefined
newFront.push(front[0])
// 1
newFront
// ["c"]
newFront.push(front[1])
// 2
newFront.push(front[2])
// 3
newFront.push(front[3])
// 4
newFront
// (4) ["c", "o", "d", "e"]
newFront.push("****")
// 5
newFront
// (5) ["c", "o", "d", "e", "****"]
newFront.pop()
// "****"
newFront.push("*")
// 5
newFront.push("*")
// 6
newFront.push("*")
// 7
newFront.push("*")
// 8
newFront
// (8) ["c", "o", "d", "e", "*", "*", "*", "*"]
newFront.join("")
// "code****"
const result = newFront.join("") + "@" + back
// undefined
result
// "code****@gmail.com"
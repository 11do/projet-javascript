const listeMots = ["Cachalot","Petunia","Serviette"]
let score=0

let mot = prompt("entre le mot " + listeMots[0])

if(mot=== listeMots[0]){
    score+=1
}

let secondMot = prompt("entrez le second mot " + listeMots[1])
switch(secondMot){
    case listeMots[1]:
        score+=1
        break
}


let thirdMot =  prompt("entrez le second mot " + listeMots[2])
switch(thirdMot){
    case listeMots[2]:
        score+=1
        break
}

console.log(score)

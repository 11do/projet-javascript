const listeMots = ["Cachalot","Petunia","Serviette"]
let score=0
for(let i = 0; i < 3; i++){
  let mot = prompt("entre le mot " + listeMots[i])

  if(mot=== listeMots[i]){
    score+=1
  }

}
console.log(score)

let listePhrases = ["pas de panique!","La vie, l'univers et le reste","Merci pour le poisson"]

let mot = prompt("veuillez entrer la liste de mot que vous voulez "+ "mots ou phrases")
while(mot!== "mots" && mot !== "phrases"){
    mot = prompt("veuillez entrer la liste de mot que vous voulez "+ "mots ou phrases")  
}
if (mot === "mots"){
    for(let i = 0; i < 3; i++){
        let mot1 = prompt("entre le mot " + listeMots[i])
      
        if(mot1=== listeMots[i]){
            score+=1
          
        }
    
    }

}else{
     
    for(let j = 0; j < 3; j++){
        let mot2 = prompt("entre le mot " + listePhrases[j])
      
        if(mot2=== listePhrases[j]){
          score+=1
        }    
    }   
    


     
}
console.log(score)


function afficherResultat(score,nombresTotal){
  console.log("votre resultat est " + score + "sur "+ nombresTotal)
}

function choisirPhrasesOuMots(){
  let mot = prompt("veuillez entrer la liste de mot que vous voulez "+ "mots ou phrases")
while(mot!== "mots" && mot !== "phrases"){
    mot = prompt("veuillez entrer la liste de mot que vous voulez "+ "mots ou phrases")  
}
return mot
}

function lancerBoucleDejeu(listep){
 
    for(let i = 0; i < 3; i++){
        let mot1 = prompt("entre le mot " + listep[i])
      
        if(mot1=== listep[i]){
            score+=1
          
        }
    
    }
    return score

}


function lancerJeu(){
  let mot = choisirPhrasesOuMots()
  let score = 0
  let nombresTotal=0

  if (mot === "mots"){
    score = lancerBoucleDejeu(listeMots)
    nombresTotal = listeMots.length 
  } else{
    score = lancerBoucleDejeu(listePhrases)
    nombresTotal = listePhrases.length
  }

  afficherResultat(score,nombresTotal)
}



     


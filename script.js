let isFiguri= true

function changeCard(event){
 const card = event.currentTarget
 const backgroundImage = isFiguri 
 ?"copa"
 : "figurinha"
 isFiguri = !isFiguri
 card.style.backgroundImage = `url(./assets/${backgroundImage}.svg)`

}
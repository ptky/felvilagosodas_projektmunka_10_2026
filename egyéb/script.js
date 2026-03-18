let max = 0
function like_add() {
    if (max > 0) {
        window.alert("Ezt már likeoltad!")
    }
    else {
        max+=1
        aktualis = document.getElementById("likeCount").innerText
        document.getElementById("likeCount").innerText = parseInt(aktualis) + 1
    }
    
    
}
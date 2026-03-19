let max = 0
let max2 = 0
let max3 = 0
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
function like_add2() {
    if (max2 > 0) {
        window.alert("Ezt már likeoltad!")
    }
    else {
        max2+=1
        aktualis = document.getElementById("likeCount2").innerText
        document.getElementById("likeCount2").innerText = parseInt(aktualis) + 1
    }
    
    
}
function like_add3() {
    if (max3 > 0) {
        window.alert("Ezt már likeoltad!")
    }
    else {
        max3+=1
        aktualis = document.getElementById("likeCount3").innerText
        document.getElementById("likeCount3").innerText = parseInt(aktualis) + 1
    }
    
    
}

function washington() {
    let story = document.getElementById("washington_story")
    story.style.display = "block";
}
function napoleon() {
    let story = document.getElementById("napoleon_story")
    story.style.display = "block";
}

function hide_story() {
    let story = document.getElementById("washington_story")
    story.style.display = "none";
}

function hide_story_napoleon() {
    let story = document.getElementById("napoleon_story")
    story.style.display = "none";
}
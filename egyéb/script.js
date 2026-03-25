let likeolva = {
    1: false,
    2: false,
    3: false
};
function like_add(number) {
    if (likeolva[number])  {
        window.alert("Ezt már likeoltad!")
    }
    else {
        let elem = document.getElementById(`likeCount${number}`);
        let aktualis = parseInt(elem.innerText);
        elem.innerText = aktualis + 1;
        likeolva[number] = true

    }
    
    
}

function open_story(adat) {
    let story = document.getElementById(adat)
    story.style.display = "block";
}

function close_story(adat) {
    let story = document.getElementById(adat)
    story.style.display = "none";
}
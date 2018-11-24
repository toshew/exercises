var indeksSlike = 1;

function prethodna() {
    if (indeksSlike == 1) {
        indeksSlike = 6;
    } else {
        indeksSlike--;
    }
    document.getElementById('dog').src = 'images/' + indeksSlike + '.jpg';
}

function sledeca() {
    if (indeksSlike == 6) {
        indeksSlike = 1;
    } else {
        indeksSlike++;
    }
    document.getElementById('dog').src = 'images/' + indeksSlike + '.jpg';
}
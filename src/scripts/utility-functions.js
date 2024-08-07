function shuffle(arrayParam) {
    let array = [...arrayParam]; // makes array copy
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

function getProductArrayLocation(id, productList) {
    for (let i = 0; i < productList.length; i++) {
        if (id == productList[i].id) {
            return i;
        }
    }
    return -1;
}


export { shuffle, getProductArrayLocation };
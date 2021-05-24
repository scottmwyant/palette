const main = document.getElementsByTagName('main')[0];

const pathname = (function(){

    return window.location.origin == "https://scottmwyant.github.io" ? 
        window.location.href.replace("https://scottmwyant.github.io/palette/pages/", "").replace(".html", "") :
        window.location.pathname.replace('/pages/','').replace('.html', '');

})();

console.log(pathname);


window.myPalette[pathname].forEach(color => {

    const card = main.appendChild(document.createElement('section'));
    card.style.background = color.hex;
    if (color.fontColor != undefined) {
        card.style.color = color.fontColor;
    }

    const pStore = card.appendChild(document.createElement('p'));
    pStore.classList = "id";
    pStore.textContent = color.id;
    
    if(typeof color.whereUsed == 'string'){
        const pHover = card.appendChild(document.createElement('p'));
        pHover.classList = "whereUsed";
        pHover.textContent = color.whereUsed;
    }

    const pName = card.appendChild(document.createElement('p'));
    pName.classList = "name";
    pName.textContent = color.name;

})

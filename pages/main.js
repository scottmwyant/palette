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

    const fill = card.appendChild(document.createElement('div'));
    fill.style.background = color.hex;
    fill.classList="fill"

    const pStore = card.appendChild(document.createElement('p'));
    pStore.classList = "id";
    pStore.textContent = color.id;
    
    const whereUsedList = card.appendChild(document.createElement('ul'));
    
    let arr = [];
    if(Array.isArray(color.whereUsed)){
        arr = color.whereUsed;
    }
    else if(typeof color.whereUsed == 'string'){
        arr = [color.whereUsed];
    }

    arr.forEach(element => {
        const whereUsedItem = whereUsedList.appendChild(document.createElement('li'));
        whereUsedItem.textContent = element;
    });

    const pName = card.appendChild(document.createElement('p'));
    pName.classList = "name";
    pName.textContent = color.name;

})

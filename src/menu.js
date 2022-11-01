const menuPage = () => {

    //Photo by <a href="https://unsplash.com/@jonathanborba?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonathan Borba</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

    let parentDiv = document.getElementById('content');
    parentDiv.removeChild(parentDiv.lastElementChild);

    const divC = document.createElement('div');
    divC.classList.add('copy');
    content.appendChild(divC);

    const img = document.createElement('img');
    img.src= "imgs/menu.jpg";
    divC.appendChild(img);

    const text = document.createElement('div');
    text.classList.add('text');
    divC.appendChild(text);
    text.innerText= `If we had a menu, it would go here.
    
    We would offer a variety of espresso, pour over, and cold brew roasts.
    We would also offer lattes, cappucinos, and chai teas.
    
    Our food selection would include:
    Madeleine cookies
    Seasonal scones
    Fresh-baked pastries`
}

export default menuPage
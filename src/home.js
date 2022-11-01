const homePage = () => {

    //Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

    let parentDiv = document.getElementById('content');
    parentDiv.removeChild(parentDiv.lastElementChild);


    const divC = document.createElement('div');
    divC.classList.add('copy');
    content.appendChild(divC);

    const img = document.createElement('img');
    img.src= "imgs/coffee.jpg";
    divC.appendChild(img);

    const text = document.createElement('div');
    text.classList.add('text');
    divC.appendChild(text);
    text.innerText= `Coffee House is a fictional place, but a tangible memory.

    The scent of freshly brewed coffee, the feeling of a warm ceramic mug in your hands, and the sound of nondescript but soothing lofi jazz weaving amongst the murmurs of conversations creates a cozy atmosphere you can conjure up at any moment.

    Here at Coffee House,  we offer the finest amalgamation of every coffee shop you've ever visited.
    `
}

export default homePage
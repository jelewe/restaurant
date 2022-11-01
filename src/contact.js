const contactPage = () => {
    //Photo by <a href="https://unsplash.com/@nputra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nafinia Putra</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

    let parentDiv = document.getElementById('content');
    parentDiv.removeChild(parentDiv.lastElementChild);

    const divC = document.createElement('div');
    divC.classList.add('copy');
    content.appendChild(divC);

    const img = document.createElement('img');
    img.src= "imgs/contact.jpg";
    divC.appendChild(img);

    const text = document.createElement('div');
    text.classList.add('text');
    divC.appendChild(text);
    text.innerText= `Visit us at the following locations:

    Your Dreams,  Temporo-Parieto-Occipital Area
    Involuntary Memory, The Hippocampus`;
}

export default contactPage
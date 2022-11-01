const pageLoader = () => {
    const content = document.getElementById('content');
    const divH = document.createElement('div');
    divH.classList.add('header');
    content.appendChild(divH);
    divH.innerText= "Coffee House";

    const nav = document.createElement('div');
    nav.classList.add('nav');
    divH.appendChild(nav);

    const h = document.createElement('div');
    h.classList.add('tab');
    h.setAttribute('id','home');
    h.innerText = "Home";
    nav.appendChild(h);

    const m = document.createElement('div');
    m.classList.add('tab');
    m.setAttribute('id','menu');
    m.innerText = "Menu";
    nav.appendChild(m);

    const c = document.createElement('div');
    c.classList.add('tab');
    c.setAttribute('id','contact');
    c.innerText = "Contact";
    nav.appendChild(c);

    const divC = document.createElement('div');
    divC.classList.add('copy');
    content.appendChild(divC);
    divC.innerText= "Coffee House is a fictional place, but a tangible feeling."

}

export default pageLoader;
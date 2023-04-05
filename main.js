/* Making the nav bar work */
const toggleBtn = document.querySelector('.btn__toggle');
const linkContainer = document.querySelector('.links__container');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', ()=>{
    // linkContainer.classList.toggle('show__links');
    const linkContainerHeight = linkContainer.getBoundingClientRect().height;
    // console.log(linkContainerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);

    if(linkContainerHeight === 0){
        linkContainer.style.height = `${linksHeight}px`;
        // console.log(linkContainerHeight);
    }else{
        linkContainer.style.height = 0;
    }
});


/* Making the date dynamic for copyright */
const copyrightDate = document.getElementById('year');
let date = new Date();
let year = date.getFullYear();
// console.log(year);
copyrightDate.innerText = `${year}.`;


/* Making the header sticky  & show to top button*/

const navbar = document.querySelector('.navbar');
const topBtn = document.querySelector('.top__btn');
console.log(topBtn);

window.addEventListener('scroll',()=>{
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log(navHeight);
    const scrollHeight = window.pageYOffset;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed');
    }else{
        navbar.classList.remove('fixed');
    }

    if(scrollHeight > 100){
        topBtn.classList.add('show');
    }else{
        topBtn.classList.remove('show');
    }
})


/*======================= SMOOTH SCROLL ===================== */

const scrollLinks = document.querySelectorAll('.scroll-link');
// console.log(scrollLinks);

scrollLinks.forEach((scrollLink)=>{
    scrollLink.addEventListener('click',(e)=>{
        e.preventDefault(); // prevents from default work of link..

        //navigatig to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        //getting the heights 
        const navHeight = navbar.getBoundingClientRect().height;
        const linkContainerHeight = linkContainer.getBoundingClientRect().height;
        const FixedNav = navbar.classList.contains('fixed');
        let position = element.offsetTop - navHeight;

        if(!FixedNav){
            position -= navHeight;
        }
        if(navHeight > 82){
            position += linkContainerHeight;
        }

        window.scrollTo(
            {
                left:0,
                top:position
            }
        )
        linkContainer.style.height = 0;
    })
})
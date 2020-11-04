const reviews = [
    {
        id:1,
        name:'Zayn Malik',
        job:'Singer Song-writer',
        img:'me.jpg',
        text:"Zain Javadd Malik (/ˈmælɪk/; born 12 January 1993), known mononymously as Zayn, is an English singer and songwriter. Born and raised in Bradford, Malik auditioned as a solo contestant for the British music competition The X Factor in 2010."
    },


    {
        id:2,
        name:'Saif',
        job:'Web developer',
        img:'me.jpg',
        text:"Will let you know later, busy right now !"
    },

    {
        id:3,
        name:'Zayn Malik',
        job:'Singer Song-writer',
        img:'me.jpg',
        text:"Zain Javadd Malik (/ˈmælɪk/; born 12 January 1993), known mononymously as Zayn, is an English singer and songwriter. Born and raised in Bradford, Malik auditioned as a solo contestant for the British music competition The X Factor in 2010."
    },


    {
        id:4,
        name:'Saif',
        job:'Web developer',
        img:'me.jpg',
        text:"Will let you know later, busy right now !"
    },
]

//select items
const img=document.getElementById('person-img');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');

const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');
const randomBtn=document.querySelector('.random-btn');

//set starting item

let currentItem=0;

//load initial item
window.addEventListener('DOMContentLoaded',function()
{
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
})

//show person based on item
function showPerson(person)
{
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

// show next person

nextBtn.addEventListener('click',function()
{
    currentItem++;
    if(currentItem>reviews.length-1)
    {
        currentItem=0;
    }
    showPerson(currentItem);
})

// show prev person

prevBtn.addEventListener('click',function()
{
    currentItem--;
    if(currentItem<0)
    {
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})

// random btn 

randomBtn.addEventListener('click',function()
{
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
})
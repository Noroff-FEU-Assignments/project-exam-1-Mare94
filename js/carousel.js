const caroContainer = document.querySelector(".caro-slide", "current-slide");
const caroContainerTwo = document.querySelector(".caro-slide2", "current-slide");
const caroContainerThee = document.querySelector(".caro-slide3", "current-slide");
const caroContainerFour = document.querySelector(".caro-slide4", "current-slide");

// API call url
let caroUrl = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wp/v2/posts";

//Function calling posts from API

// slide 1

async function getPostData(){
    try{
        const response = await fetch(caroUrl);
        const data = await response.json();

        console.log(data);

        for(let i = 0; i < 1; i++){

            

            caroContainer.innerHTML += `
                                            <div class="caro-slide">
                                            <a href="detail.html?id=${data[0].id}"> 
                                                <h3>${data[0].title.rendered} :</h3>
                                                <h4>${data[0].excerpt.rendered}</h4>
                                                <h4>${data[0].date}</h4>
                                            </a>
                                            
                                                                              
                                        `

        };
        

    }
    catch(error){

    }

};

getPostData();


async function getPostDataTwo(){
    try{
        const response = await fetch(caroUrl);
        const data = await response.json();

        console.log(data);

        for(let i = 1; i < 2; i++){

            

            caroContainerTwo.innerHTML += `
                                            <div class="caro-slide2">
                                            <a href="detail.html?id=${data[1].id}"> 
                                                <h3>${data[1].title.rendered} :</h3>
                                                <h4>${data[1].excerpt.rendered}</h4>
                                                <h4>${data[1].date}</h4>
                                            </a>
                                            
                                                                              
                                        `

        };
        

    }
    catch(error){

    }

};

getPostDataTwo();

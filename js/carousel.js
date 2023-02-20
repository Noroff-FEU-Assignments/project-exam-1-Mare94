const caroContainer = document.querySelector(".caro-slide", "current-slide");

// API call url
const caroUrl = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wp/v2/posts";

//Function calling posts from API

// slide 1

async function getPostData(){
    try{
        const response = await fetch(caroUrl);
        const data = await response.json();

        console.log(data);

        for(let i = 0; i < 4; i++){


            

            caroContainer.innerHTML += `
                                            <div class="caro-slide">
                                            <a href="detail.html?id=${data[i].id}"> 
                                                <h3>${data[i].title.rendered} :</h3>
                                                <h4>${data[i].excerpt.rendered}</h4>
                                                <h4>${data[i].date}</h4>
                                            </a>
                                            </div>
                                            
                                                                              
                                        `

        };

    }
    catch(error){

    }

};

getPostData();

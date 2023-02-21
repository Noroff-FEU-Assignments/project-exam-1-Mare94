const postContainer = document.querySelector(".post-container");

// API call url
const url = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wp/v2/posts?per_page=20";

//Function calling posts from API


async function getPostData(){
    try{
        
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        for(let i = 0; i < 20; i++){



            postContainer.innerHTML += `<div class="blog-post">

                                            <a href="detail.html?id=${data[i].id}"> 
                                                <h3>${data[i].title.rendered}</h3>
                                                <h4>${data[i].excerpt.rendered}</h4>
                                                <h4>${data[i].date}</h4>
                                            </a>
                                        </div>`

        }

    }
    catch(error){

    }

};

getPostData();
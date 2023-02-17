const postContainer = document.querySelector(".post-container")

// API call url
const url = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wp/v2/posts";

//Function calling posts from API

async function getPostData(){
    try{
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

    }
    catch(error){

    }

};

getPostData();
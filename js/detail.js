const detailContainer = document.querySelector(".blog-detail");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const urlName = params.get("id");

const url = "https://powerofflower.online/cms-ma1/flower-power/wordpress/wp-json/wp/v2/posts/";

const detailUrl = url + urlName;



async function getPostDetail(){
    try{

        const response = await fetch(detailUrl);
        const detail = await response.json();

        console.log(detail);



    }
    catch(error){
        console.log("An error has occured");
    }
}

getPostDetail();
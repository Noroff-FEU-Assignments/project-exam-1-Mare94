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

        createHtml(detail)

    }
    catch(error){
        console.log("An error has occured");
    }
}

getPostDetail();

function createHtml(detail){
    
    detailContainer.innerHTML +=  `
                                        <div class="details">
                                            <h1>${detail.title.rendered}</h1>
                                            <h2>${detail.content.rendered}</h2>
                                            <h3>${detail.date_gmt}</h3>
                                        </div>
        
        
        
                                      `;
}
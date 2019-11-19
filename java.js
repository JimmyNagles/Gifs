

let gifsApi = "https://api.giphy.com/v1/gifs/search?api_key=E6gg5fTXtBho66u0GtHPRGBLgNap40y7&q=cat&limit=25&offset=0&rating=G&lang=en"

$.ajax({
 url: gifsApi,
 method: "GET"
}).then(function(response){


console.log("succes",response.data)


var gifsArray = response.data



for (let x = 0; x < gifsArray.length; x++) {
    
    
    let gifLink = response.data[x].embed_url
    let rating= response.data[x].rating
    let tittle= response.data[x].title


console.log("R",rating)
console.log("link",gifLink)
console.log("tittle",tittle)

$("#titulo").text(tittle)

//titulo
//rating
//<i class="right" id="rating"></i>


}








});



function addImgToScreen(){ 

    




}


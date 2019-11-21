$(document).ready(function () {
    
    $(document).on("click", ".gif-class", function () {
    
    
    
        buttonGif = $(this).text();
        GifAPICall();




       


        console.log(buttonGif)



        
$("gifDiv").append()

    })

    let buttonGif;

    function GifAPICall() {

        let gifsApi = "https://api.giphy.com/v1/gifs/search?api_key=E6gg5fTXtBho66u0GtHPRGBLgNap40y7&q=" + buttonGif + "&limit=25&offset=0&rating=G&lang=en"

        $.ajax({
            url: gifsApi,
            method: "GET"
        }).then(function (response) {

            console.log("succes", response.data)

            var gifsArray = response.data

            // creatingBtn();
            


            for (let x = 0; x < gifsArray.length; x++) {
               

                let gifLink = response.data[x].images.downsized.url;
                let rating = response.data[x].rating
                let tittle = response.data[x].title
        
                console.log(gifLink, rating, tittle)
    
               
                
              $('#gifDiv').append('<div class="col s6 m4 l3 text-white">' + '<div class="card black">'+'<div class="card-image ">' +'<img src="' + gifLink+ '"></div>'+'<span class="card-title black white-text">'+ tittle+'</span>' +'</div>'+'</div>');
        

            }

        });

    }





});






// btn creating function

$("#search-btn").on("click", function () {

    let pullGif = $("#gifSearch").val().trim();


    console.log("working", pullGif);



    $("#botones").append(' <a class="btn-floating btn-large waves-effect waves-light black gif-class">' + pullGif + '</a>')





});

function showGifs(){


    




}
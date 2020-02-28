$(document).ready(function () {

    $(document).on("click",".gif", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });


    $(document).on("click", ".gif-class", function () {


        $("#gifDiv").empty();
        buttonGif = $(this).text();
        GifAPICall();
        console.log(buttonGif)
        $("gifDiv").append()
    })

    let buttonGif;

    function GifAPICall() {

        let gifsApi = "https://api.giphy.com/v1/gifs/search?api_key=E6gg5fTXtBho66u0GtHPRGBLgNap40y7&q=" + buttonGif + "&limit=11&offset=0&rating=G&lang=en"

        $.ajax({
            url: gifsApi,
            method: "GET"
        }).then(function (response) {

            console.log("succes", response.data)

            var gifsArray = response.data

            // creatingBtn();



            for (let x = 0; x < gifsArray.length; x++) {


                let gifStill = gifsArray[x].images.fixed_height_still.url;
                let gifAnimated=gifsArray[x].images.downsized.url;
                let rating = gifsArray[x].rating
                let tittle = gifsArray[x].title

                console.log("still",gifStill,"rating", rating,"tittle", tittle,"animated", gifAnimated)


                // Creating a div for the gif
                var gifDiv = $("<div class='col s6 m4 l4 text-white '>");

                

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);

                // Creating an image tag
                var gifImage = $("<img class='gif'>");
                //creat an tittle tag
                var t= $("<p>").text("tittle " + tittle);

                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                gifImage.attr("src", gifStill);
                gifImage.attr("data-still", gifStill);
                gifImage.attr("data-animate", gifAnimated);
                gifImage.attr("data-state", "still");

                // Appending the paragraph and gifImage we created to the "gifDiv" div we created
                gifDiv.append(gifImage);
                gifDiv.append(p);
                gifDiv.append(t)

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifDiv").prepend(gifDiv);
                
            }
            // $('#gifDiv').append( + '<div class="card black">' + '<div class="card-image ">' + '<img width="200" height="200" src="' + gifStill + '"></div>' + '<span class="card-title black white-text">' + x + '</span>' + '. ' + '<span class="card-title black white-text">' + tittle + '</span>' + '</div>' + '</div>');


        });

    }

    


});



let gifsArray = ["lion", "tiger", "panter"]


// btn creating function

$("#search-btn").on("click", function () {

    let pullGif = $("#gifSearch").val().trim();
    
    gifsArray.push(pullGif)
    
    console.log(gifsArray)
    
    $("#gifSearch").val("");
    $("#botones").empty();

    gifsArray.forEach(x =>
        $("#botones").append(' <a class="btn-floating btn-large waves-effect waves-light black gif-class">' + x + '</a>')

    )







    console.log("working", pullGif);




});

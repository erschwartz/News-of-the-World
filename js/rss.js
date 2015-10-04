var urlSTR;
var temp;
var map;
var markers = [];
var markerCount=0;
var infoGlobal=null;
var windowFlag=0;
var moreResults;
function initMap() {
    var uluru = {lat: 25.2916097, lng: -107.2902839};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: uluru,
        styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]
    });


                    // click on search button to search.

                    $(".myButton").on('click', function () {


                     deleteMarkers(); 
                     var str=$("#search").val();
                     var arr=str.split(" ");
                     var urlParam="";
                     for(i=0; i<arr.length;i++){
                        if(i>1){
                            urlParam+='%20';
                        }
                        urlParam+=arr[i];
                    }
                    urlSTR = 'https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q='+urlParam+'&rsz=8';
                    $.ajax({
                        url: 'http://sleepy-sierra-9008.herokuapp.com/', //http://localhost:8080/
                        type: "POST",
                        data: urlSTR,
                        //http://rss.nytimes.com/services/xml/rss/nyt/World.xml
                        //http://feeds.bbci.co.uk/news/rss.xml?edition=int
                        //http://america.aljazeera.com/content/ajam/articles.rss
                        //http://feeds.reuters.com/Reuters/worldNews
                        success: function (data) {

                            //console.log(JSON.stringify(eval('(' + data + ')')));
                            data = JSON.stringify(eval('(' + data + ')'));
                            data = JSON.parse(data);
                            $("#feed").empty();
                            if (data.responseData === null) {
                                $("#feed").append("<center><h1 style='color: #999999;'>Error! Please try your search again!</h1>");
                            } else {
                                moreResults = data.responseData.cursor.moreResultsUrl;
                                data.responseData.results.forEach(function (d) {
                                    var randomLat = (Math.floor(Math.random() * 7) + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                                    var randomLng = (Math.floor(Math.random() * 7) + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                                    var link = d.unescapedUrl;
                                    var title = d.title;
                                    var content = d.content;
                                    var publisher = d.publisher;
                                    $("#feed").append("<div class = 'feed-cell'><a href='"+link+"' target='_blank'><h1>"+title+"</h1><p>"+content+"</p><h3>"+publisher+"   <button type='button' class='myButton' id='link-go' style='color: rgb(193,39,45) !important'><center><span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span></center></button></h3></a></div>");
                                    addMarker( {lat: 43.0759678 + randomLat, lng: -107.2902839 + randomLng}, '', link, title, d.content);
                                });
$("#feed").append("<center><a href='"+moreResults+"' target='_blank'><div class = 'more-button'><button type = 'button' id = 'my-more-button'><h4>Show me more!</h4></button></div></a></center>");
}

},
failure: function (err) {
    $("#feed").append("<center><h1 style='color: #999999;'>Error! Please try your search again!</h1>");
}
});
});


function addMarker(location,source, link, title, description) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);               
    var infowindow = new google.maps.InfoWindow({
        content: "<a href='" + link + "'>" + title + "</a>"
    });


    marker.addListener('click', function () {
        if(infoGlobal=== null){
            infoGlobal=infowindow;
        }
        else{
            infoGlobal.close();
            infoGlobal=infowindow;
        }

        infowindow.open(map, marker);
    });

}

            // Sets the map on all markers in the array.
            function setMapOnAll(map) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }

                // Removes the markers from the map, but keeps them in the array.
                function clearMarkers() {
                    setMapOnAll(null);
                }

                // Deletes all markers in the array by removing references to them.
                function deleteMarkers() {
                    clearMarkers();
                    markers = [];
                }

                // Shows any markers currently in the array.
                function showMarkers() {
                    setMapOnAll(map);
                }


            } // -----------------------------------------------END OF INIT--------------------------------------




            (function ($) {
                $(document).ready(function() {
                    $("#africa")        .mouseenter( function() {
                        map.panTo({lat: 6.309630, lng: 22.637847});
                        map.setZoom(3);
                    });
                    $("#asia")          .mouseenter( function() {
                        map.panTo({lat: 37.975641, lng: 75.551522});
                        map.setZoom(3);
                    });
                    $("#australia")     .mouseenter( function() {
                        map.panTo({lat: -25.981453, lng: 134.701913});
                        map.setZoom(3);
                    });
                    $("#europe")        .mouseenter( function() {
                        map.panTo({lat: 48.557560, lng: 16.489022});
                        map.setZoom(3);
                    });
                    $("#northAmerica")  .mouseenter( function() {
                        map.panTo({lat: 39.209689, lng: -98.696382});
                        map.setZoom(3);
                    });
                    $("#southAmerica")  .mouseenter( function() {
                        map.panTo({lat: -13.350834, lng: -58.913030});
                        map.setZoom(3);
                    });
                    $("#world")         .mouseenter( function() {
                        map.setCenter({lat: 41.329716, lng: 0.751057});
                        map.setZoom(2);
                    });

                });
}(jQuery));

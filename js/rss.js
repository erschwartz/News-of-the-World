
            var temp;
            
            var map;
            function initMap() {
                var uluru = {lat: 25.2916097, lng: -107.2902839};
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: uluru,
                    styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]
                });


					// click on search button to search.

					$(".myButton").on('click', function () {
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

                            console.log(JSON.stringify(eval('(' + data + ')')));
                            data = JSON.stringify(eval('(' + data + ')'));
                            data = JSON.parse(data);
                            $("#feed").empty();

                            data.responseData.results.forEach(function (d) {
                                console.log(d);
                                //content
                                //publisher
                                //title
                                //url

                                var link = d.unescapedUrl;
                                var title = d.title;
                                var content = d.content;
                                var publisher = d.publisher;
                                $("#feed").append("<div class = 'feed-cell'><a href='"+link+"' target='_blank'><h1>"+title+"</h1><p>"+content+"</p><h3>"+publisher+"   <button type='button' class='myButton' id='link-go' style='color: rgb(193,39,45) !important'><center><span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span></center></button></h3></a></div>");
                            });

                        },
                        failure: function (err) {
                            console.log(err);
                        }
                    });
                });



            } // -----------------------------------------------END OF INIT--------------------------------------




            (function ($) {
    $(document).ready(function() {
        $("#africa")		.mouseenter( function() {
            map.panTo({lat: 6.309630, lng: 22.637847});
            map.setZoom(3);
        });
        $("#asia")			.mouseenter( function() {
            map.panTo({lat: 37.975641, lng: 75.551522});
            map.setZoom(3);
        });
        $("#australia")		.mouseenter( function() {
            map.panTo({lat: -25.981453, lng: 134.701913});
            map.setZoom(3);
        });
        $("#europe")		.mouseenter( function() {
            map.panTo({lat: 48.557560, lng: 16.489022});
            map.setZoom(3);
        });
        $("#northAmerica")	.mouseenter( function() {
            map.panTo({lat: 39.209689, lng: -98.696382});
            map.setZoom(3);
        });
        $("#southAmerica")	.mouseenter( function() {
            map.panTo({lat: -13.350834, lng: -58.913030});
            map.setZoom(3);
        });
        $("#world")			.mouseenter( function() {
            map.setCenter({lat: 41.329716, lng: 0.751057});
            map.setZoom(1);
        });

    });
}(jQuery));






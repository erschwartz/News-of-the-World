			var urlSTR;
            var temp;
            var map;
            var markers = [];
            var markerCount=0;
            var infoGlobal=null;
            var windowFlag=0;
            function initMap() {
                var uluru = {lat: 25.2916097, lng: -107.2902839};
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: uluru
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
                                var randomLat = (Math.floor(Math.random() * 7) + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                                var randomLng = (Math.floor(Math.random() * 7) + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                                var description=d.content;

                                $("#feed").append("<p><a href='" + link + "'>" + title + "</a></br></p>");

                                addMarker( {lat: 43.0759678 + randomLat, lng: -107.2902839 + randomLng}, 'The New York Times', link, title, description);



                            });

                        },
                        failure: function (err) {
                            console.log(err);
                        }
                    });
                });


				// Sets the map on all markers in the array.
				function setMapOnAll(map) {
  					for (var i = 0; i < markers.length; i++) {
    					markers[i].setMap(map);
  						}
				}



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
        //6.309630, 22.637847
        $("#africa").click( function() {
            map.setCenter({lat: 6.309630, lng: 22.637847});
            map.setZoom(3);
        });
//37.975641, 75.551522
        $("#asia").click( function() {
            map.setCenter({lat: 37.975641, lng: 75.551522});
            map.setZoom(3);
        });
//-25.981453, 134.701913
        $("#australia").click( function() {
            map.setCenter({lat: -25.981453, lng: 134.701913});
            map.setZoom(3);
        });
//48.557560, 16.489022
        $("#europe").click( function() {
            map.setCenter({lat: 48.557560, lng: 16.489022});
            map.setZoom(3);
        });
//39.209689, -98.696382
        $("#northAmerica").click( function() {
            map.setCenter({lat: 39.209689, lng: -98.696382});
            map.setZoom(3);
        });
//-13.350834, -58.913030
        $("#southAmerica").click( function() {
            map.setCenter({lat: -13.350834, lng: -58.913030});
            map.setZoom(3);
        });
        //41.329716, 0.751057
        $("#world").click( function() {
            map.setCenter({lat: 41.329716, lng: 0.751057});
            map.setZoom(1);
        });

    });
}(jQuery));






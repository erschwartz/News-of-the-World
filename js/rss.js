
            var temp;

            function initMap() {
                var uluru = {lat: 25.2916097, lng: -107.2902839};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: uluru
                });


              

                /*
                 * New York Times
                 * c3052c2ffab4824b8940766896f7b472:5:73125278
                 * http://api.nytimes.com/svc/news/v3/content/all/all?api-key=b186b297e3b89da2dc0d95f85fc7bf51:1:73125278
                 * 
                 * 
                 * 
                 * http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?country_code=US&api-key=4c9c87d9ce15a03be757c3353d7b029b:3:73125278
                 * 
                 */

                var urlSTR = 'http://america.aljazeera.com/content/ajam/articles.rss'  //'http://api.nytimes.com/svc/news/v3/content.xml/all/all?api-key=b186b297e3b89da2dc0d95f85fc7bf51:1:73125278';

                //'http://api.nytimes.com/svc/semantic/v2/geocodes/query.json?country_code=US&api-key=4c9c87d9ce15a03be757c3353d7b029b:3:73125278';

                $.ajax({
                    url: 'http://sleepy-sierra-9008.herokuapp.com/', //http://localhost:8080/
                    type: "POST",
                    data: urlSTR,
                    //http://rss.nytimes.com/services/xml/rss/nyt/World.xml
                    //http://feeds.bbci.co.uk/news/rss.xml?edition=int
                    //http://america.aljazeera.com/content/ajam/articles.rss
                    //http://feeds.reuters.com/Reuters/worldNews
                    success: function (data) {
                        //console.log(data);
                        /*
                         * data.results
                         * aljazeera
                         // doha Qatar
                         // Latitutde: 25.2916097
                         // long : 51.5304368
                         */

                        $(data).find("item").each(function () {
                            var title = $(this).find("title").text();
                            var link = $(this).find("guid").text();
                            var description = $(this).find("description").text();
                            var randomLat = Math.floor(Math.random() * 6) + 1;
                            var randomLng = Math.floor(Math.random() * 6) + 1;
                            var marker = new google.maps.Marker({
                                position: {lat: 25.2916097 + randomLat, lng: 51.5304368 + randomLng},
                                map: map,
                                title: 'Al Jazeera'
                                        //icon: iconBase + 'schools_maps.png' 

                            });

                            var infowindow = new google.maps.InfoWindow({
                                content: "<a href='" + link + "'>" + title + "</a>"
                            });
                            marker.addListener('click', function () {
                                infowindow.open(map, marker);
                            });

                            $("#feed").append("<a href='" + link + "'>" + title + "</a></br>");

                        });

                    },
                    failure: function (err) {
                        console.log(err);
                    }
                });


                urlSTR = 'http://feeds.bbci.co.uk/news/rss.xml?edition=int';
                $.ajax({
                    url: 'http://sleepy-sierra-9008.herokuapp.com/', //http://localhost:8080/
                    type: "POST",
                    data: urlSTR,
                    //http://rss.nytimes.com/services/xml/rss/nyt/World.xml
                    //http://feeds.bbci.co.uk/news/rss.xml?edition=int
                    //http://america.aljazeera.com/content/ajam/articles.rss
                    //http://feeds.reuters.com/Reuters/worldNews
                    success: function (data) {

                        $(data).find("item").each(function () {
                            var title = $(this).find("title").text();
                            var link = $(this).find("guid").text();
                            var description = $(this).find("description").text();
                            var randomLat = (Math.floor(Math.random() * 7) + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                            var randomLng = (Math.floor(Math.random() * 7) + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                            var marker = new google.maps.Marker({
                                position: {lat: 47.162494 + randomLat, lng: 19.503304 + randomLng},
                                map: map,
                                title: 'BBC News'
                                        //icon: iconBase + 'schools_maps.png' 
                            });

                            var infowindow = new google.maps.InfoWindow({
                                content: "<a href='" + link + "'>" + title + "</a>"
                            });
                            marker.addListener('click', function () {
                                infowindow.open(map, marker);
                            });

                            $("#feed").append("<a href='" + link + "'>" + title + "</a></br>");

                        });

                    },
                    failure: function (err) {
                        console.log(err);
                    }
                });

 

                urlSTR = 'http://rss.nytimes.com/services/xml/rss/nyt/World.xml';
                $.ajax({
                    url: 'http://sleepy-sierra-9008.herokuapp.com/', //http://localhost:8080/
                    type: "POST",
                    data: urlSTR,
                    //http://rss.nytimes.com/services/xml/rss/nyt/World.xml
                    //http://feeds.bbci.co.uk/news/rss.xml?edition=int
                    //http://america.aljazeera.com/content/ajam/articles.rss
                    //http://feeds.reuters.com/Reuters/worldNews
                    success: function (data) {

                        $(data).find("item").each(function () {
                            var title = $(this).find("title").text();
                            var link = $(this).find("guid").text();
                            var description = $(this).find("description").text();
                            var randomLat = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                            var randomLng = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random()*2) === 1 ? 1 : -1);
                            var marker = new google.maps.Marker({
                                position: {lat: 43.0759678 + randomLat, lng: -107.2902839 + randomLng},
                                map: map,
                                title: 'BBC News'
                                        //icon: iconBase + 'schools_maps.png' 
                            });

                            var infowindow = new google.maps.InfoWindow({
                                content: "<a href='" + link + "'>" + title + "</a>"
                            });
                            marker.addListener('click', function () {
                                infowindow.open(map, marker);
                            });

                            $("#feed").append("<a href='" + link + "'>" + title + "</a></br>");

                        });

                    },
                    failure: function (err) {
                        console.log(err);
                    }
                });



            }











            function initMap() {
                var uluru = {lat: -25.363, lng: 131.044};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: uluru
                });

                var contentString = '<div id="content">' +
                        '<div id="siteNotice">' +
                        '</div>' +
                        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                        '<div id="bodyContent">' +
                        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                        'sandstone rock formation in the southern part of the ' +
                        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
                        'south west of the nearest large town, Alice Springs; 450&#160;km ' +
                        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
                        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
                        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
                        'Aboriginal people of the area. It has many springs, waterholes, ' +
                        'rock caves and ancient paintings. Uluru is listed as a World ' +
                        'Heritage Site.</p>' +
                        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                        'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
                        '(last visited June 22, 2009).</p>' +
                        '</div>' +
                        '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map,
                    title: 'Uluru (Ayers Rock)',
                    icon: {
                        size: new google.maps.Size(30, 30),
                        scaledSize: new google.maps.Size(30, 30),
                        url: 'img/cnn.png' 
                    }
                    
                });
                
                
                
                
                
                
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });

                var marker2 = new google.maps.Marker({
                    position: {lat: -22.363, lng: 129.044},
                    map: map,
                    title: 'P2',
                    icon: {
                        size: new google.maps.Size(30, 30),
                        scaledSize: new google.maps.Size(30, 30),
                        url: 'img/bbc.png' 
                    }

                });
                var marker3 = new google.maps.Marker({
                    position: {lat: -20.363, lng: 121.044},
                    map: map,
                    title: 'P3',
                    icon: {
                        size: new google.maps.Size(30, 30),
                        scaledSize: new google.maps.Size(30, 30),
                        url: 'img/newyorktimes.png' 
                    }
                });
                var marker4 = new google.maps.Marker({
                    position: {lat: -25.363, lng: 14.044},
                    map: map,
                    title: 'P4',
                    icon: {
                        size: new google.maps.Size(30, 30),
                        scaledSize: new google.maps.Size(30, 30),
                        url: 'img/aljazeera.png' 
                    }
                });
                var marker5 = new google.maps.Marker({
                    position: {lat: -28.363, lng: 113.044},
                    map: map,
                    title: 'P5',
                    icon: {
                        size: new google.maps.Size(30, 30),
                        scaledSize: new google.maps.Size(30, 30),
                        url: 'img/cnn.png' 
                    }
                });


            }

//Create a global map variable
var map;

//Create a global infowindow variable
var markerInfoWindow;	

//create empty array to store future markers
var newPlaces = [];

//initial position of the map
var myCenter = {lat: 50.45068, lng: 30.523099};

//list my default locations on the map
var myPlaces = [
	{title: "Майдан Незалежності", location: {lat: 50.450306, lng: 30.523671}},
	{
		title: "НСК «Олімпійський»", 
		location: {lat: 50.433359, lng: 30.521846}
	},
	{
		title: "Львівська майстерня шоколаду", 
		location: {lat: 50.4620527, lng: 30.5174828}},
	{title: "Андріївська церква", location: {lat: 50.4588976, lng: 30.5175638}},
	{
		title: "Національний академічний театр російської драми імені Лесі Українки", 
		location: {lat: 50.4446875, lng: 30.5185154}
	},
	{title: "MAFIA", location: {lat: 50.4462805, lng: 30.5106136}},
	{title: "Львівська майстерня шоколаду", location: {lat: 50.44548, lng: 30.5021633}},
	{title: "ТЦ 'Гулівер'", location: {lat: 50.4386932, lng: 30.5219517}},
	{
		title: "Національний академічний драматичний театр ім. Івана Франка", 
		location: {lat: 50.445650, lng: 30.528012}
	},
	{title: "Water Museum", location: {lat: 50.452529, lng: 30.531527}},
	{title: "Києво-Печерська лавра", location: {lat: 50.434609, lng: 30.557280}},
	{
		title: "Київський національний академічний театр оперети", 
		location: {lat: 50.433575, lng: 30.516494}
	},
	{
		title: "Національний музей народної архітектури та побуту України «Пирогів»",
		location: {lat: 50.353564, lng: 30.508175}
	}
];

function initMap() {	
	// Create a new StyledMapType object, passing it an array of styles,
	// and the name to be displayed on the map type control.
	var styledMapType = new google.maps.StyledMapType(
	[
	  {
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#ebe3cd"
		  }
		]
	  },
	  {
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#523735"
		  }
		]
	  },
	  {
		"elementType": "labels.text.stroke",
		"stylers": [
		  {
			"color": "#f5f1e6"
		  }
		]
	  },
	  {
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#c9b2a6"
		  }
		]
	  },
	  {
		"featureType": "administrative.country",
		"elementType": "geometry.fill",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  },
	  {
		"featureType": "administrative.land_parcel",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#dcd2be"
		  }
		]
	  },
	  {
		"featureType": "administrative.land_parcel",
		"elementType": "labels",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  },
	  {
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#ae9e90"
		  }
		]
	  },
	  {
		"featureType": "landscape.natural",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#dfd2ae"
		  }
		]
	  },
	  {
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#dfd2ae"
		  }
		]
	  },
	  {
		"featureType": "poi",
		"elementType": "labels.text",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  },
	  {
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#93817c"
		  }
		]
	  },
	  {
		"featureType": "poi.business",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "geometry.fill",
		"stylers": [
		  {
			"color": "#a5b076"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "labels.text",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  },
	  {
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#447530"
		  }
		]
	  },
	  {
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#f5f1e6"
		  }
		]
	  },
	  {
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#fdfcf8"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#f8c967"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#f9a653"
		  }
		]
	  },
	  {
		"featureType": "road.highway",
		"elementType": "labels.icon",
		"stylers": [
		  {
			"weight": 1.5
		  }
		]
	  },
	  {
		"featureType": "road.highway.controlled_access",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#e98d58"
		  }
		]
	  },
	  {
		"featureType": "road.highway.controlled_access",
		"elementType": "geometry.stroke",
		"stylers": [
		  {
			"color": "#db8555"
		  }
		]
	  },
	  {
		"featureType": "road.local",
		"elementType": "labels",
		"stylers": [
		  {
			"visibility": "off"
		  }
		]
	  },
	  {
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#806b63"
		  }
		]
	  },
	  {
		"featureType": "transit.line",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#dfd2ae"
		  }
		]
	  },
	  {
		"featureType": "transit.line",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#8f7d77"
		  }
		]
	  },
	  {
		"featureType": "transit.line",
		"elementType": "labels.text.stroke",
		"stylers": [
		  {
			"color": "#ebe3cd"
		  }
		]
	  },
	  {
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
		  {
			"color": "#dfd2ae"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
		  {
			"color": "#8e8efd"
		  }
		]
	  },
	  {
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
		  {
			"color": "#92998d"
		  }
		]
	  }
	],
	{name: 'Styled Map'});
	
	

	// Create new infowindow object
	markerInfoWindow = new google.maps.InfoWindow();
	
	//get input of new search query
	var input = document.getElementById('places-search');
	
	// Create a map object, and include the MapTypeId to add
    // to the map type control.
	map = new google.maps.Map(document.getElementsByClassName('map')[0],{
		//set location which the map renders as the initial posiiton
		center: myCenter,
		zoom: 13,
		//map style switch off so user doesn't go to terrain, landscsape ...modes
		//mapTypeControl: false    
		mapTypeControlOptions: {
			mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
		},
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
	
	
	//set colors of the markers
	var defaultIcon = makeMarkerIcon('ff1a1a');
	var highlightedIcon = makeMarkerIcon('1aa3ff');
	
	// Add markers to the array and initialize them on the map
	myPlaces.forEach(function(place) {
		var position = place.location;
		var title = place.title;
		// Create a marker for each location
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			animation: google.maps.Animation.DROP,
			icon: defaultIcon
		});
		
		//add marker property to each item in myPlaces array
		place.marker = marker;		
	});
	
	//add even listener to a marker
	myPlaces.forEach(function(place) {
		place.marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);			
        });
		
		place.marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);		
        });		
		
		// Create an onclick event to open the large infowindow at each marker		
		place.marker.addListener('click', function(){
			searchWithFoursquare(this, markerInfoWindow);	
			toggleBounce(this);			
		});	
	});
	
	//initiate new search with GoogleMaps searchbox
	initAutocomplete(input, markerInfoWindow);
}


// This function takes in a COLOR, and then creates a new marker
// icon of that color. 
function makeMarkerIcon(markerColor) {
	var markerImage = new google.maps.MarkerImage(
		'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
		'|40|_|%E2%80%A2',
		new google.maps.Size(21, 34),
		new google.maps.Point(0, 0),
		new google.maps.Point(10, 34),
		new google.maps.Size(21,34)
	);
	return markerImage;
}

//function to open side search bar with future search results
function openNav() {	
	//get current width of the map element
	var width = document.getElementsByClassName("map")[0].offsetWidth;
	var newWidth;
	if (width < 600) {
		newWidth = 250;
	} else {
		newWidth = 350;		
	}
	//add width to side bar i.e. make it appear on the screen
	document.getElementById("mySidenav").style.width = newWidth+"px";
	//console.log(width);
	
	//move the map to the left for 'push' effect
	document.getElementsByClassName("map")[0].style.marginLeft = newWidth+"px";
	
	//adjust the map width so it fits in the screen without horizontal scroll bar
	width -=newWidth;
	document.getElementsByClassName("map")[0].style.width = width +"px"; 
	console.log(width);		
}

//function to close side search bar with future search results
function closeNav() {
	var map = document.getElementsByClassName("map")[0];
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("map")[0].style.marginLeft= "0px";
	document.getElementsByClassName("map")[0].style.width = "100%";	
}

//generate new infowindow for each marker
function showInfoWindow (marker, markerInfoWindow, details) {	
	// Check to make sure the infowindow is not already opened on this marker.
	if (markerInfoWindow.marker != marker) {
		// Clear the infowindow content to give the streetview time to load.
		markerInfoWindow.setContent('');
		markerInfoWindow.marker = marker;
	}
	// Make sure the marker property is cleared if the infowindow is closed.
	markerInfoWindow.addListener('closeclick', function() {
		markerInfoWindow.marker = null;
	});
	
	//create new streetview object and set its radius
	var streetViewService = new google.maps.StreetViewService();
	var radius = 50;		
	
	//process a GoogleMaps response
	function processSVData(data, status) {
		if (status === google.maps.StreetViewStatus.OK) {
			var streetViewLocation = data.location.latLng;
			
			//add response results to the DOM
			var viewHeading = google.maps.geometry.spherical.computeHeading(streetViewLocation, marker.position);
			markerInfoWindow.setContent('<div id="name">' + marker.title + 
			'</div><div id="pano"></div><div><ul id="placeInfo">' + details + '</ul></div>' + 
			'<div id"fousquare"><a href="https://developer.foursquare.com/">Powered by Foursquare API</a></div>');
		
			var panorama = new google.maps.StreetViewPanorama(
				document.getElementById('pano'), {
					position: streetViewLocation,
					pov: {
						heading: viewHeading,
						pitch: 25
					},
					motionTrackingControlOptions: {
						position: google.maps.ControlPosition.LEFT_BOTTOM
					},
					addressControl: false,
					fullscreenControl: false						
				});				
		} else {
			markerInfoWindow.setContent('<div>' + marker.title + '</div>' +
			'<div>No Street View Found</div>');
		}		
	}
	
	// Use streetview service to get the closest streetview image within
	// 50 meters of the markers position
	streetViewService.getPanoramaByLocation(marker.position, radius, processSVData);
	
	//set map zoom and center values
	map.setZoom(14);
	map.setCenter(marker.getPosition());
	//move the map down so the infowindow is seen in full
	map.panBy(0, -200);		
	
	// Open the infowindow on the correct marker.
	markerInfoWindow.open(map, marker);		
}

//request to perform GoogleMaps search
function initAutocomplete(input, markerInfoWindow) {
	//set colors of the markers
	var defaultIcon = makeMarkerIcon('ff1a1a');
	var highlightedIcon = makeMarkerIcon('1aa3ff');
	
	//create new searchbox object
	var searchBox = new google.maps.places.SearchBox(input);
	
	// Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function() {
		searchBox.setBounds(map.getBounds());
	});	
	
	var searchResults = [];
	
	// Listen for the event fired when the user selects a prediction and retrieve
	// more details for that place.
	searchBox.addListener('places_changed', function() { 
		
		//get request response
		var places = searchBox.getPlaces();		
		if (places.length === 0) {
			//display message to user
			handleError("No places matching the query found");
			return;
		} 
		else{
			// Clear out the old markers.
			searchResults.forEach(function(place) {
				place.marker.setMap(null);			
			});
			//delete previous search results after each previous search event
			searchResults = [];
			
			//Set new map bounds according to marker location 
			var bounds = new google.maps.LatLngBounds();
			
			//For each place, get the icon, name and location.
			places.forEach(function(place) {			
				if (!place.geometry) {
					console.log("Returned place contains no geometry");
					handleError("Could not locate the place you search. Check your request.");
					return;
				}		   
				// Create a marker for each place.
				var marker = new google.maps.Marker({
					map: map,
					icon: defaultIcon,
					title: place.name,
					position: place.geometry.location,
					animation: google.maps.Animation.DROP
				});
								
				//create new place object
				var newPlace = {
					title: marker.title,
					location: marker.position,
					marker: marker				
				};
				//add new place to the array
				searchResults.push(newPlace);				
				newPlaces.push(newPlace);
		
				// Create an onclick event to open the large infowindow at each marker.		
				google.maps.event.addListener(marker, 'click', function(){
					searchWithFoursquare(this, markerInfoWindow);	
					toggleBounce(this);				
				});		
				
				marker.addListener('mouseover', function() {
					this.setIcon(highlightedIcon);
					//this.setAnimation(google.maps.Animation.BOUNCE);			
				});
			
				marker.addListener('mouseout', function() {
					this.setIcon(defaultIcon);
					//this.setAnimation(null);
				});		

				if (place.geometry.viewport) {
					// Only geocodes have viewport.
					bounds.union(place.geometry.viewport);
				} else {
					bounds.extend(place.geometry.location);
				}
			});
			map.fitBounds(bounds);			
		}
	});		
} 

//search for place additional details with Fousquare API
function searchWithFoursquare(marker,markerInfoWindow){
	//get place coordinater
	var placeCoordinates = String(marker.position.lat()) + ',' + String(marker.position.lng());
	
	//get parameters for the request
	var query = String(marker.title);
	
	var clientID = 'PPCTPSMS0TH5GLA3QSAK0YYH4N0VDQKRDIT0VLKITFHRD2OC';
	
	var clientSecret = 'IUYZUMGIA0EJFDRYDGMYOGUYPRSFCDZFNZST5R0DE3RBFZYO';
	
	//generate url request
	var foursquareUrl = 'https://api.foursquare.com/v2/venues/search?ll=' + placeCoordinates +
	
	'&query=' + query + '&radius=150&limit=1&' + 
	'client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20170801';
		
	// no error handing method for jsonp so we need walkaround with timeout for the request
	var fourSquareRequestTimeout = setTimeout(function(){
		handleError("Failed to fetch Foursquare results");
	}, 1500);
	
	//make an ajax async request
	var request = $.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: foursquareUrl,
		async: true
	});
	
	request.done( function(data){
		var result = data.response.venues[0];
		
		//get place details	
		var category = result.categories[0].name;
		var address = result.location.address;
		var contact = result.contact.phone;
		var foursquareMemebersNow = result.hereNow.count;
		var totalPeopleVisited = result.stats.usersCount;
		
		//create new string with with details			
		var placeDetails = '<li><h6>Category: ' + category + '</h6></li>' +
			'<li><h6>Address: ' + address + '</h6></li>'+ 
			'<li><h6>Phone: ' + contact + '</h6></li>' +
			'<li><h6>Foursquare members now: ' + foursquareMemebersNow + '</h6></li>' + 
			'<li><h6>Total number of visitors: ' + totalPeopleVisited + '</h6></li>';	
		
		//call the infowindow generator
		showInfoWindow (marker, markerInfoWindow, placeDetails);
	
		clearTimeout(fourSquareRequestTimeout);		
	});
		
	//get error status response
	request.fail( function(jqXHR, textStatus, errorThrown) {
			handleError('\n' + jqXHR.status + '\n' + textStatus + '\n' + errorThrown);
	});
			
}

//animate marker when clicked
function toggleBounce(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function () {
      marker.setAnimation(null);
    }, 2100);
}  

//function to inform user of errors
function handleError(error){
	//get error container
	var errorContainer = document.getElementById('error-message');	
	//clear old listings
	errorContainer.innerHTML = "";
	
	var item = document.createElement('h5');
	// Set its contents:
    item.appendChild(document.createTextNode(error));
	// Add it to the error container:
    errorContainer.appendChild(item);	
	
	//create button to close the message
	var errorButton = document.createElement('button');
	errorButton.appendChild(document.createTextNode("Ok"));
	errorButton.classList.add("closeError");
	errorContainer.appendChild(errorButton);
	
	//animate the message by sliding down/up
	errorContainer.style.top = "100px"; 
	errorButton.addEventListener('click', function(){
		errorContainer.style.top = "-100px"; 
	});	
}

//inform users when Maps API fails to load
function mapError() {
    handleError('Google Maps has failed to load. Please check your internet' +
	'connection or URL and try again.');
};

function MyViewModel() {
    var self = this;
	
	self.placesList = ko.observableArray();  

	//query for filtering the results
	self.query = ko.observable("");

	//make marker bounce when hover in listing section
	self.enableBounce = function(place){
		place.marker.setAnimation(google.maps.Animation.BOUNCE);	
	};
	
	//make marker still when hover out of the listing section
	self.disableBounce = function(place){
		place.marker.setAnimation(null);	
	};

	//click event to show place infowindow
	self.openInfoWindow = function(place){	
		searchWithFoursquare(place.marker, markerInfoWindow);
		google.maps.event.trigger( place.marker, 'click' );
	};	
	
	//filter the results with user query
	self.filterResults = ko.computed(function(){
		
		var filter = self.query().toLowerCase();
		if (self.placesList(myPlaces).length !== 0) {
			if (!filter){
				self.placesList().forEach(function (place) {
				  if ( place.marker ) {
					place.marker.setVisible(true);
				  } 
				});
				
				return self.placesList();
			} else {	
				//return results matching the query
				return ko.utils.arrayFilter(self.placesList(), function(place) {
					var match = place.title.toLowerCase().indexOf(filter) >= 0;
					place.marker.setVisible(match);
					return match;		
				});				
			}
		} else{
			handleError('Oops, no places in favourites. Go add some...');
		}		
	}); 	
}

var vm = new MyViewModel(myPlaces);
ko.applyBindings(vm);
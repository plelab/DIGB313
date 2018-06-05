var index = (function () {
    var initMap = function () {
        var mapLocation = {lat: 36.6107518, lng: 127.28863249999995};

        var map = new google.maps.Map(document.getElementById("map"), {
            center: mapLocation,
            zoom: 15
        });

        var marker = new google.maps.Marker({
            position: mapLocation,
            map: map
        });

        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('placeSearchBox'), {
            types: ['geocode']
        });
    };

    var findAddress = function () {
        var findAddressStr = $("#placeSearchBox").val();

        var geocoder = new google.maps.Geocoder().geocode({"address": findAddressStr}, function (results, status) {
            var lat = null;
            var lng = null;

            if (status == google.maps.GeocoderStatus.OK) {
                lat = results[0].geometry.location.lat();
                lng = results[0].geometry.location.lng();
            }

            $("#address").text("주소 : " + findAddressStr);
            $("#lat").text("위도 : " + lat);
            $("#lng").text("경도 : " + lng);

            var mapLocation = {lat: lat, lng: lng};

            var map = new google.maps.Map(document.getElementById("map"), {
                center: mapLocation,
                zoom: 15
            });

            var marker = new google.maps.Marker({
                position: mapLocation,
                map: map
            });
        });
    };

    var obj = {
        initMap: initMap,
        findAddress: findAddress
    };

    return obj;
})();

$(document).ready(function () {
    index.initMap();
    $(".btn-search").click(index.findAddress);
});
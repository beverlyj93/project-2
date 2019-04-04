function ktof(kelvin) {
    let c = kelvin - 273;
    return Math.floor(c * (9/5) + 32);
}

$('#btn-submit').click(function() {
    let locationType, weatherType;
    $('.destination-types a').each(function() {
        if($(this).attr('aria-selected') === 'true') locationType = $(this).text();
    });
    $('.weather-preference a').each(function() {
        if($(this).attr('aria-selected') === 'true') weatherType = $(this).text();
    });

    let data = {
        location_type: locationType,
        location_climate: weatherType
    }

    $.post('/api/getlocation', data, result => {
        $('#locationName').text(`${result.location_city}, ${result.location_state}`);
        $('#locationDescription').text(result.location_description);
        $('#locationImage').attr('src', result.location_image);

        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${result.location_city},US&APPID=08ade2f5bb504c2d41949b6a0c369802`, report => {
            $('#locationWeather .temp').text(`${ktof(report.main.temp)}° F`);
            $('#locationWeather .wind-speed').text(`${report.wind.speed}mph`);
            $('#locationWeather .type').text(report.weather[0].main);

            $('html, body').animate({
                scrollTop: $('#result-section').offset().top + 150
            }, 800)
        })
    });
});
ymaps.ready(function () {
    var myMap = new ymaps.Map('ymap', {
            center: [59.938635, 30.323118],
            zoom: 17,
            controls: ['zoomControl','routeButtonControl','typeSelector']
        });
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom'); 
});
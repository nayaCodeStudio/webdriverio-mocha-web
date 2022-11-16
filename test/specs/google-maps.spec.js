const GoogleMapsPage = require('../pages/google-maps.page');
const googleMapsPage = new GoogleMapsPage();

describe ('User want to go to some place and see the map on Google Maps :', () => {
    it ('I am launch the app and already logged in on the app.', async() => {
        await googleMapsPage.openBrowser();
        await googleMapsPage.setWindowSize();
    });

    it ('I will be redirected to Explore page.', async() => {
    });

    it ('Search place.', async() => {
    });

    it ('Click on item place destination.', async () => {
    });

    it ('Click on button direction to show the rute.', async() => {
    });

    it ('Rute will be display on the app.', async() => {
    });
});
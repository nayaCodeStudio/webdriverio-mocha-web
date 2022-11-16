const urlPage = require('../../config/url/url.conf')

class GoogleMapsPage extends urlPage {
    async openBrowser() {
        return super.open('maps');
    }

    async setWindowSize() {
        await browser.setWindowSize(1920, 1080);
        await browser.pause(5000);
    }
}

module.exports = GoogleMapsPage;
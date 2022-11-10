module.exports = class urlPage {
    open (path) {
        return browser.url(`https://maps.google.co.id/${path}`)
    }
}
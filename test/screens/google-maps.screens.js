class GoogleMapsScreen {
    get searchTextLocationField() {
        return $('#searchboxinput');
    }

    get assertionItemSearch() {
        const idNumber = ''*'';
        return $(`#sbse${idNumber}x0`);
    }
}

module.exports = new GoogleMapsScreen();
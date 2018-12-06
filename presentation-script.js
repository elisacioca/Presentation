function hideAllActionPanels() {
    var pages = document.getElementsByClassName('page');

    for (var i = 0; i < pages.length; i++) {
        var pg = pages[i];
        pg.style.display = 'none';
    }
}

function revealActionPanel(id) {
    var pnl = document.getElementById(id);
    pnl.style.display = '';

}

function activatePanel(id, caller) {
    this.hideAllActionPanels();
    revealActionPanel(id);
}

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardsPage extends Page {
    
    getDashboardByName (name) {
        return $(`//div[contains(@class, "gridRow")]/a[normalize-space() = "${name}"]`);
    }

    get widgetHeader () {
        return $('[class*=widgetHeader__info-block] > [class*=widgetHeader__widget-name]');
    }

    async getWidgetsNames() {
        let names = await this.widgetHeader().getElementsText();
        return names;
    }
}

module.exports = new DashboardsPage();
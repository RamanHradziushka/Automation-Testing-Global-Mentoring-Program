const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SidebarComponent extends Page {
    
    getMenuByName(name) {
        return $(`div[class*="sidebar"] > a[href*="${name}"]`);
    }

    async openMenu(menuName) {
        await this.getMenuByName(menuName).click();
    }
}

module.exports = new SidebarComponent();
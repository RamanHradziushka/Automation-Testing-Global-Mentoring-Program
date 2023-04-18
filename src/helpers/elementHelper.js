import {$} from "webdriverio/build/commands/element";

export default class ElementHelper {
    static async getElement(locator) {
        return await $(locator);
    }

    static async click(locator) {
        await ElementHelper.getElement(locator).click();
    }
}
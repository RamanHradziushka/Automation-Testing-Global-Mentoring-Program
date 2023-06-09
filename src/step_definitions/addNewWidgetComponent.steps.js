const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
const AddNewWidgetComponent = require('../pageobjects/addNewWidgetComponent');

Then('I should see the following widget types:', async function (types) {
	const expectedWidgetTypes = types.raw().map((array) => array[0]);
	const actualWidgetTypes = await AddNewWidgetComponent.getWidgetTypes();

	expect(actualWidgetTypes, `${JSON.stringify(actualWidgetTypes)} is not equal ${JSON.stringify(expectedWidgetTypes)}`).to.deep.equal(expectedWidgetTypes);
});

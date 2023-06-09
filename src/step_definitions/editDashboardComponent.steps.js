const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
const EditDashboardComponent = require('../pageobjects/editDashboardComponent');

When('I fill in the description with {string}', async function (description) {
	await EditDashboardComponent.fillDescription(description);
});

When('I click the update button', async function () {
	await EditDashboardComponent.clickUpdateButton();
});

Then('I should see the description {string}', async function (expectedDescription) {
	const actualDescription = await EditDashboardComponent.getDescription();
	expect(actualDescription).to.equal(expectedDescription);
});

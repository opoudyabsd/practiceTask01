import searchingPage from '../../pom/searchingPage';
import { loginToTrello } from '../../utils/authHelper';
import chai from "chai";
const { expect, assert } = chai;
chai.should();


describe("Search for existing board", () => {
    before(async () => {
        await loginToTrello()
    })
    it("Open advanced-search", async () => {
        await searchingPage.openAdvanceSeach()
        expect(await searchingPage.advanceSeachHeader.getText()).to.equal("Search")
    })
    it("Searching for existing board", async () => {
        await searchingPage.searchBoard()
        // expect(await searchingPage.isBoardDisplayed())
        await browser.waitUntil(async () => {
            return await searchingPage.isBoardDisplayed()
        }, { timeout: 5000 })
        expect(await searchingPage.isBoardDisplayed()).to.be.true;
    })
}) 
import searchingPage from '../../pom/searchingPage';
import { loginToTrello } from '../../utils/authHelper';


describe("Search for existing board", () => {
    before(async () => {
        await loginToTrello()
    })
    it("Open advanced-search", async () => {
        await searchingPage.openAdvanceSeach()
        await expect(searchingPage.advanceSeachHeader).toHaveText("Search")
    })
    it("Searching for existing board", async () => {
        await searchingPage.setValueSearchBoard()
        await expect(searchingPage.getBoardTitleSelector()).toBeDisplayed()
    })
}) 
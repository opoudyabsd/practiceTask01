import SearchPage from "../../pom/page/searchingPage";
import { loginToTrello } from "../../utils/authHelper";

const searchingPage = new SearchPage();
describe("Search for existing board", () => {
  before(async () => {
    await loginToTrello();
  });
  it("Open home page", async () => {
    await browser.url("/");
  });
  it("Open advanced-search", async () => {
    await searchingPage.openAdvanceSeach();
    await expect(searchingPage.advanceSeachHeader).toHaveText("Search");
  });
  it("Searching for existing board", async () => {
    await searchingPage.search.setValueSearchBoard();
    await expect(searchingPage.titleBoardSelector).toBeDisplayed();
  });
});

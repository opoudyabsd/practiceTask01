class SortingComponent {
  get listActions() {
    return $('[title="List actions"]');
  }
  get byButton() {
    return $('//span[text()="Sort by…"]');
  }
  get listTitle() {
    return $('[title="Sort list"]');
  }
  get byCardNameButton() {
    return $(".js-sort-by-card-name");
  }
}
export default SortingComponent;

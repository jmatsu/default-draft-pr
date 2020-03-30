import * as $ from "jquery";

const setDraftPullRequestDropdown = () => {
  const draftRadio = $("#draft_on");
  const draftButton = draftRadio.closest("label");
  const openMenuButton = draftButton.closest("details").find("summary");

  if (openMenuButton && draftButton) {
    openMenuButton.click();
    draftButton.click();
  }
};

$(setDraftPullRequestDropdown);

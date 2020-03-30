import * as $ from "jquery";

chrome.runtime.onMessage.addListener((_request, _sender, sendResponse) => {
  const draftRadio = $("#draft_on");
  const draftButton = draftRadio.closest("label");
  const openMenuButton = draftButton.closest("details").find("summary");

  if (draftRadio.length > 0 && draftRadio.val() !== "ok") {
    if (openMenuButton.length > 0 && draftButton.length > 0) {
      openMenuButton.click();
      draftButton.click();
    }
  }

  sendResponse("ok");
});

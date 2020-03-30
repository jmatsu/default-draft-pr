chrome.tabs.onUpdated.addListener(function(_tabId, changeInfo, tab) {
  if (tab.active && changeInfo.status === "complete") {
    if (/https?:\/\/github\.com\/[^/]+\/[^/]+\/compare\/.*/.test(tab.url)) {
      chrome.tabs.sendMessage(tab.id, {}, () => {
        // no-op
      });
    }
  }
});

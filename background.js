try {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
      chrome.scripting.executeScript({
        files: ["contentScript.js"],
        target: {tabId: tabId},
      });
    }
  });
} catch (error) {
  console.log(error);
}

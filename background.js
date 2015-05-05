chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.id, {
        file: 		"pusheenify.js",
        allFrames: 	true,
        runAt: 		"document_end"
    });
});

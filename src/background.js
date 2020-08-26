chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    if(/^https:\/\/www\.five9/.test(current_tab_info.url)) {
      chrome.tabs.executeScript(null, {file: 'src/build/main.js'}, () => console.log('working'))
    }
  })
})

// chrome.tabs.onUpdated.addListener(function (tabId , info) {
//   if (info.status === 'loading') {
//     chrome.tabs.executeScript(null, {file: 'src/build/main.js'}, () => console.log('working'))
//   }
// });
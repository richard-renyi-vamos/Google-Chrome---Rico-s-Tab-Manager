// Get all tabs and display them in the popup
chrome.tabs.query({}, function (tabs) {
  var tabList = document.getElementById("tabList");

  tabs.forEach(function (tab) {
    var listItem = document.createElement("li");
    listItem.textContent = tab.title;
    tabList.appendChild(listItem);
  });
});

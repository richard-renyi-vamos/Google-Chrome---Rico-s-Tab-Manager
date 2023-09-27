// Get all tabs and display them in the popup
chrome.tabs.query({}, function (tabs) {
  var tabList = document.getElementById("tabList");

  tabs.forEach(function (tab, index) {
    var listItem = document.createElement("li");
    var link = document.createElement("a");
    link.textContent = (index + 1) + ". " + tab.title;
    link.href = "#";

    // Add a click event listener to focus on the tab and its window when clicked
    link.addEventListener("click", function () {
      chrome.tabs.update(tab.id, { active: true }, function(updatedTab) {
        chrome.windows.update(updatedTab.windowId, { focused: true });
      });
    });

    listItem.appendChild(link);
    tabList.appendChild(listItem);
  });
});

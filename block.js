const identifier = "https://www.youtube.com/watch?v=";
const noAdModeIdentifier = "https://www.youtube-nocookie.com/embed/";

(async () => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  const url = new URL(tab.url);
  const str = url.toString();

  if (str.startsWith(identifier)) {
    chrome.tabs.update({
      url: `${str.replace("youtube", "yout-ube")}`,
    });
  } else if (str.startsWith(noAdModeIdentifier)) {
    const videoCode = str.slice(39, str.length);
    chrome.tabs.update({
      url: `${identifier}${videoCode}`,
    });
  }
  setTimeout(() => {
    window.close();
  }, 100);
})();
/**
 * Select2Go
 * Version: 1.0.0
 * Author: Adem Kouki <ademkingnew@gmail.com>
 * Github: https://github.com/Ademking/Select2Go
 */

// Instagram
const openInstagram = str => {
  let selectedUsername = str.selectionText
  .replace(' ', '')
  .replace(/ig:/i, "")
  .replace(/instagram:/i, "")
  .replace(/insta:/i, "")
  .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
  chrome.tabs.create({
    url: "https://instagram.com/" + selectedUsername
  });
}

// Facebook
// Open by Id or username
const openFbByIdOrUsername = str => {
  let selectedId = str.selectionText
  .replace(' ', '')
  .replace(/fb:/i, "")
  .replace(/facebook:/i, "")
  .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
  chrome.tabs.create({
    url: "https://facebook.com/" + selectedId
  });
}
// Open by name
const openFbByName = str => {
  let selectedName = str.selectionText
  .replace(' ', '')
  .replace(/fb:/i, "")
  .replace(/facebook:/i, "")
  .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
  chrome.tabs.create({
    url: "https://www.facebook.com/search/people/?q=" + selectedName
  });
}

// Github
const openGithub = str => {
  let selectedUsername = str.selectionText
  .replace(' ', '')
  .replace(/git:/i, "")
  .replace(/github:/i, "")
  .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
  chrome.tabs.create({
    url: "https://github.com/" + selectedUsername
  });
}

// Twitter
const openTwitter = str => {
  let selectedUsername = str.selectionText
  .replace(' ', '')
  .replace(/twitter:/i, "")
  .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
  chrome.tabs.create({
    url: "https://twitter.com/" + selectedUsername
  });
}

// Linkedin
const openLinkedin = str => {
  let selectedUsername = str.selectionText
  .replace(' ', '')
  .replace(/linkedin:/i, "")
  .replace(/in:/i, "")
  .replace(/in\//i, "")
  .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
  chrome.tabs.create({
    url: "https://www.linkedin.com/in/" + selectedUsername
  });
}

// Tiktok
const openTiktok = str => {
  let selectedUsername = str.selectionText
  .replace(' ', '')
  .replace(/tiktok:/i, "")
  .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '')
  chrome.tabs.create({
    url: "https://www.tiktok.com/@" + selectedUsername
  });
}

// Parent Context Menu
const parent = chrome.contextMenus.create({
  title: chrome.i18n.getMessage('contextmenu_parent', "%s"),
  contexts: ["selection"]
});

// define the child menus
const childMenus = [
  {
    menu: "Instagram",
    onclick: openInstagram
  },
  {
    menu: "Facebook (by Id or Username)",
    onclick: openFbByIdOrUsername
  },
  {
    menu: "Facebook (by Name)",
    onclick: openFbByName
  },
  {
    menu: "Github",
    onclick: openGithub
  },
  {
    menu: "Twitter",
    onclick: openTwitter
  },
  {
    menu: "Linkedin",
    onclick: openLinkedin
  },
  {
    menu: "TikTok",
    onclick: openTiktok
  },
]

// add context menu for each child
childMenus.forEach(child => {
  chrome.contextMenus.create({
    parentId: parent,
    title: child.menu,
    contexts: ["selection"],
    onclick: child.onclick
  });
});

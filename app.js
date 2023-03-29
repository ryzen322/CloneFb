const shortcutsObj = [
  { title: "Front-End Developers Philippines", img: "group1.jpg" },
  { title: "HTML CSS JAVASCRIPT", img: "group2.jpg" },
  { title: "ReactJS Philippines", img: "group3.jpg" },
  {
    title: "Macbook IMac Macbook Air Mac Mini Parts Buy/Sell/Swap Philippines",
    img: "group4.jpg",
  },
  {
    title: "NoToFakeNews - I-MassReportNayan!",
    img: "group5.jpg",
  },
];

const shortcut = document.querySelector(".aside__shortcuts");

shortcutsObj.forEach((title) => {
  const html = `<div class="aside__shortcuts--icons">
  <div class="shortcut--icons">
    <img src="./img/${title.img}" alt="" />
  </div>
  <h4>${title.title}</h4>
</div>`;

  shortcut.insertAdjacentHTML("beforeend", html);
});

const myStory = document.querySelector(".my-story");
const twiceObj = [
  { name: "Na-Yeon", img: "nayeon.jpg", imgBg: "nayeonmyday.jpg" },
  { name: "Kim Da-Hyun", img: "dahyun.jpg", imgBg: "dahyunmyday.jpg" },
  { name: "Chou Tzu-Yu", img: "tzuyu.jpg", imgBg: "tzuyumyday.jpg" },
  { name: "Sana Minatozaki", img: "sana.jpg", imgBg: "sanamyday.jpg" },
  { name: "Momo Hirai", img: "momo.jpg", imgBg: "momomyday.jpg" },
];

twiceObj.forEach(({ name, img: imgprofile, imgBg }) => {
  const html = ` <div class="my-story">
  <div class="myday-story">
    <img src="./img/${imgBg}" alt="" />
  </div>
  <div class="myday-profile">
    <img src="./img/${imgprofile}" alt="" />
  </div>
  <div class="myday-text">
    <h4>${name}</h4>
  </div>
</div>`;

  myStory.insertAdjacentHTML("afterend", html);
});

const story = document.querySelectorAll(".my-story");
const storyNext = document.querySelector(".story--next");
const storyPrev = document.querySelector(".story--previous");

let next = 0;

if (next === 0) {
  storyPrev.style.display = "none";
}

storyNext.addEventListener("click", () => {
  next += 570;

  const nextEl = `translateX(-${next + ""}px)`;

  document.querySelector(".story--previous").removeAttribute("style");

  story.forEach((el) => {
    el.style.transform = nextEl;
  });
});

storyPrev.addEventListener("click", () => {
  next -= 570;

  if (next === 0) {
    storyPrev.style.display = "none";
  }

  const nextEl = `translateX(-${next + ""}px)`;

  story.forEach((el) => {
    el.style.transform = nextEl;
  });
});

const group = document.querySelectorAll(".story-group");
const featured = document.querySelectorAll(".featured");
const width = document.querySelector(".feed__reels--img");
const dataWidth = width.offsetWidth;

document.querySelector(".previous").style.display = "none";

let data = 300;

function myfunction() {
  data += 300;

  if (data === 1200) {
    console.log("hahaha");
    document.querySelector(".btn").style.display = "none";
  }

  document.querySelector(".previous").removeAttribute("style");

  const next = `translateX(-${data + ""}px)`;

  featured.forEach((data) => {
    data.style.transform = next;
  });
}

document.querySelector(".btn").addEventListener("click", () => {
  myfunction();
});

document.querySelector(".previous").addEventListener("click", () => {
  data -= 300;

  document.querySelector(".btn").removeAttribute("style");

  if (data === 0) {
    document.querySelector(".previous").style.display = "none";
  }

  const next = `translateX(-${data + ""}px)`;

  featured.forEach((data) => {
    data.style.transform = next;
  });
});

const activeUser = document.querySelector(".chat__group");

twiceObj.forEach(({ name, img }) => {
  const html = `<div class="chat__group--group">
  <div class="chat-heads">
    <img src="./img/${img}" alt="" />
    <div class="active-chat"></div>
  </div>
  <h4>${name}</h4>
</div>`;

  activeUser.insertAdjacentHTML("beforeend", html);
});

twiceObj.forEach(({ name, img }) => {
  const html = `<div class="chat__group--group">
  <div class="chat-heads">
    <img src="./img/${img}" alt="" />
    <div class="active-chat"></div>
  </div>
  <h4>${name}</h4>
</div>`;

  activeUser.insertAdjacentHTML("beforeend", html);
});

const settings = [
  {
    backgroundImg: `-147px -105px`,
    settings: "Settings & privacy",
    navigator: "navigate_next",
    backGroundUrl: "./img/background-img-icons.png",
  },
  {
    backgroundImg: `0px -627px`,
    settings: "Help & support",
    navigator: "navigate_next",
    backGroundUrl: "./img/background-settings.png",
  },
  {
    backgroundImg: `0px -543px`,
    settings: "Display & accessiblity",
    navigator: "navigate_next",
    backGroundUrl: "./img/background-settings.png",
  },
  {
    backgroundImg: `0px -438px`,
    settings: "Give Feedback",
    backGroundUrl: "./img/background-settings.png",
  },
  {
    backgroundImg: `0px -792px`,
    settings: "Log Out",
    backGroundUrl: "./img/background-settings-2.png",
  },
];

// const x = settings.map((data) => {
//   console.log(data.navigator === undefined);
// });

const optionSettings = document.querySelector(".user-option");

settings.forEach(({ backgroundImg, settings, navigator, backGroundUrl }) => {
  const span =
    navigator === undefined
      ? ""
      : ` <span class="material-symbols-rounded">
  ${navigator}
</span>`;

  const html = `<div class="user-option__icons">
  <div class="rounded--icons-1">
    <div class="rounded--img-1">
      <i
        style="
          background-image: url(${backGroundUrl});
          background-position: ${backgroundImg};
          background-size: auto;
          width: 20px;
          height: 20px;
          background-repeat: no-repeat;
          display: inline-block;
        "
        class="bg-icons-primary"
      ></i>
    </div>

    <h4>${settings}</h4>
  </div>


   ${span}
 
</div>`;

  optionSettings.insertAdjacentHTML("beforeend", html);
});

// El Create
const create = document.querySelector(".addicons");
const createVissible = document.querySelector(".create-post");

// El Notification
const addnotif = document.querySelector(".addnotif");
const addnotifVissible = document.querySelector(".notification-settings");

// El user
const user = document.querySelector(".adduser");
const userVissible = document.querySelector(".user-settings");

// El inbox
const messenger = document.querySelector(".addmaill");
const messengerVissible = document.querySelector(".notification-message");

function removedElementCreate() {
  createVissible.removeAttribute("id", "display-none");
  addnotifVissible.setAttribute("id", "display-none");
  userVissible.setAttribute("id", "display-none");
  messengerVissible.setAttribute("id", "display-none");
}

function removedELementInbox() {
  messengerVissible.removeAttribute("id", "display-none");
  addnotifVissible.setAttribute("id", "display-none");
  userVissible.setAttribute("id", "display-none");
  createVissible.setAttribute("id", "display-none");
}

function removedELementUser() {
  userVissible.removeAttribute("id", "display-none");
  messengerVissible.setAttribute("id", "display-none");
  addnotifVissible.setAttribute("id", "display-none");
  createVissible.setAttribute("id", "display-none");
}

function removedELementNotif() {
  addnotifVissible.removeAttribute("id", "display-none");
  userVissible.setAttribute("id", "display-none");
  messengerVissible.setAttribute("id", "display-none");
  createVissible.setAttribute("id", "display-none");
}

// user create
create.addEventListener("click", function () {
  if (createVissible.hasAttribute("id")) {
    removedElementCreate();
  } else {
    createVissible.setAttribute("id", "display-none");
  }
});

// user inbox
messenger.addEventListener("click", function () {
  if (messengerVissible.hasAttribute("id")) {
    removedELementInbox();
  } else {
    messengerVissible.setAttribute("id", "display-none");
  }
});

// User settings
user.addEventListener("click", () => {
  if (userVissible.hasAttribute("id")) {
    removedELementUser();
  } else {
    userVissible.setAttribute("id", "display-none");
  }
});

// user Notification
addnotif.addEventListener("click", () => {
  if (addnotifVissible.hasAttribute("id")) {
    removedELementNotif();
  } else {
    addnotifVissible.setAttribute("id", "display-none");
  }
});

const notificationNew = [
  {
    name: "Na-Yeon",
    profileImg: "nayeon.jpg",
    context: `was live: 'LIVE! Q&A w/ media tungkolsa Maharlika Fund`,
    duration: "5 hours ago",
    reaction: "background-position: 0px -667px;",
    visited: true,
  },
  {
    name: "Kim Da-Hyun",
    profileImg: "dahyun.jpg",
    context: "was live: 'HAPPENING NOW: Q&A at the Foreign Correspondents",
    duration: "3 days ago",
    reaction: "background-position: 0px -1624px;",
    visited: false,
  },
  {
    name: "Chou Tzu-Yu",
    profileImg: "tzuyu.jpg",
    context: "Shared The Woke Salaryman's post",
    duration: "33 min ago",
    reaction: "background-position: 0px -841px;",
    visited: true,
  },
  {
    name: "Sana Minatozaki",
    profileImg: "sana.jpg",
    context: "We noticed someone is try to loggin your facebook account",
    duration: "1 min ago",
    reaction: "background-position: 0px -1769px;",
    visited: false,
  },
];

const notifealry = document.querySelector(".notification-early");
const notifnew = document.querySelector(".notification-new");

notificationNew.forEach(
  ({ name, profileImg, context, duration, reaction, visited }) => {
    const active =
      visited === true
        ? ` <div class="notification-content--active"></div> `
        : "";

    const html = `<div class="notification-content">
  <div class="notification-content--rounded">
    <img src="./img/${profileImg}" alt="" />
    <div class="notification-content--rounded-sub">
      <i
        style="
          height: 28px;
          width: 28px;
          background-image: url(./img/background-reactions.png);
          ${reaction}
          background-size: auto;
          background-repeat: no-repeat;
          display: inline-block;
        "
      ></i>
    </div>
  </div>

  <div class="notification-content--text">
    <h4>${name}</h4>
    <p>
     ${context}
    </p>

    <span>${duration}</span>
  </div>
  ${active}

  <div class="notification-content--settings">
    <span class="material-symbols-rounded"> more_horiz </span>
  </div>
</div> `;

    notifealry.insertAdjacentHTML("afterend", html);
    notifnew.insertAdjacentHTML("afterend", html);
  }
);

const inboxObj = [
  {
    name: "Jennie Kim",
    sent: "Thank you",
    imgSender: "./img/JennieKim.jpg",
    duration: ".18h",
  },
  {
    name: "Lalisa Manoban",
    recieved: "Thank you",
    imgSender: "./img/lisaMonaban.jpg",
    duration: ".2sec",
  },
  {
    name: "Jisoo",
    seenzoned: "Thank you",
    imgSender: "./img/jisoo.jpg",
    duration: ".56mins",
  },
  {
    name: "Roseanne Park",
    seen: "Thank you",
    imgSender: "./img/rose.jpg",
    duration: ".32sec",
  },

  {
    name: "Alfredo Pagulayan",
    sent: "Thank you",
    imgSender: "./img/featuredphoto.jpg",
    duration: ".15m",
  },

  {
    name: "Na-Yeon",
    seen: "You: Where you at?",
    imgSender: "./img/nayeon.jpg",
    duration: ".15m",
  },
  {
    name: "Momo Hirai",
    recieved: "You: Where you at?",
    imgSender: "./img/momomyday.jpg",
    duration: ".15m",
  },
  {
    name: "Chou Tzu-Yu",
    seen: "You: Where you at?",
    imgSender: "./img/tzuyumyday.jpg",
    duration: ".15m",
  },
  {
    name: "Sana Minatozaki",
    seenzoned: "You: Where you at?",
    imgSender: "./img/sanamyday.jpg",
    duration: ".15m",
  },
  {
    name: "jeongyeon",
    seen: "You: Where you at?",
    imgSender: "./img/jeongyeonmyday.jpg",
    duration: ".15m",
  },
  {
    name: "Kim Dahyun",
    recieved: "Where you at?",
    imgSender: "./img/dahyunmyday.jpg",
    duration: " .15m",
  },
];

//

// const inboxName =
//   inboxObj[0].name.length >= 25
//     ? `${inboxObj[0].name.slice(0, 25)}...`
//     : `${inboxObj[0].name}`;

// console.log(inboxName);

const inboxChat = document.querySelector(".chat");

inboxObj.forEach(
  ({ name, sent, imgSender, duration, recieved, seen, seenzoned }) => {
    const messageName =
      name.length >= 25 ? `${name.slice(0, 25)}...` : `${name}`;

    const reciever = recieved ? "recieved" : "sent";
    const unreadMessage = recieved ? "unread" : "read";

    let inboxMessage;

    if (recieved) {
      inboxMessage = "unread";
    }
    if (sent) {
      inboxMessage = "read";
    }
    if (seen) {
      inboxMessage = "seen";
    }

    const seenMessage =
      inboxMessage === "seen"
        ? `   <div class="type-seen">
      <img src=".${imgSender}" alt="" />
    </div>`
        : `<div class="type-${inboxMessage}"></div>`;

    const html = `<div class="chat-messages">
 <div class="chat-messages--profile">
   <img src="${imgSender}" alt="" />
 </div>
 <div class="chat-messages--inbox">
   <h1 class="header-${unreadMessage}">${messageName}</h1>
   <p class='${reciever}'>${
      sent || recieved || seen || seenzoned
    } <span>${duration}</span></p>
 </div>
 <div class="chat-messages--option">
   <span class="material-symbols-rounded bg-icons">
     more_horiz
   </span>
 </div>
 <div class="chat-messages--unit">
   ${seenMessage}
 </div>
</div>`;

    inboxChat.insertAdjacentHTML("beforeend", html);
  }
);

const jparent = document.querySelectorAll(".chat-messages");

const jchildrend = document.querySelectorAll(".chat-messages--option");

jchildrend.forEach((e, index) => {
  e.addEventListener("mouseover", () => {
    jparent[index].setAttribute("id", "bg-hover");
  });
});

jchildrend.forEach((e, index) => {
  e.addEventListener("mouseout", () => {
    jparent[index].removeAttribute("id", "bg-hover");
  });
});

const icons = document.querySelectorAll(".create-post--icons");

const createIcons = [
  {
    name: "Post",
    text: "Share a post on News Feed.",
    backImage: "0px -540px",
    backGroundUrl: `https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/PIHVSleJ5CJ.png?_nc_eui2=AeF3bD1DjgrTtxw2RxnUzAGGh7sSKpqGvuaHuxIqmoa-5l-2QiesEVCgv_5fRrekClbqEX-fpoO4Sk1Ta8V5sSdI`,
  },
  {
    name: "Story",
    text: "Share a photo or rite something.",
    backImage: "0px -400px",
    backGroundUrl: `https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/x3FmlOJbJqb.png?_nc_eui2=AeGdWr3K_VGykak7O7jpXbctRO2x-l_jGkxE7bH6X-MaTLmm6Jei0ypASemuOX_9Eq7yVPQtZeZxP6CqCIsFceRU`,
  },
  {
    name: "Room",
    text: "Video chat with anyone, on or off Facebook, without the limits",
    backImage: "0px -246px",
    backGroundUrl: `https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/PIHVSleJ5CJ.png?_nc_eui2=AeF3bD1DjgrTtxw2RxnUzAGGh7sSKpqGvuaHuxIqmoa-5l-2QiesEVCgv_5fRrekClbqEX-fpoO4Sk1Ta8V5sSdI`,
  },

  {
    name: "Page",
    text: "Connect and share with customers or fans.",
    backImage: "0px -225px",
    backGroundUrl: `https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/PIHVSleJ5CJ.png?_nc_eui2=AeF3bD1DjgrTtxw2RxnUzAGGh7sSKpqGvuaHuxIqmoa-5l-2QiesEVCgv_5fRrekClbqEX-fpoO4Sk1Ta8V5sSdI`,
  },
  {
    name: "Add",
    text: "Adveritse your business, brand organization",
    backImage: "0px -855px",
    backGroundUrl: `https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/PIHVSleJ5CJ.png?_nc_eui2=AeF3bD1DjgrTtxw2RxnUzAGGh7sSKpqGvuaHuxIqmoa-5l-2QiesEVCgv_5fRrekClbqEX-fpoO4Sk1Ta8V5sSdI`,
  },
  {
    name: "Group",
    text: "Connect with people who share your interests",
    backImage: "0px -190px",
    backGroundUrl: `https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/x3FmlOJbJqb.png?_nc_eui2=AeGdWr3K_VGykak7O7jpXbctRO2x-l_jGkxE7bH6X-MaTLmm6Jei0ypASemuOX_9Eq7yVPQtZeZxP6CqCIsFceRU`,
  },
  {
    name: "Event",
    text: "Bring people together with a public or private event.",
    backImage: "0px -309px",
    backGroundUrl: `https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/PIHVSleJ5CJ.png?_nc_eui2=AeF3bD1DjgrTtxw2RxnUzAGGh7sSKpqGvuaHuxIqmoa-5l-2QiesEVCgv_5fRrekClbqEX-fpoO4Sk1Ta8V5sSdI`,
  },
  {
    name: "Marketplace listing",
    text: "Sell items to people in your community",
    backImage: "0px -379px",
    backGroundUrl: `https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/x3FmlOJbJqb.png?_nc_eui2=AeGdWr3K_VGykak7O7jpXbctRO2x-l_jGkxE7bH6X-MaTLmm6Jei0ypASemuOX_9Eq7yVPQtZeZxP6CqCIsFceRU`,
  },
];

createIcons.slice(0, 3).forEach(({ name, text, backImage, backGroundUrl }) => {
  const html = `<div class="icons-ui">
  <div class="icons-ui--rounded">
    <i
      style="
        background-image: url(${backGroundUrl});
        background-position: ${backImage};
        background-size: auto;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        display: inline-block;
      "
      class="bg-secondary-icons2"
    ></i>
  </div>
  <div class="icons-ui--text">
    <h1>${name}</h1>
    <p>${text}</p>
  </div>
</div>`;

  icons[0].insertAdjacentHTML("beforeend", html);
});

const secondicons = document.querySelector(".create-post--linear");

createIcons.slice(3).forEach(({ name, text, backImage, backGroundUrl }) => {
  const html = `<div class="icons-ui">
  <div class="icons-ui--rounded">
    <i
      style="
        background-image: url(${backGroundUrl});
        background-position: ${backImage};
        background-size: auto;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        display: inline-block;
      "
      class="bg-secondary-icons2"
    ></i>
  </div>
  <div class="icons-ui--text">
    <h1>${name}</h1>
    <p>${text}</p>
  </div>
</div>`;
  icons[1].insertAdjacentHTML("beforeend", html);
});

const feedIcon = document.querySelector(".feed-icons");
const sideNav = document.querySelector(".aside");

feedIcon.addEventListener("click", function () {
  if (sideNav.hasAttribute("id")) {
    sideNav.removeAttribute("id", "display: none");
  } else {
    sideNav.setAttribute("id", "hideSideBar");
  }
});

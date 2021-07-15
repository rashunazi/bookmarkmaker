let bookmarks = [
  {
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
  },
];

let bookmarksCount = bookmarks.length;

let bookmarksListElement = document.getElementById("bookmarksList");
let submitBtnElement = document.getElementById("submitBtn");
let bookmarkFormEl = document.getElementById("bookmarkForm");

function createAndAppendBookmark(bookmark) {
  let bookmarkElement = document.createElement("li");
  bookmarkElement.classList.add(
    "mt-4",
    "bookmark-item-container",
    "d-flex",
    "flex-row"
  );
  bookmarkElement.id = bookmark.bookmarkId;
  bookmarksListElement.appendChild(bookmarkElement);

  let paraElement = document.createElement("p");
  paraElement.classList.add("bookmark-name");
  paraElement.textContent = bookmark.name;
  bookmarkElement.appendChild(paraElement);

  let anchorElement = document.createElement("a");
  anchorElement.href = bookmark.url;
  anchorElement.target = "_blank";
  anchorElement.classList.add("button-container");
  bookmarkElement.appendChild(anchorElement);

  let buttonElement = document.createElement("button");
  buttonElement.textContent = "Visit";
  buttonElement.classList.add("btn", "btn-primary");
  anchorElement.appendChild(buttonElement);
}

for (let bookmark of bookmarks) {
  createAndAppendBookmark(bookmark);
}

function addBookMark() {
  let siteNameInputEl = document.getElementById("siteNameInput");
  let siteUrlInputEl = document.getElementById("siteUrlInput");

  let siteName = siteNameInputEl.value;
  let siteUrl = siteUrlInputEl.value;

  let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
  let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

  siteNameInputEl.addEventListener("change", function (event) {
    if (event.target.value === "") {
      siteNameErrMsgEl.textContent = "Required*";
    } else {
      siteNameErrMsgEl.textContent = "";
    }
    siteName = event.target.value;
  });

  siteUrlInputEl.addEventListener("change", function (event) {
    if (event.target.value === "") {
      siteUrlErrMsgEl.textContent = "Required*";
    } else {
      siteUrlErrMsgEl.textContent = "";
    }
    siteUrl = event.target.value;
  });

  if (siteName === "") {
    siteNameErrMsgEl.textContent = "Required*";
  } else {
    siteNameErrMsgEl.textContent = "";
  }

  if (siteUrl === "") {
    siteUrlErrMsgEl.textContent = "Required*";
  } else {
    siteUrlErrMsgEl.textContent = "";
  }

  if (siteName !== "" && siteUrl !== "") {
    bookmarksCount = bookmarksCount + 1;

    let newBookmark = {
      bookmarkId: "bookmark" + bookmarksCount,
      name: siteName,
      url: siteUrl,
    };

    bookmarks.push(newBookmark);
    createAndAppendBookmark(newBookmark);
  }
}

bookmarkFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookMark();
});

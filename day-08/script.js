//SELECT ITEMS
const giftList = document.querySelector('#list-of-gifts');
const form = document.querySelector(".gift-list-form");
const giftName = document.querySelector('#input-gift');
const deleteAllBtn = document.querySelector('#btn-delall');
const initialMessage = document.querySelector('#initial-message');
const giftQty = document.querySelector('#gift-quantity');
let globalIndexOfGift = -1; //only for check repeated gift

//MOCK DATA
let listOfGifts = new Map([
  ["iPhone 14", "1"],
  ["SSD 480gb", "1"],
  ["Vans Old Skool", "2"]
]);

//FUNCTIONS
function initializeList() {
  listOfGifts.forEach((giftQty, giftName) => addItem(giftName, giftQty))
};

function addItem(itemName, itemQty = 1) {
  const newElement = document.createElement('li');
  newElement.textContent = `${itemName}`;

  const newElementSpan = document.createElement('span');
  newElementSpan.classList.add('gift-info');
  newElementSpan.textContent = ` x${itemQty}`;

  newElement.appendChild(newElementSpan);
  giftList.appendChild(newElement);
};

function storeItem(giftName, giftQty) {
  listOfGifts.set(giftName, giftQty);
};

function deleteItemFromStorage(giftName) {
  listOfGifts.delete(giftName)
};

function deleteAllItems(item) {
  let child = item.lastElementChild;
  while (child) {
    item.removeChild(child);
    child = item.lastElementChild
  }

  /* while (giftList.lastChild) {
    giftList.lastChild.remove();
  } */
};

function checkInitialMessage() {
  if (listOfGifts.size !== 0) {
    initialMessage.classList.add('hidden')
  } else {
    initialMessage.classList.remove('hidden')
  }
};

const applyAnimation = (element, animationClass, timeout) => {
  element.classList.add(animationClass);
  setTimeout(() => element.classList.remove(animationClass), timeout)
};

initializeList();
checkInitialMessage();

//EVENT LISTENERS
//ADD NEW GIFT
form.addEventListener('submit', (event) => {
  event.preventDefault();
  /* const giftExist = giftExists(gift.value); */
  
  if (giftName.value === "" /* || giftExist */) {
    if (globalIndexOfGift >= 0) {
      applyAnimation(giftList.children[globalIndexOfGift], 'repeated-gift', 500)
    };

    applyAnimation(giftName, 'shake', 500)
  };
  
  if (giftName.value !== "" /* && giftExist === false */) {
    addItem(giftName.value, giftQty.value);
    storeItem(giftName.value, giftQty.value);
    giftName.value = "";
  };

  checkInitialMessage();
});

//REMOVE GIFT WHEN I CLICK IN IT
giftList.addEventListener('click', (event) => {
  event.target.remove();
  
  deleteItemFromStorage(event.target.firstChild.textContent);

  checkInitialMessage();
});

//DELETE ALL GIFT's
deleteAllBtn.addEventListener('click', (event) => {
  deleteAllItems(giftList);

  listOfGifts.clear();
  checkInitialMessage()
});
//SELECT ITEMS
const giftList = document.querySelector('#list-of-gifts');
const form = document.querySelector(".gift-list-form");
const gift = document.querySelector('#input-gift');
const deleteAllBtn = document.querySelector('#btn-delall');
const initialMessage = document.querySelector('#initial-message');

//EVENT LISTENERS
//ADD NEW GIFT
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (gift.value === "") {
    gift.classList.add('shake');
    setTimeout(() => {gift.classList.remove('shake')}, 500);
  };
  
  if (gift.value !== "") {
    addItem(gift.value);
    storeItem(gift.value);
    gift.value = "";
  };
  
  checkInitialMessage()
});

//REMOVE GIFT WHEN I CLICK IN IT
giftList.addEventListener('click', (event) => {
  event.target.remove();
  
  listOfGifts = deleteItemFromStorage(event.target.textContent);

  checkInitialMessage();
});

//DELETE ALL GIFT's
deleteAllBtn.addEventListener('click', (event) => {
  deleteAllItems(giftList);

  listOfGifts = [];
  checkInitialMessage()
});

//MOCK DATA
let listOfGifts = [];

//FUNCTIONS
function initializeList() {
  /* if (listOfGifts.length === 0) initialMessage. */
  listOfGifts.forEach(item => addItem(item))
};

function addItem(item) {
  const newElement = document.createElement('li');
  newElement.textContent = item;
  giftList.appendChild(newElement)
};

function storeItem(item) {
  //This mutate the array
  /* listOfGifts.push(item) */
  
  //This do not
  listOfGifts = [...listOfGifts, item]
};

function deleteItemFromStorage(item) {
  const indexItem = listOfGifts.indexOf(item);
  return listOfGifts.filter(element => element !== item)
};

function deleteAllItems(item) {
  let child = item.lastElementChild;
  while (child) {
    item.removeChild(child);
    child = item.lastElementChild
  }
};

function checkInitialMessage () {
  if (listOfGifts.length !== 0) {
    initialMessage.classList.add('hidden')
  } else {
    initialMessage.classList.remove('hidden')
  }
}

initializeList();
checkInitialMessage();
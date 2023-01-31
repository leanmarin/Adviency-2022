//SELECT ITEMS
const giftList = document.querySelector('#list-of-gifts');
const form = document.querySelector(".gift-list-form");
const gift = document.querySelector('#input-gift');

//EVENT LISTENERS
//REMOVE GIFT WHEN I CLICK IN IT
giftList.addEventListener('click', (event) => {
  /* const eventGift = event.target.textContent;
  const foundItem = listOfGifts.find(item => item === eventGift);
  const indexItem = listOfGifts.indexOf(foundItem);

  if (eventGift === foundItem) {
    listOfGifts.splice(indexItem, 1);
    console.log(listOfGifts)
  }; */

  event.target.remove();
  deleteItemFromStorage(event.target.textContent)
});

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

  console.log(listOfGifts)
});

//MOCK DATA
let listOfGifts = [
  'iPhone 14 Pro',
  'SanDisk SSD 480GB',
  'Vans Old Skool',
];

//FUNCTIONS
function initializeList() {
  listOfGifts.forEach(item => addItem(item))
};

function addItem(item) {
  const newElement = document.createElement('li');
  newElement.textContent = item;
  giftList.appendChild(newElement)
};

function storeItem(item) {
  listOfGifts.push(item)
};

function deleteItemFromStorage(item) {
  const indexItem = listOfGifts.indexOf(item);
  listOfGifts.splice(indexItem, 1);
  console.log(listOfGifts)
}

initializeList();
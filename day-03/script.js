//SELECT ITEMS
const giftList = document.querySelector('#list-of-gifts');
const form = document.querySelector(".gift-list-form");
const gift = document.querySelector('#input-gift');

//EVENT LISTENERS
form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (gift.value === "") {
    gift.classList.add('shake');
    setTimeout(() => {gift.classList.remove('shake')}, 500);
  };

  if (gift.value !== "") {
    addItem(gift.value);
    persistItem(gift.value);
    gift.value = "";
  }
});

//MOCK DATA
const listOfGifts = [
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

function persistItem(item) {
  listOfGifts.push(item)
};

initializeList();
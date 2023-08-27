/** @format */
const shop = document.querySelector(`#remove`);
let valid = true;
let a1 = 1;
document.querySelector(`#shop`).addEventListener(`click`, function (e) {
  e.preventDefault();
  if (valid) {
    valid = false;
    shop.classList.add(`visible`);
    shop.classList.remove(`invisible`);
  } else {
    valid = true;
    shop.classList.remove(`visible`);
    shop.classList.add(`invisible`);
  }
});

document.querySelector(`#xMark`).addEventListener(`click`, function (e) {
  e.preventDefault();
  valid = true;
  shop.classList.remove(`visible`);
  shop.classList.add(`invisible`);
});
document.querySelector(`#xMark2`).addEventListener(`click`, function (e) {
  e.preventDefault();
 
 
  document.querySelector(`#removed`).classList.toggle(`invisible`);
  
});

document.querySelector(`#sumMenuShow`).addEventListener(`click`, function (e) {
  e.preventDefault();
  if (valid) {
    valid = false;
    document.querySelector(`#collaps`).classList.add(`right-0`);
    document.querySelector(`#collaps`).classList.remove(`right-[-18rem]`);
  } else {
    valid = true;
    document.querySelector(`#collaps`).classList.remove(`right-0`);
    document.querySelector(`#collaps`).classList.add(`right-[-18rem]`);
  }
  `right-0`;
});

document.querySelector(`#xmark`).addEventListener(`click`, function (e) {
  e.preventDefault();
  if (valid) {
    valid = false;
    document.querySelector(`#collaps`).classList.add(`right-0`);
    document.querySelector(`#collaps`).classList.remove(`right-[-18rem]`);
  } else {
    valid = true;
    document.querySelector(`#collaps`).classList.remove(`right-0`);
    document.querySelector(`#collaps`).classList.add(`right-[-18rem]`);
  }
  `right-0`;
});
document.querySelector(`#storeSubMenu`).addEventListener(`click`, function (e) {
  e.preventDefault();
  document.querySelector(`#arrow`).classList.toggle(`rotate-180`);

  document.querySelector(`#ulSubmenu`).classList.toggle(`hidden`);
});
document.querySelector(`#remove2`).addEventListener(`click`, function (e) {
  e.preventDefault();
  e.preventDefault();
  if (valid) {
    valid = false;
    document.querySelector(`#removed`).classList.add(`visible`);
    document.querySelector(`#removed`).classList.remove(`invisible`);
  } else {
    valid = true;
    document.querySelector(`#removed`).classList.remove(`visible`);
    document.querySelector(`#removed`).classList.add(`invisible`);
  }
});

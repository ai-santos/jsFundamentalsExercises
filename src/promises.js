const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const order = [['sunglasses', 1], ['bags', 2]];

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};

const handleSuccess = (resolve) => {
  console.log(resolve);
};

const handleFailure = (reject) => {
  console.log(reject);
};

// checkInventory(order).then(handleSuccess, handleFailure);

checkInventory(order).then(handleSuccess).catch(handleFailure);

// Write your code below:
const myExecutor = (resolve, reject) => {
  if(inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();
console.log(orderPromise);
let pizzaToppings = ["pepperoni", "mushrooms", "onions", "green peppers"];

function greetCustomer() {
  let greeting = `Welcome to Pizza House, our toppings are...`;
  for (let topping of pizzaToppings) { 
    greeting += `${topping}, `
  }
  console.log(greeting);
}
greetCustomer()

function getPizzaOrder(size, crust, ...toppings){
  let order = `Here is your ${size}, ${crust}, crust pizza with `
  for (let topping of toppings){
    order += `${topping}, `
  }
  console.log(`${order} Comning Right Up...`);
  return [size, crust, toppings];
}
let customerOrder = getPizzaOrder("medium", "thick", "pepperoni", "onions");

function preparePizza([ordersize, ordercrust, ordertoppings]){
  console.log("Cooking Pizza Now!");
  return {
    size: ordersize, 
    crust: ordercrust,
    toppings: ordertoppings 
  }
}
let cookedPizza = preparePizza(customerOrder)

function servePizza(pizza){
  let orderMessage = `Your Order is Ready! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
for (let topping of pizza.toppings) { 
    orderMessage += `${topping}, `
  }
  console.log(`${orderMessage}`)
  return pizza
}
servePizza(cookedPizza);
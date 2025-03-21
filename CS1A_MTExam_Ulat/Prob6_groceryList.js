// Ulat, Van Remlee
let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();

if (createList === 'y') {
    let itemCount = Number(prompt("Enter the number of items in your grocery list:"));
    let grocery_list = [];

    for (let i = 0; i < itemCount; i++) {
        let item = prompt(`Enter item ${i + 1}:`);
        grocery_list.push(item);
    }

    let groceryList_Sort = [...grocery_list].sort();
    let groceryList_Reverse = [...grocery_list].reverse();

    alert(`Original List: ${grocery_list.join(", ")}\nSorted List: ${groceryList_Sort.join(", ")}\nReversed List: ${groceryList_Reverse.join(", ")}`);
}

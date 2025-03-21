// Ulat, Van Remlee
let favoriteColors = [];

for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter your favorite color (${i + 1}/3):`);
    favoriteColors.push(color); 
    console.log(`Updated color list: ${favoriteColors}`); 
}

console.log("Your favorite colors are:", favoriteColors);

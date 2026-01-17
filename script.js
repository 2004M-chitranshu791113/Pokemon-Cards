var x = document.getElementById("main");
let s = "";
let arr = [
    "https://i.pinimg.com/736x/75/77/28/757728ea03cf11b495d92a9852a9f060.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZ_piqeWiau58uPoTsfHJvAtpL61AeeWNKg&s", 
    "https://i.pinimg.com/736x/c5/bb/81/c5bb81bfe9765962d5b59ccc56915c99.jpg", 
    "https://www.kindpng.com/picc/m/129-1291337_pokemon-on-white-background-hd-png-download.png", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLv8Y9lIeMPk5ClPxz_LGd-XnqDy72OmNuPA&s",
    "https://pngimg.com/d/pokemon_PNG60.png",
    "https://toppng.com/uploads/preview/icture-of-mewtwo-from-bulbapedia-pokemon-mewtwo-11563068565mm7dppxm4t.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_maJlL9HLvvUZKK5mDfElBNomFs7gH0cQ0g&s"
];
for (var i = 1; i <= 52; i++) {
    let r = Math.floor(Math.random() * arr.length);
    s += `<div class="card"><img src=${arr[r]} alt="pokemon"></div>`;
}
x.innerHTML = s;
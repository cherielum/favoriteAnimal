var favAnimals = ["snake", "tiger", "horse", "elephant", "monkey"]; 

var numFavAnimals=0; 
while (numFavAnimals<favAnimals.length) {
    fill(28, 191, 186);
    text(favAnimals[numFavAnimals], 20, 30 + numFavAnimals*20);
    numFavAnimals++;
    }

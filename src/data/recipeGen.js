const axios = require("axios");
const fs = require('fs');
const fileName = './recipes.json'
const file = require(fileName);
const recipeArray = async (count) => {
    recipes = []
    for (i = 0; i < count; i++) {
        res = await axios("http://www.themealdb.com/api/json/v1/1/random.php")
        recipes.push(res.data.meals[0])
    }
    return recipes
}
const main = async (count) => {
    file.recipes = await recipeArray(count);
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file, null, 2));
  console.log('writing to ' + fileName);
});
}
main(5)
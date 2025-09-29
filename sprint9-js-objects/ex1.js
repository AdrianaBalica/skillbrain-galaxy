function madeRecipe(titlu, portii, ingrediente) {
        return { titlu, portii, ingrediente };
    }

const pizza = madeRecipe("Pizza", 3, ["sunca", "cas", "ketchup"]);
const supa = madeRecipe("Supă de legume", 4, ["morcovi", "cartofi", "telina"]);

console.log(pizza.titlu);        
console.log(pizza.portii);       
console.log(pizza.ingrediente); 
console.log("Reteta contine titlul, numarul de portii si ingredientele: ", pizza);
console.log(supa.titlu);        
console.log(supa.portii);      
console.log(supa.ingrediente);  
console.log("Reteta contine titlul, numarul de portii si ingredientele: ", supa);
function madePizza(titlu, portii, ingrediente) {
    return {
        titlu: "Pizza",
        portii: 3,
        ingrediente: ["sunca", "cas", "ketchup"],
    }
}

const pizza = madePizza("Pizza", 3, ["sunca", "cas", "ketchup"]);

console.log(pizza.titlu);
console.log(pizza.portii);
console.log(pizza.ingrediente);
console.log("Reteta contine titlul, numarul de portii si ingredientele: ", pizza);
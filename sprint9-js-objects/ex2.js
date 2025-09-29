function getNewObjectWithoutProperty(obiect, proprietate) {
    const obiectNou = { ...obiect };   
    delete obiectNou[proprietate]; 
    return obiectNou;             
}

const obiect = { a: 1, b: 2 };
const rezultat =  getNewObjectWithoutProperty(obiect, "b");

console.log("Obiect inițial:", obiect);   
console.log("Obiect nou:", rezultat);     
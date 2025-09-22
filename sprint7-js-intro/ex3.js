function getNumeZi(ziua) {
    switch (ziua) {
      case 0:
        return "Duminica";  
      case 1:
        return "Luni";
      case 2:
        return "Marti";
      case 3:
        return "Miercuri";
      case 4:
        return "Joi";
      case 5:
        return "Vineri";
      case 6:
        return "Sambata";
      case 7:
        return "Duminica";
      default:
        throw new Error("Zi invalida! Trebuie sa fie intre 0 si 7.");
    }
}
  
 
try {
    console.log("Ziua 0 este: " + getNumeZi(0));
    console.log("Ziua 1 este: " +getNumeZi(1)); 
    console.log("Ziua 5 este: " +getNumeZi(5)); 
    console.log("Ziua 9 este: " +getNumeZi(9)); 
} catch (e) {
    console.error("Eroare prinsa:", e.message);
}
  
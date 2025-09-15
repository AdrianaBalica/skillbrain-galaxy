function numeZi(ziua) {
    switch (ziua) {
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
        throw new Error("Zi invalida! Trebuie sa fie intre 1 si 7.");
    }
}
  
 
  try {
    console.log(numeZi(1)); 
    console.log(numeZi(5)); 
    console.log(numeZi(9)); 
} catch (e) {
    console.error("Eroare prinsa:", e.message);
}
  
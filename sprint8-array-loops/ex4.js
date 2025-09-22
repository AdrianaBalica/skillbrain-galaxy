const numaraVocale = (text) => {
    const listaVocale = "aeiouAEIOU";
    return [...text].filter(c => listaVocale.includes(c)).length;
};
  
console.log("Numarul vocalelor este " + numaraVocale("Acesta este un string de test"));
console.log("Numarul vocalelor este " + numaraVocale("ELIZA ESTE MEDIC"));
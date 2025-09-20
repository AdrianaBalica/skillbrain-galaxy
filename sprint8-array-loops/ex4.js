const text = "Acesta este un string de test";

const vocale = ([...text].filter(c => "aeiouAeiou".includes(c))).length;
console.log(vocale);
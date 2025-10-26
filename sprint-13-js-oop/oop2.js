class Masina {
    constructor (marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }

    getProprietati() {
        return `Masina [marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
    }
}

function main () {
    const masina1 = new Masina("Volvo", "XC-60", "Negru", "234 000");
    const masina2 = new Masina("Mazda", "CX-5", "Verde", "111 000");
    const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20 000");

    console.log(masina1.getProprietati());
    console.log(masina2.getProprietati());
    console.log(masina3.getProprietati());
}

class MasinaDeCurse extends Masina {
    constructor(marca, model, culoare, kilometraj) {
        super(marca, model, culoare, kilometraj);
    }

    participaLaCampionat(pozitiaInCampionat) {
        if (pozitiaInCampionat > 0) {
            console.log(`Am castigat locul ${pozitiaInCampionat}`);
        } else {
            console.log("Nu am castigat nici un premiu.");
        }
    }
}

function mainMasinaDeCurse() {
    const m1 = new MasinaDeCurse("Ferrari", "F40", "Rosu", "50 000");
    const m2 = new MasinaDeCurse("Lamborghini", "Huracan", "Galben", "30 000");

    console.log(m1.getProprietati());
    m1.participaLaCampionat(2);

    console.log(m2.getProprietati());
    m2.participaLaCampionat(0);
}

main();
console.log("---Masini de curse---");
mainMasinaDeCurse();
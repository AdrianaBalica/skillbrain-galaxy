const carti = [ 
    {
        titlu: "Hobbitul",
        autor: "J.R.R. Tolkien",
        esteCitita: true,
    },
    {
        titlu: "Micul Print",
        autor: "Antoine de Saint-Exupery",
        esteCitita: false,
    }
];

function afiseazaCarti(carti) {
    for (let i = 0; i < carti.length; i++) {
        const carte = carti[i];

        console.log(`${carte.titlu}" de ${carte.autor}`);

        if(carte.esteCitita) {
            console.log(`Ai citit deja " ${carte.titlu}" de ${carte.autor}`);
        } else {
            console.log(`Trebuie sa citesti "${carte.titlu}" de ${carte.autor}`);
        }
    }
}

afiseazaCarti(carti);
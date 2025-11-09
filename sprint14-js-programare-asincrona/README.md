# Frontend Mentor - Site-ul de turism spațial

![Previzualizare design pentru provocarea Space Tourism](./assets/preview.jpg)

## Prezentare generală

Aceasta este soluția pentru provocarea **[Frontend Mentor - Space Tourism Website](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZb)**.  
Scopul proiectului este de a recrea site-ul multi-pagină **Space Tourism**, folosind o abordare bazată pe **JavaScript** — toate secțiunile sunt generate dinamic, pe baza fișierului local `data.json`.

---

##  Provocarea

Scopul este să construiești un site de turism spațial care să semene cât mai mult cu designul furnizat.

### Utilizatorii ar trebui să poată:
- Vizualiza **layout-ul optim** pentru fiecare pagină, în funcție de dimensiunea ecranului (desktop, tabletă, mobil)
- Vedea **stările hover** pentru toate elementele interactive
- Naviga între paginile **Home**, **Destination**, **Crew** și **Technology**
- Schimba între tab-uri (planete, membri ai echipajului, tehnologii) pentru a vedea informații noi — fără reîncărcarea paginii

---

##  Cum funcționează

Proiectul este compus din următoarele fișiere:

- `index.html` – structura principală a aplicației  
- `data.json` – conține toate datele (texte, imagini, distanțe etc.)  
- `app.js` – logica aplicației, care generează secțiunile dinamic  
- `style.css` – toate stilurile, inclusiv designul responsive și animațiile  

### Funcționalități principale
-  **Randare dinamică** – fiecare secțiune este creată cu JavaScript pe baza datelor din `data.json`  
-  **Limitare a cererilor (rate limiting)** – previne cererile repetate excesiv  
-  **Design responsive** – funcționează perfect pe desktop, tabletă și mobil  
-  **Animații fade-in** – tranziții vizuale line între secțiuni  
-  **Tab-uri interactive** – schimbă conținutul fără a reîncărca pagina  

---

##  Structura proiectului

.
├── assets/
│ ├── crew/
│ ├── destination/
│ ├── home/
│ ├── technology/
│ └── shared/
│
├── data.json
├── index.html
├── app.js
├── style.css
└── README.md


---

## Tehnologii utilizate

- **HTML5** – structură semantică  
- **CSS3** – Flexbox, media queries, animații și efecte hover  
- **JavaScript (ES6+)** – manipulare DOM, fetch, Promise, generare dinamică  
- **Google Fonts** – fonturile *Bellefair* și *Barlow Condensed*  

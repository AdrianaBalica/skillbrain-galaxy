# Tema JS - OOP

## Obiectiv

Scopul acestei teme este să exersezi programarea orientată pe obiecte (OOP) în JavaScript, prin crearea și utilizarea claselor și moștenirii între clase.

---

## Cerințe

1. **Clasa `Masina`**
   - Proprietăți:
     - `marca` (ex: Volvo, Mazda, Dacia)
     - `model` (ex: XC-60, CX-5, BIGGSTER)
     - `culoare` (ex: Negru, Verde, Albastru)
     - `kilometraj` (ex: 234000, 111000, 20000)
   - Constructorul clasei trebuie să inițializeze aceste proprietăți folosind `this`.
   - Metodă getter numită `proprietati` care returnează proprietățile mașinii sub forma:
     ```
     Masina[marca=VOLVO, model=XC-60, culoare=Negru, kilometraj=234000]
     ```

2. **Funcția `main`**
   - Creează 3 instanțe ale clasei `Masina` folosind `new`.
   - Fiecare instanță trebuie să aibă valori diferite pentru proprietăți.
   - Afișează proprietățile mașinilor folosind getter-ul `proprietati`.

3. **Clasa `MasinaDeCurse`**
   - Moștenește clasa `Masina` folosind `extends`.
   - Constructorul clasei apelează `super()` pentru a inițializa proprietățile moștenite.
   - Metodă suplimentară `participaLaCampionat(pozitiaInCampionat)`:
     - Dacă `pozitiaInCampionat > 0`, afișează:  
       ```
       Am castigat locul <pozitiaInCampionat>
       ```
     - Dacă `pozitiaInCampionat <= 0`, afișează:  
       ```
       Nu am castigat niciun premiu
       ```

4. **Funcție pentru testarea mașinilor de curse**
   - Instanțiază două mașini de curse:
     1. Prima participă la campionat și câștigă locul 2.
     2. A doua nu participă la campionat.
   - Afișează proprietățile mașinilor folosind metoda definită anterior (`getProprietati`).

---

## Exemplu de utilizare

```javascript
const m1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
m1.participaLaCampionat(30);
// Output: Am castigat locul 30

m1.participaLaCampionat(-1);
// Output: Nu am castigat niciun premiu

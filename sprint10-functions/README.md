# 📘 Temă pentru acasă - Funcții (JavaScript)

## 1. Funcția `findSquare(num)`
Scrieți o funcție care returnează pătratul unui număr.
Funcția `findSquare(num)` returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).

### Exemple:
- Input: `num = 6` → Output: `36`  
- Input: `num = 0` → Output: `0`  
- Input: `num = -12` → Output: `144`  

---

## 2. Funcția `getRandom(start, end)`
Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă `start` și strict mai mic decât o variabilă `end`.  

Aceste două variabile sunt capetele intervalului pentru numărul generat: `[start, end)`  

Funcția `getRandom(start, end)` returnează un număr întreg aleator generat în intervalul definit de variabilele de început și sfârșit furnizate.  

### Exemple:
- Input: `start = 3, end = 5` → Output: `<un număr ≥ 3 și < 5>`  

### Hint:
Pentru a rezolva problema, va fi folosită funcția built-in a JavaScript-ului: `Math.random()`.  

### Notă:
Exemplele date sunt de natură abstractă pentru a nu crea confuzii. Numerele aleatoare generate nu pot fi estimate în avans, fiecare apel de funcție generând un nou număr aleator. Singura regulă impusă este respectarea intervalului dat de parametrii de început și de sfârșit.  

---

## 3. Funcția `letterCount(sir, litera)`
Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir.  

Funcția `letterCount()` returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.  

### Exemple:
- Input: `sir = "Îmi place programarea"`, `litera = "a"` → Output: `4`  
- Input: `sir = "Vreau să lucrez în IT"`, `litera = "r"` → Output: `2`  

### Notă:
Nu se ține cont de scrierea cu majuscule sau minuscule.  
Litera `A` și litera `a` trebuie numărate la calcularea numărului de apariții pentru `A` sau pentru `a`.  


---

## 4. Funcția `addNumber(...numere)`
Scrieți o funcție pentru a adăuga numere nelimitate.  

Funcția `addNumber()` returnează suma tuturor numerelor transmise ca argumente funcției.  
Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.  

### Exemple:
- Input: `addNumber(1, 2, 3)` → Output: `6`  
- Input: `addNumber(1, 2, 3, 4, 5)` → Output: `15`  

### Hint:
Pentru a rezolva problema, vom folosi operatorul **spread/rest (`...`)** pentru a defini argumentele funcției:  
`const addNumber = (...argumente) ⇒ {}`  

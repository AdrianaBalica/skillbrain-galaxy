# Tema: Obiecte și funcții în JavaScript

## 1. Funcție care creează un obiect pentru rețetă

Scrieți o funcție care creează un obiect pentru a păstra informații
despre rețeta ta preferată.

-   Proprietăți: **titlu** (string), **porții** (număr), **ingrediente**
    (array de string-uri).
-   Afișați pe rânduri separate (o instrucțiune `console.log` pentru
    fiecare) toate informațiile obiectului după crearea acestuia.

### Exemplu

**Input:**

``` js
titlu = "Pizza", portii = 3, ingrediente = ["sunca", "cas", "ketchup"]
```

**Output:**

``` js
{ titlu: "Pizza", portii: 3, ingrediente: ["sunca", "cas", "ketchup"] }
```

------------------------------------------------------------------------

## 2. Funcție care returnează un obiect nou fără anumite proprietăți

Funcția primește 2 parametri ca date de intrare. Unul dintre parametri
este obiectul, iar celălalt este proprietatea care nu se dorește să
persiste în rezultatul returnat.

### Exemplu

**Input:**

``` js
obiect = { a: 1, b: 2 }, proprietate = "b"
```

**Output:**

``` js
{ a: 1 }
```

🔗 Hint-uri utile: -
https://www.w3schools.com/howto/howto_js_remove_property_object.asp -
Există două moduri de accesare a elementelor prin chei: `obiect.cheie`
sau `obiect["cheie"]`

------------------------------------------------------------------------

## 3. Șir de obiecte pentru cărți

Creați un șir de obiecte în care fiecare obiect descrie o carte și are
proprietăți precum: - **titlu** (string) - **autor** (string) -
**esteCitita** (boolean, indică dacă ați citit-o)

### Cerință:

Scrieți o funcție care: 1. Iterează prin gama de cărți. 2. Pentru
fiecare carte, afișează titlul și autorul cărții astfel:\
`"Hobbitul de J.R.R. Tolkien"` 3. Utilizează o instrucțiune `if / else`
ce modifică rezultatul: - Dacă cartea a fost citită →
`Ai citit deja "Hobbitul" de J.R.R. Tolkien` - Dacă nu →
`Trebuie să citești "Hobbitul" de J.R.R. Tolkien`

### Exemplu

**Input:**

``` js
[ 
  { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
  { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }
]
```

**Output:**

    Carte 1 de Autor 1
    Ai citit deja "Carte 1" de Autor 1
    Carte 2 de Autor 2
    Trebuie sa citesti "Carte 2" de Autor 2
//Lab 4 TypeScrip 2 || Interfaces y Tipos en el archivo types-interfaces.ts

//2. Creamos el tipo Person
type Person = {
    name: string;
    age: number;
    email: string;
}

//3 Declaramos nuestra variable person
const person: Person = {
    name: "Cristhian Jesus Valadez Sanchez",
    age: 23,
    email: "cristhian.valadez@digitalfemsa.com"
}

//4. Definimos la interfaz Book
interface Book  {
    title: string;
    author: string;
    pages: number;
}

//5. Declaramos nuestra matriz
const books: Book[] = [
    {title: "Rompe el Circulo", author: "Colleen Hoover", pages: 532},
    {title: "Cien años de soledad", author: "Gabriel Garcia Marquez", pages: 352},
    {title: "A pesar de ti", author: "Colleen Hoover", pages: 613},
]

//6. Implementamos la funcion BookInfo
function displayBookInfo(book: Book){
    console.log("Titulo del libro: ", book.title);
    console.log("Autor del libro: ", book.author);
    console.log("Paginas del libro: ", book.pages);
}
//Iteramos sobre la matriz para sacar toda la info
for (const book of books){
    displayBookInfo(book);
}

console.log("--------------------------------------------------");
//Extra: mi solucion para evitar iterar con una sola funcion
function displayInfoLibros(libros: Book[]){
    libros.forEach(libro => {
        console.log("Titulo del libro: ", libro.title);
        console.log("Autor del libro: ", libro.author);
        console.log("Paginas del libro: ", libro.pages);
    });
}

displayInfoLibros(books);
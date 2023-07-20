//Leccion 4 del modulo TypeScript 2 

//Ejecicio 1
const message: string = "This is a message"; //Explicito el string
const count = 30; //Implicito el tipo number

function multiplyTest (a:number, b:number): number{
    return a * b;
}//El number se define como el valor de retorno de la funcion

//Ejercicio 2 Types Custom
type PersonTest = {
    name:string;
    age:number;
}

const persontest: PersonTest = {
    name:"Cristhian",
    age:30
}

//Ejercicio 3 Interface Custom
interface Product {
    id: number;
    name: string;
    price: number;
}

//A;adimos un ejemplo de objeto
const canasta: Product[] = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

function calculateTotal(products: Product[]){
    let total: number = 0;
    products.forEach(pr => {
        total += pr.price;
    });
    return total;
}

//Hacemos el ejercicio para usarlo
const total = calculateTotal(canasta);
console.log("El total de los productos es: ", total);
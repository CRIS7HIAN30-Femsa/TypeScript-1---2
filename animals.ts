//Practica 2 de la Lesson 3 Typescript 1

class Animal {
    //Propiedades o atributos
    name: string;
    
    //Constructor
    constructor (name: string){
        this.name = name;
    }

    //Metodos
    makeSound (){
        console.log("El animal si hace sonido xD");
    }
}

class Dog extends Animal{
    //Propiedades nuevas 
    breed: string;

    //Constructor
    constructor (name: string, breed: string){
        super(name);
        this.breed = breed;
    }

    //No retornamos nada en el metodo
    makeSound() : void{
        console.log("El perro ladra");
    }
}

const dog = new Dog("Buddy","Labrador Retriever");
dog.makeSound();
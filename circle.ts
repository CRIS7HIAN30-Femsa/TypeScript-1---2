//Practica 1 de la Lesson 3 TypeScript 1

class CircleLesson {
    //Props
    radius : number;

    //Inicializamos
    constructor (radius: number){
        this.radius = radius;
    }

    //Metodos
    calculateArea(){
        const area = Math.PI * (this.radius * this.radius);
        return area;
    }
}

const circleLesson = new CircleLesson(5);
const area = circleLesson.calculateArea();
console.log("El area del circulo es: ", area);
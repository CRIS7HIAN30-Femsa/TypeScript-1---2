//Lab 3 TypeScrip 1 || Lecciones de TypeScript en el archivo Shapes.ts

//La clase base la definimos como abstract para despues con los extends desarrollarla como clase y solo sea un molde de momento
abstract class Shape {
    color: string;
  
    constructor(color: string) {
      this.color = color;
    }
    
    //Hacemos uso de abstract para definir el metodo mas no desarrollarlo
    abstract getArea(): number;
  }
  
  class Circle extends Shape {
    radius: number; //Radio del circulo
  
    constructor(color: string, radius: number) {
      super(color);
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * (this.radius * this.radius);
    }
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
  
    constructor(color: string, width: number, height: number) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  // Creamos una instancia para el circulo
  const circle = new Circle("red", 5);
  console.log("Area de Ciculo: ", circle.getArea());
  
  // Creamos una instancia para el rectangulo
  const rectangle = new Rectangle("blue", 4, 6);
  console.log("Area del Rectangulo :", rectangle.getArea());
//Leccion 5 del modulo TypeScript 2 

//Mi Solucion
async function delay(ms: number): Promise<void>{
    return new Promise((resolve) => {
        setTimeout (() => {
            console.log(`El tiempo que esperaste fue de ${ms} milisegundos`);
            resolve();
        }, ms);
    });
}

delay(2000)
  .then(() => {
    console.log("La promesa se resolvió después de 2000 ms");
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });

  //Solucion planteada
//   function delay(ms: number): Promise<void> {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

//Parte 2 festchData
async function fetchDataTest(url: string): Promise<any>{
    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error("El error es: ", error);
        throw error;
    }
}
//Lab 5 TypeScrip 2 || Interfaces y Tipos en el archivo types-interfaces.ts

//Funcion 1
async function fetchData(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "success") {
        resolve({
          status: "success",
          data: [1, 2, 3, 4, 5],
        });
      } else if (url === "error"){
        reject("Esta url es un error");
      } else {
        reject("URL Invalida");
      }
    }, 2000);
  });
}

//Funcion 2
async function processData(data: any): Promise<any>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            const processedData = data.map((value: number) => {
                return value * 2;
            });
            resolve (processedData);
        }, 1000)
    });
}

//displayData
async function displayData(data: any): Promise<void>{
    console.log("La data procesada es: ", data);
}

//fetchAndProcessData
async function fetchAndProcessData(url: string): Promise <void>{
    try{
        const fetchedData = await fetchData(url);
        const processedData = await processData(fetchedData.data);
        await displayData(processedData);
    } catch(error) {
        console.error("El error es: ", error);
    }
}

fetchAndProcessData("success");
fetchAndProcessData("error");
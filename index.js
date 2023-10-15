const cardTemplate = function (nombre, imagen) {
  const template = `<div class="card">
                      <img id="flag-image" src="${imagen}" alt="flag" />
                      <h1 class="center">${nombre}</h1>
                    </div>`;
  const contenedorDePaises = document.querySelector('#countries');
  contenedorDePaises.innerHTML += template
};

const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(countries => {
      for (let index = 0; index < countries.length; index++) {
        let nombresPais = countries[index].name.common;
        let banderaPais = countries[index].flags.png;
        cardTemplate(nombresPais, banderaPais);
      }
  }) 
    // Here is where you'll need to add into the DOM all the countries received from API 

    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
  

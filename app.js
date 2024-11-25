let btn = document.getElementById("btn");
let container1 = document.querySelector(".container1");
let main = document.querySelector("main");
let div = document.querySelector(".div");

let input = document.querySelector("input");
let btn10 = document.querySelector("#btn10");
let Africa = document.querySelector("#Africa");
let Asia = document.querySelector("#Asia");

let Americas = document.querySelector("#Americas");
let Europe = document.querySelector("#Europe");
let Oceania = document.querySelector("#Oceania");
let Antarctic = document.querySelector("#Antarctic ");
let All = document.querySelector("#All");

let aside = document.querySelector("aside");
// let div1 = document.querySelector(".div1");

// btn.addEventListener("click", function () {
//   document.body.classList.toggle("box");
// });

async function getData(url) {
  let data = await fetch(url);
  let res = await data.json();

  return res;
}

getData("https://restcountries.com/v3.1/all")
  .then((data) => {
    console.log(data);

    data.forEach((val) => {
      console.log(val.region);
      let div1 = document.createElement("div");
      div1.classList.add("list");

      div.appendChild(div1);
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let div2 = document.createElement("div");
      h4.classList.add("h4");
      div2.classList.add("div22");

      img.classList.add("img");
      div1.append(img, h4, div2);
      img.src = val.flags.png;
      h4.textContent = val.name.common;
      div2.innerHTML = `
    
    <span class="span"><h4>Population:</h4>${val.population}</span>
        <span class="span"><h4>Region:</h4>${val.region}</span>
           <span class="span"><h4>Capital:</h4>${val.capital}</span>
    `;

      //////////////////////////////////////////////////////////////////////////////

      div1.onclick = () => {
        let countryName; // Replace with dynamic data
        location.replace(`./details.html?${val.area}`);
      };
      // data.forEach((data) => {
      //   console.log(data.area);
      // });
      //};
      ////////////////////////////////////////////////////////////////////////////////////

      //////////////////////////////////////////////////////////////////////////////////////

      //////////////////////////////////////////////////////////////////////////////////////////

      ///////////////////////////////////////////////////////////////////////////////////////////

      //////////////////////////////////////////////////////////////////////////////////////////

      /////////////////////////////////////////////////////////////////////////////////////////////

      /////////////////////////////////////////////////////////////////////////////////////////////
      let isdark = true;
      btn.addEventListener("click", function () {
        if (isdark) {
          document.body.style.backgroundColor = "black";
          input.classList.add("bg-secondary");
          input.classList.add("text-white");
          container1.classList.add("bg-secondary");
          btn10.classList.add("bg-secondary");
          container1.style.color = "white";
          document.body.style.color = "white";
          btn.style.color = "white";
          input.classList.add("input10");
          div1.classList.add("bg-secondary");

          // container1.classList.add("bg-dark");
          btn.innerHTML = `<i class="fa-regular fa-sun"></i>Light Mode`;
        } else {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
          container1.style.color = "black";
          btn.style.color = "black";
          container1.style.backgroundColor = "white";
          btn.innerHTML = `<i class="fa-regular fa-moon"></i>Dark Mode`;
          container1.classList.remove("bg-secondary");
          input.classList.remove("bg-secondary");
          div1.classList.remove("bg-secondary");
          input.classList.remove("text-white");
          btn10.classList.remove("bg-secondary");
          input.classList.remove("input10");
        }

        isdark = !isdark;
      });

      div1.addEventListener("mouseenter", () => {
        div1.classList.add("input");

        img.classList.add("img2");
      });

      div1.addEventListener("mouseleave", () => {
        div1.classList.remove("input");

        img.classList.remove("img2");
      });
    });
  })

  .catch((error) => {
    console.log(error);
  });
////////////////////////////////////////////////////////////////////////
//bunday ishlasa ham bo'ladi
// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     const query = input.value.trim(); // Get and trim input value
//     input.value = ""; // Clear input AFTER saving its value

//     if (query) {
//       getData(`https://restcountries.com/v3.1/name/${query}`).then((data) => {
//         div.innerHTML = ""; // Clear previous results

//         data.forEach((val) => {
//           let div1 = document.createElement("div");
//           div1.classList.add("list");
//           div1.textContent = val.name.common; // Example: Add country name
//           div.appendChild(div1); // Add new element to the container
//         });
//       });
//     }
//   }
// });

//////////////////////////////////////////////////////////////////////////////

Americas.addEventListener("click", () => {
  getData(`https://restcountries.com/v3.1/region/america`).then((data) => {
    div.innerHTML = "";
    data.forEach((val) => {
      let div1 = document.createElement("div");
      div1.classList.add("list");

      div.append(div1);
      let img = document.createElement("img");
      img.classList.add("img");
      let h4 = document.createElement("h4");
      let div2 = document.createElement("div");
      h4.style.paddingLeft = "20px";
      div2.style.paddingLeft = "20px";

      div1.append(img, h4, div2);
      img.src = val.flags.png;
      h4.textContent = val.name.common;
      div2.innerHTML = `

  <span class="span"><h4>Population:</h4>${val.population}</span>
      <span class="span"><h4>Region:</h4>${val.region}</span>
         <span class="span"><h4>Capital:</h4>${val.capital}</span>
  `;

      let isdark = true;
      btn.addEventListener("click", function () {
        if (isdark) {
          document.body.style.backgroundColor = "black";
          input.classList.add("bg-secondary");
          input.classList.add("text-white");
          container1.classList.add("bg-secondary");
          btn10.classList.add("bg-secondary");
          container1.style.color = "white";
          document.body.style.color = "white";
          btn.style.color = "white";

          div1.classList.add("bg-secondary");

          // container1.classList.add("bg-dark");
          btn.innerHTML = `<i class="fa-regular fa-sun"></i>Light Mode`;
        } else {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
          container1.style.color = "black";
          btn.style.color = "black";
          container1.style.backgroundColor = "white";
          btn.innerHTML = `<i class="fa-regular fa-moon"></i>Dark Mode`;
          container1.classList.remove("bg-secondary");
          input.classList.remove("bg-secondary");
          div1.classList.remove("bg-secondary");
          input.classList.remove("text-white");
          btn10.classList.remove("bg-secondary");
        }

        isdark = !isdark;

        div1.addEventListener("mouseenter", () => {
          div1.classList.add("input");

          img.style.width = "300px";
          img.style.height = "220px";
        });

        div1.addEventListener("mouseleave", () => {
          div1.classList.remove("input");
          img.style.width = "280px";
          img.style.height = "200px";
        });
      });
    });
  });
});

Asia.addEventListener("click", () => {
  getData(`https://restcountries.com/v3.1/region/asia`).then((data) => {
    div.innerHTML = "";
    data.forEach((val) => {
      let div1 = document.createElement("div");
      div1.classList.add("list");

      div.append(div1);
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let div2 = document.createElement("div");
      h4.style.paddingLeft = "20px";
      div2.style.paddingLeft = "20px";

      img.classList.add("img");
      div1.append(img, h4, div2);
      img.src = val.flags.png;
      h4.textContent = val.name.common;
      div2.innerHTML = `

      <span class="span"><h4>Population:</h4>${val.population}</span>
          <span class="span"><h4>Region:</h4>${val.region}</span>
             <span class="span"><h4>Capital:</h4>${val.capital}</span>
      `;
    });
  });
});

Europe.addEventListener("click", () => {
  getData(`https://restcountries.com/v3.1/region/europe`).then((data) => {
    div.innerHTML = "";
    data.forEach((val) => {
      let div1 = document.createElement("div");
      div1.classList.add("list");

      div.append(div1);
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let div2 = document.createElement("div");
      h4.style.paddingLeft = "20px";
      div2.style.paddingLeft = "20px";

      img.classList.add("img");
      div1.append(img, h4, div2);
      img.src = val.flags.png;
      h4.textContent = val.name.common;
      div2.innerHTML = `

      <span class="span"><h4>Population:</h4>${val.population}</span>
          <span class="span"><h4>Region:</h4>${val.region}</span>
             <span class="span"><h4>Capital:</h4>${val.capital}</span>
      `;
    });
  });
});

Oceania.addEventListener("click", () => {
  getData(`https://restcountries.com/v3.1/region/oceania`).then((data) => {
    div.innerHTML = "";
    data.forEach((val) => {
      let div1 = document.createElement("div");
      div1.classList.add("list");

      div.append(div1);
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let div2 = document.createElement("div");
      h4.style.paddingLeft = "20px";
      div2.style.paddingLeft = "20px";

      img.classList.add("img");
      div1.append(img, h4, div2);
      img.src = val.flags.png;
      h4.textContent = val.name.common;
      div2.innerHTML = `

      <span class="span"><h4>Population:</h4>${val.population}</span>
          <span class="span"><h4>Region:</h4>${val.region}</span>
             <span class="span"><h4>Capital:</h4>${val.capital}</span>
      `;
    });
  });
});

Antarctic.addEventListener("click", () => {
  getData(`https://restcountries.com/v3.1/region/antarctic`).then((data) => {
    div.innerHTML = "";
    data.forEach((val) => {
      let div1 = document.createElement("div");
      div1.classList.add("list");

      div.append(div1);
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let div2 = document.createElement("div");
      h4.style.paddingLeft = "20px";
      div2.style.paddingLeft = "20px";

      img.classList.add("img");
      div1.append(img, h4, div2);
      img.src = val.flags.png;
      h4.textContent = val.name.common;
      div2.innerHTML = `

      <span class="span"><h4>Population:</h4>${val.population}</span>
          <span class="span"><h4>Region:</h4>${val.region}</span>
             <span class="span"><h4>Capital:</h4>${val.capital}</span>
      `;
    });
  });
});

All.addEventListener("click", () => {
  getData(`https://restcountries.com/v3.1/all`).then((data) => {
    div.innerHTML = "";
    data.forEach((val) => {
      let div1 = document.createElement("div");
      div1.classList.add("list");

      div.append(div1);
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let div2 = document.createElement("div");
      h4.style.paddingLeft = "20px";
      div2.style.paddingLeft = "20px";

      img.classList.add("img");
      div1.append(img, h4, div2);
      img.src = val.flags.png;
      h4.textContent = val.name.common;
      div2.innerHTML = `

      <span class="span"><h4>Population:</h4>${val.population}</span>
          <span class="span"><h4>Region:</h4>${val.region}</span>
             <span class="span"><h4>Capital:</h4>${val.capital}</span>
      `;
    });
  });
});

getData("https://restcountries.com/v3.1/all").then((data) => {
  Africa.addEventListener("click", () => {
    div.innerHTML = "";
    let filterdata = data.filter((val) => val.region === "Africa");
    filterdata.forEach((val) => {
      let div1 = document.createElement("div");
      div1.classList.add("list");

      div.append(div1);
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let div2 = document.createElement("div");
      h4.style.paddingLeft = "20px";
      div2.style.paddingLeft = "20px";

      img.classList.add("img");
      div1.append(img, h4, div2);
      img.src = val.flags.png;
      h4.textContent = val.name.common;
      div2.innerHTML = `

      <span class="span"><h4>Population:</h4>${val.population}</span>
          <span class="span"><h4>Region:</h4>${val.region}</span>
             <span class="span"><h4>Capital:</h4>${val.capital}</span>
      `;
    });
  });
});

input.addEventListener("mouseenter", () => {
  input.style.backgroundColor = "white";

  input.classList.remove("bg-secondary");
  input.classList.add("bg-primary");
  input.classList.add("text-white");
  input.style.transition = "0.5s";
  input.style.cursor = "pointer";
});

input.addEventListener("mouseleave", () => {
  input.style.backgroundColor = "white";

  input.classList.remove("bg-secondary");
  input.classList.remove("bg-primary");
  input.classList.add("text-white");
  input.style.transition = "2s";
});

input.addEventListener("keydown", (e) => {
  getData(`https://restcountries.com/v3.1/all`).then((data) => {
    div.innerHTML = "";

    let datas = data.filter((val) =>
      val.name.common.toLowerCase().includes(input.value.toLowerCase())
    );
    datas.forEach((val) => {
      let div1 = document.createElement("div");
      div1.classList.add("list");

      div.append(div1);
      let img = document.createElement("img");
      let h4 = document.createElement("h4");
      let div2 = document.createElement("div");
      h4.style.paddingLeft = "20px";
      div2.style.paddingLeft = "20px";
      img.classList.add("img");
      div1.append(img, h4, div2);
      img.src = val.flags.png;
      h4.textContent = val.name.common;
      div2.innerHTML = `
  
      <span class="span"><h4>Population:</h4>${val.population}</span>
          <span class="span"><h4>Region:</h4>${val.region}</span>
             <span class="span"><h4>Capital:</h4>${val.capital}</span>
      `;
    });
  });
});

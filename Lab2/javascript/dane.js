function dodaj(A, B, C) {
  let table = document.getElementById("container");

  let row = document.createElement("tr");

  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let image = document.createElement("img");
  image.src = A;

  c1.appendChild(image);
  c2.innerText = B;
  c3.innerText = C;

  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);

  table.appendChild(row);
}

function reset() {
  document.querySelector("#container").innerHTML = "";
  let table = document.getElementById("container");

  let row = document.createElement("tr");

  let c1 = document.createElement("th");
  let c2 = document.createElement("th");
  let c3 = document.createElement("th");

  c1.innerText = "Zdjęcie";
  c2.innerText = "Tytuł";
  c3.innerText = "Opis";

  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);

  table.appendChild(row);
}

async function generuj() {
  reset();

  let kolej = document.getElementById("order").value;
  let szuk = document.getElementById("search").value.toLowerCase();
  let strona = await fetch("https://dummyjson.com/products");
  let plik = await strona.json();
  if (szuk != "") {
    produkty = plik.products.filter((element) => filtr(element, szuk));
  } else {
    produkty = plik.products;
  }

  if (kolej == "increase") {
    produkty.sort(function (a, b) {
      return a.id - b.id;
    });
  } else if (kolej == "decrease") {
    produkty.sort(function (a, b) {
      return b.id - a.id;
    });
  }

  produkty.forEach((element) =>
    dodaj(element.images[0], element.title, element.description)
  );
}

function filtr(element, word) {
  if (
    element.title.toLowerCase().includes(word) ||
    element.description.toLowerCase().includes(word) ||
    element.category.toLowerCase().includes(word)
  ) {
    return true;
  }
  if (element.brand != null) {
    if (element.brand.toLowerCase().includes(word)) {
      return true;
    }
  }
  for (let i = 0; i < element.tags.length; i++) {
    if (element.tags[i].toLowerCase().includes(word)) {
      return true;
    }
  }
  return false;
}

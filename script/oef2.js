const toestellen = [
  {
    id: 1,
    type: "huishoud",
    benaming: "wasmachine",
    type: "bosh",
    kleur: "rood",
    onderhoud: [
      {
        id: 1,
        datum: "29/06/2020",
        omschrijving: "draait niet meer",
        opgelost: true,
      },
      {
        id: 2,
        datum: "10/02/2022",
        omschrijving: "deur stuk",
        opgelost: true,
      },
    ],
  },
  {
    id: 2,
    type: "huidhoud",
    benaming: "droogkast",
    type: "bosh",
    kleur: "wit",
    onderhoud: [
      {
        id: 1,
        datum: "12/01/2023",
        omschrijving: "knoppen werken niet meer",
        opgelost: true,
      },
      {
        id: 2,
        datum: "12/08/2024",
        omschrijving: "filter stuk",
        opgelost: false,
      },
    ],
  },
];

// ophalen classes/divs van html
const todoDiv = document.querySelector(".todo")
const afgehandeldDiv = document.querySelector(".afgehandeld")

toestellen.forEach(machine => {
  machine.onderhoud.forEach(probleem => {
    
  });
  
  const opdrachtenLijst = document.createElement("p")
  opdrachtenLijst.innerHTML = `${machine.benaming} - ${machine.onderhoud.omschrijving}`
  todoDiv.appendChild(opdrachtenLijst)
});
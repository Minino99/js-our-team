// 1 Milestone
console.log("------------ 1 Milestone ------------");

const elencoLavoratori = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "img/angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "img/walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "img/scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "img/barbara-ramos-graphic-designer.jpg"
  },
];

for (let i = 0; i < elencoLavoratori.length; i++) {
  console.table(elencoLavoratori[i]);
}

// 2 Milestone + BONUS

for (let i = 0; i < elencoLavoratori.length; i++) {
  const container = document.getElementById("bodycontainer");
  container.innerHTML += (`          <div class="team-card">
 <div class="card-image">
   <img
     src="${elencoLavoratori[i].foto}"
     alt="${elencoLavoratori[i].nome}"
   />
 </div>
 <div class="card-text">
   <h3>${elencoLavoratori[i].nome}</h3>
   <p>${elencoLavoratori[i].ruolo}</p>
 </div>
</div>`);
}

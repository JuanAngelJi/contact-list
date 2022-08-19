const contactList = [
  { name: "Juan", apellido: "Martinez" },

  { name: "Julian", apellido: "Gaitan" },

  { name: "Camilo", apellido: "Gonzales" },

  { name: "Daniel", apellido: "Carrillo" },

  { name: "Andrea", apellido: "Moncada" },
];

contactList.push({ name: "Felipe", apellido: "Torres" });

contactList.splice(3, 1);

console.log(contactList);

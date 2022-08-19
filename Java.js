const contactList = [
  { name: "Juan", apellido: "Martinez" },

  { name: "Julian", apellido: "Gaitan" },

  { name: "Camilo", apellido: "Gonzales" },

  { name: "Daniel", apellido: "Carrillo" },

  { name: "Andrea", apellido: "Moncada" },
];

contactList.push({ name: "Felipe", apellido: "Torres" });

contactList.splice(3, 1);

contactList.push({
  name: window.prompt("Ingrese nombre del contacto que desea agregar"),
  apellido: window.prompt("Ingrese apellido del contacto que desea agregar"),
});

console.log(contactList);

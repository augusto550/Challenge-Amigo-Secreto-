// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  // Evitar duplicados
  if (amigos.includes(nombre)) {
    alert("Este nombre ya fue agregado.");
    input.value = "";
    input.focus();
    return;
  }

  amigos.push(nombre);
  input.value = "";
  input.focus();
  actualizarLista();
}

// Función para actualizar la lista visible
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debe agregar al menos un nombre para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto es: <strong>${elegido}</strong></li>`;
}
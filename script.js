function agregarItem(tipo) {
  const inputId = {
    habilidades: 'nuevo-habilidad',
    experiencia: 'nueva-experiencia',
    formacion: 'nueva-formacion',
    complementaria: 'nueva-complementaria'
  }[tipo];

  const listId = {
    habilidades: 'habilidades-list',
    experiencia: 'experiencia-list',
    formacion: 'formacion-list',
    complementaria: 'complementaria-list'
  }[tipo];

  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const texto = input.value.trim();
  if (texto === '') return;

  if (tipo === 'experiencia') {
    const div = document.createElement('div');
    div.className = 'job border-l-4 border-blue-500 pl-3 mb-4';

    div.innerHTML = `
      <p class="job-title font-bold text-lg text-gray-800">${texto}</p>
      <p><strong>Logros:</strong></p>
      <ul>
        <li>Detalle aquí</li>
      </ul>
      <button onclick="this.parentElement.remove()" class="mt-1 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
    `;
    list.appendChild(div);
  } else {
    const li = document.createElement('li');
    li.className = 'mb-2 flex justify-between items-center';
    li.innerHTML = `
      <span>${texto}</span>
      <button onclick="this.parentElement.remove()" class="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Eliminar</button>
    `;
    list.appendChild(li);
  }

  input.value = '';
  input.focus();
}
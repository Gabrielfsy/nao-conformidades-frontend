const cursos = [
  {
    titulo: 'JavaScript do Zero ao Avançado',
    carga: '24h',
    nivel: 'Iniciante',
    avaliacao: 'Quiz por módulo',
    progressao: 'Linear (módulo a módulo)',
  },
  {
    titulo: 'React para aplicações reais',
    carga: '18h',
    nivel: 'Intermediário',
    avaliacao: 'Projeto prático',
    progressao: 'Por pré-requisitos',
  },
];

const catalogoEl = document.getElementById('catalogo');
const totalCursosEl = document.getElementById('totalCursos');
const cursoFormEl = document.getElementById('cursoForm');

function renderCatalogo() {
  catalogoEl.innerHTML = '';

  cursos.forEach((curso) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <span class="badge">${curso.nivel}</span>
      <h3>${curso.titulo}</h3>
      <p><strong>Carga horária:</strong> ${curso.carga}</p>
      <p><strong>Avaliação:</strong> ${curso.avaliacao}</p>
      <p><strong>Sequência:</strong> ${curso.progressao}</p>
    `;
    catalogoEl.appendChild(card);
  });

  totalCursosEl.textContent = `Total de cursos cadastrados: ${cursos.length}`;
}

cursoFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(cursoFormEl);
  const novoCurso = {
    titulo: formData.get('titulo').toString().trim(),
    carga: formData.get('carga').toString().trim(),
    nivel: formData.get('nivel').toString(),
    avaliacao: formData.get('avaliacao').toString(),
    progressao: formData.get('progressao').toString(),
  };

  if (!novoCurso.titulo || !novoCurso.carga) {
    return;
  }

  cursos.push(novoCurso);
  cursoFormEl.reset();
  renderCatalogo();
});

document.getElementById('explorarCursos').addEventListener('click', () => {
  document.getElementById('catalogoSection').scrollIntoView({ behavior: 'smooth' });
});

renderCatalogo();

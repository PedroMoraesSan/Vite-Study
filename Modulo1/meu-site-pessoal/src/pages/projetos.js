// Dados dos projetos
const projetos = [
    {
      id: 1,
      titulo: 'Projeto Vite',
      descricao: 'Meu primeiro projeto usando Vite como ferramenta de build',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'Vite'],
      imagem: '/imagens/projeto-vite.jpg'
    },
    {
      id: 2,
      titulo: 'Website Responsivo',
      descricao: 'Um site responsivo criado com técnicas modernas de CSS',
      tecnologias: ['HTML', 'CSS', 'Responsive Design'],
      imagem: '/imagens/website-responsivo.jpg'
    },
    {
      id: 3,
      titulo: 'Aplicação JavaScript',
      descricao: 'Uma aplicação interativa feita com JavaScript puro',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      imagem: '/imagens/app-javascript.jpg'
    }
  ];
  
  // Função para renderizar os projetos
  function renderizarProjetos() {
    const container = document.getElementById('projetos-container');
    
    if (!container) return;
    
    projetos.forEach(projeto => {
      const projetoEl = document.createElement('div');
      projetoEl.classList.add('projeto-card');
      
      // Tente carregar a imagem, mas use um fallback se não existir
      let imagemHTML = '';
      try {
        // No Vite, isso funcionaria com as imagens corretas
        imagemHTML = `<div class="projeto-imagem">
                        <img src="${projeto.imagem}" alt="${projeto.titulo}" 
                        onerror="this.src='/imagens/placeholder.jpg'">
                      </div>`;
      } catch (e) {
        imagemHTML = `<div class="projeto-imagem placeholder">
                        <span>${projeto.titulo[0]}</span>
                      </div>`;
      }
      
      projetoEl.innerHTML = `
        ${imagemHTML}
        <div class="projeto-info">
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
          <div class="projeto-tech">
            ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      `;
      
      container.appendChild(projetoEl);
    });
  }
  
  // Renderiza os projetos quando a página carrega
  document.addEventListener('DOMContentLoaded', renderizarProjetos);
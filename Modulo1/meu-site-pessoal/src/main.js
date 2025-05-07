import './style.css'

// Adiciona navegação em todas as páginas
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/sobre.html">Sobre</a></li>
      <li><a href="/projetos.html">Projetos</a></li>
      <li><a href="/contato.html">Contato</a></li>
    </ul>
  `;
  document.body.prepend(nav);
  
  // Adiciona footer comum em todas as páginas
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} - Meu Site Pessoal</p>
    <p>Criado com Vite</p>
  `;
  document.body.appendChild(footer);
  
  // Destaca o link atual na navegação
  const currentPage = window.location.pathname;
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage || 
        (currentPage === '/' && link.getAttribute('href') === '/')) {
      link.classList.add('active');
    }
  });
});

// Exemplo de uso de importação de imagens no Vite
import.meta.glob('/public/imagens/*');

// Exemplo simples de módulo
export function formatarData(data) {
  return new Intl.DateTimeFormat('pt-BR').format(data);
}
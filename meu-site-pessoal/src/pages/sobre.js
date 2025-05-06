// Adiciona animação simples à lista de habilidades
document.addEventListener('DOMContentLoaded', () => {
    const skillsList = document.querySelector('.skills-list');
    
    if (skillsList) {
      const skills = skillsList.querySelectorAll('li');
      
      skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateX(-20px)';
        skill.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
          skill.style.opacity = '1';
          skill.style.transform = 'translateX(0)';
        }, 100 * index);
      });
    }
  });
  
  // Demonstração de uso de módulos ES
  import { formatarData } from '../main.js';
  
  // Adiciona a data da última atualização
  const ultimaAtualizacao = document.createElement('p');
  ultimaAtualizacao.classList.add('last-update');
  ultimaAtualizacao.textContent = `Última atualização: ${formatarData(new Date())}`;
  
  document.querySelector('.content-section').appendChild(ultimaAtualizacao);
// Captura o formulário de contato
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contato-form');
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Captura os dados do formulário
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Em um projeto real, você enviaria esses dados para um servidor/API
        console.log('Dados do formulário:', data);
        
        // Feedback visual para o usuário
        alert('Mensagem enviada com sucesso! (Simulação)');
        form.reset();
      });
    }
  });
  
  // Adiciona validação simples aos campos
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.value.trim() === '' && input.hasAttribute('required')) {
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });
    
    input.addEventListener('focus', () => {
      input.classList.remove('error');
    });
  });
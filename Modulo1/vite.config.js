import { defineConfig } from 'vite'

export default defineConfig({
  // Servidor de desenvolvimento
  server: {
    port: 3000,
    open: true, // abre o navegador automaticamente
  },
  // Configuração de build
  build: {
    outDir: 'dist',
    // Suporte para múltiplos pontos de entrada (páginas)
    rollupOptions: {
      input: {
        main: 'index.html',
        sobre: 'sobre.html',
        projetos: 'projetos.html',
        contato: 'contato.html',
      },
    },
  },
  // Configuração para publicar em subpastas (caminhos base)
  // base: '/meu-site-pessoal/', // Descomente se for publicar em um subdiretório
})
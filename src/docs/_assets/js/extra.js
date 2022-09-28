// We need to disable mkdocs-material theme shortcuts to allow editing docoff-react-preview element content
document.querySelector('textarea').addEventListener('keydown', (e) => {
  e.stopPropagation();
});


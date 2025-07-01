
function highlightTool(message) {
  const info = document.getElementById('tool-info');
  info.innerText = message;
  info.style.opacity = 0;
  setTimeout(() => {
    info.style.opacity = 1;
  }, 100);
}

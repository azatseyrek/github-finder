export const themeSwitcher = () => {
  const theme = localStorage.getItem('theme');
  const element = document.getElementById('theme');
  element.setAttribute('data-theme', theme);
};

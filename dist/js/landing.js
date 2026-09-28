const fog = document.querySelector('.fog-section');
const updateFog = () => {
  const progress = Math.min(1, Math.max(0, (window.scrollY - fog.offsetTop + window.innerHeight * .65) / (window.innerHeight * .8)));
  fog.style.setProperty('--clarity', progress);
  if (progress > .55) fog.classList.add('is-clear'); else fog.classList.remove('is-clear');
};
window.addEventListener('scroll', updateFog, {passive:true});
updateFog();

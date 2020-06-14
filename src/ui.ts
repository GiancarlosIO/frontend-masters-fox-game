export const modFox = function modFox(state) {
  const foxNode = document.querySelector('.fox');

  if (foxNode) {
    foxNode.className = `fox fox-${state}`;
  }
};

export const modScene = function modeScene(state) {
  const sceneNode = document.querySelector('.game');

  if (sceneNode) {
    sceneNode.className = `game ${state}`;
  }
};

export const togglePoopBag = function togglePoopBag(show) {
  const poopBagNode = document.querySelector('.poop-bag');

  if (poopBagNode) {
    poopBagNode.classList.toggle('hidden', !show);
  }
};

export const writeModal = function writeModal(text = '') {
  const modalNode = document.querySelector('.modal');

  if (modalNode) {
    modalNode.innerHTML = `<div class="modal-inner">${text}</div>`;
  }
};

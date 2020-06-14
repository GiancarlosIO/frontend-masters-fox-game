import { ICONS } from './constants';

/**
 * Use the modulo operator to loop up an array
 * If you want to go back:
 * nextIndex = (2 + currentIndex) % array.length
 * If you want to go next:
 * nextIndex = (1 + currentIndex) % array.length
 *
 * Remember! In a modulo operator, if the first number is less than second number it will returns the first number.
 * Ex: 2 % 6 = 2
 */

export const toggleHighlightedClassName = (icon, show) => {
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    ?.classList.toggle('highlighted', show);
};

export default function initButtons(handleUserActions) {
  let selectedIcon = 0;

  function buttonClick({ target }) {
    if (target?.classList.contains('left-btn')) {
      toggleHighlightedClassName(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlightedClassName(selectedIcon, true);
    } else if (target.classList.contains('right-btn')) {
      toggleHighlightedClassName(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlightedClassName(selectedIcon, true);
    } else {
      handleUserActions(ICONS[selectedIcon]);
    }
  }

  document.querySelector('.buttons')?.addEventListener('click', buttonClick);
}

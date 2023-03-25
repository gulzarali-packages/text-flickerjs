function handleViewMoreClick(event) {
    let lmEl = event.parentNode.querySelector('.lm');
    let lmText = lmEl.getAttribute('data-lmText');
    lmEl.innerText = lmText;
  
    let viewLessButton = createViewLessButton();
    lmEl.insertAdjacentElement('afterend', viewLessButton);
    event.remove();
  }
  
  function handleViewLessClick(event) {
    let lmEl = event.parentNode.querySelector('.lm');
    let lmWord = lmEl.getAttribute('data-lmWord');
    let lmText = lmEl.getAttribute('data-lmText');
    let text = lmEl.innerText.trim();
    let lmWordsArray = lmText.trim().split(' ');
    let totalLmWords = lmWordsArray.length;
    let appendedWords = lmWordsArray.slice(0, parseFloat(lmWord));
    let appendedWordsStr = appendedWords.join(' ');
    let finalString = text + ' ' + appendedWordsStr;
    let currentWordsCount = finalString.split(' ');
    let remainingWords = parseFloat(totalLmWords) - parseFloat(currentWordsCount.length);
  
    lmEl.innerText = finalString;
  
    if (remainingWords > 0) {
      let viewMoreButton = createViewMoreButton();
      lmEl.insertAdjacentElement('afterend', viewMoreButton);
      viewMoreButton.addEventListener('click', function() {
        handleViewMoreClick(this);
      });
    }
  
    event.remove();
  }
  
  function createViewMoreButton() {
    let viewMoreButton = document.createElement('button');
    viewMoreButton.innerText = 'View More';
    viewMoreButton.setAttribute('style', 'color:blue;border:rosybrown');
    return viewMoreButton;
  }
  
  function createViewLessButton() {
    let viewLessButton = document.createElement('button');
    viewLessButton.innerText = 'View Less';
    viewLessButton.setAttribute('style', 'color:blue;border:rosybrown');
    return viewLessButton;
  }
  
  function handleLmElements() {
    let lmEls = document.querySelectorAll('.lm');
    
    for (let i = 0; i < lmEls.length; i++) {
      let lmEl = lmEls[i];
      let lmWord = lmEl.getAttribute('data-lmWord');
      let lmText = lmEl.getAttribute('data-lmText');
      let text = lmEl.innerText.trim();
      let lmWordsArray = lmText.trim().split(' ');
      let totalLmWords = lmWordsArray.length;
      let appendedWords = lmWordsArray.slice(0, parseFloat(lmWord));
      let appendedWordsStr = appendedWords.join(' ');
      let finalString = text + ' ' + appendedWordsStr;
      let currentWordsCount = finalString.split(' ');
      let remainingWords = parseFloat(totalLmWords) - parseFloat(currentWordsCount.length);
    
      lmEl.innerText = finalString;
    
      if (remainingWords > 0) {
        let viewMoreButton = createViewMoreButton();
        lmEl.insertAdjacentElement('afterend', viewMoreButton);
        viewMoreButton.addEventListener('click', function() {
          handleViewMoreClick(this);
        });
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    handleLmElements();
  });
  
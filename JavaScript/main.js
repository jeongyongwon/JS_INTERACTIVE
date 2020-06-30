/* 오른쪽,왼쪽 이동 */
(function() {

    const eventClick = document.querySelector('.event-click');
    const rightWall = document.querySelector('.right-wall');
    let i = 1;
  
    function goRight(event) {
      const nowContainer = document.querySelector(`.container:nth-child(${i})`);
      if (event.target.classList.contains('right-wall') || event.target.parentNode.classList.contains('right-wall')) {
        i++;
        const nextContainer = document.querySelector(`.container:nth-child(${i})`);
        nowContainer.classList.remove('move-on');
        nowContainer.classList.add('hidden-left');
        nextContainer.classList.remove('hidden-right');
        nextContainer.classList.add('move-on');
      };
    };
  
    function goLeft(event) {
      const nowContainer = document.querySelector(`.container:nth-child(${i})`);
      if (event.target.classList.contains('left-wall') || event.target.parentNode.classList.contains('left-wall')) {
        i--;
        const nextContainer = document.querySelector(`.container:nth-child(${i})`);
        nowContainer.classList.remove('move-on');
        nowContainer.classList.add('hidden-right');
        nextContainer.classList.remove('hidden-left');
        nextContainer.classList.add('move-on');
      };
    };
  
    eventClick.addEventListener('click', goRight);
    eventClick.addEventListener('click', goLeft);
  
  })();
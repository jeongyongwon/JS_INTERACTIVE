/* 오른쪽,왼쪽 이동 */
(function() {
    KeyboardEnabled = true
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
        console.log(event);
        console.log(event.target);
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
        console.log(event);
        console.log(event.target);
      };
    };
  
    eventClick.addEventListener('click', goRight);
    eventClick.addEventListener('click', goLeft);
    
    window.addEventListener('keydown', function( ev ) {
      if (i !== 1 && ev.keyCode === 37) {
        const nowContainer = document.querySelector(`.container:nth-child(${i})`);
        i--;
        const nextContainer = document.querySelector(`.container:nth-child(${i})`);
        nowContainer.classList.remove('move-on');
        nowContainer.classList.add('hidden-right');
        nextContainer.classList.remove('hidden-left');
        nextContainer.classList.add('move-on');
        console.log(event);
        console.log(event.target);
      }
    });

    window.addEventListener('keydown', function( ev ) {
      if (i !== 4 && ev.keyCode === 39) {
        const nowContainer = document.querySelector(`.container:nth-child(${i})`);
        i++;
        const nextContainer = document.querySelector(`.container:nth-child(${i})`);
        nowContainer.classList.remove('move-on');
        nowContainer.classList.add('hidden-left');
        nextContainer.classList.remove('hidden-right');
        nextContainer.classList.add('move-on');
        console.log(event);
        console.log(event.target);
      }
		});
  })();
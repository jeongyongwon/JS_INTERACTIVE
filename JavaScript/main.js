/* 오른쪽,왼쪽 이동 */
(function() {

    const eventClick = document.querySelector('.event-click');
    const rightWall = document.querySelector('.right-wall');
    const containerInner = document.querySelector('.container-inner');
    

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
      if ((event.target.classList.contains('right-wall') || event.target.parentNode.classList.contains('right-wall')) && i === 2) {
        setTimeout(nowPageRemove, 1000);
      }
      
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
      if (i === 1) {
        nowPage();
      }
    };

    function nowPage() {
      if (!containerInner.classList.contains('now')) {
        containerInner.classList.add('now');
      }
    };

    function nowPageRemove() {
      containerInner.classList.remove('now');
    }

    function goDesription(event) {
      const contain1item2 = document.querySelector('.total:nth-child(1) .container:nth-child(1) .item:nth-child(3)')
      const contain4item1 = document.querySelector('.total:nth-child(1) .container:nth-child(4) .item:nth-child(2)')
      const contain4item2 = document.querySelector('.total:nth-child(1) .container:nth-child(4) .item:nth-child(3)')
      if (event.target === contain1item2) {
        contain1item2.style.opacity = 0.3;
      }
      if (event.target === contain4item1) {
        contain4item1.style.opacity = 0.3;
      }
      if (event.target === contain4item2) {
        contain4item2.style.opacity = 0.3;
      }

    }
    function deleteDesription(event) {
      const contain1item2 = document.querySelector('.total:nth-child(1) .container:nth-child(1) .item:nth-child(3)')
      const contain4item1 = document.querySelector('.total:nth-child(1) .container:nth-child(4) .item:nth-child(2)')
      const contain4item2 = document.querySelector('.total:nth-child(1) .container:nth-child(4) .item:nth-child(3)')
      if (event.target === contain1item2) {
        contain1item2.style.opacity = 1; 
      }
      if (event.target === contain4item1) {
        contain4item1.style.opacity = 1;
        
      }
      if (event.target === contain4item2) {
        contain4item2.style.opacity = 1;
      }
    }

    nowPage();
    eventClick.addEventListener('click', goRight);
    eventClick.addEventListener('click', goLeft);
    eventClick.addEventListener('mouseover', goDesription);
    eventClick.addEventListener('mouseout', deleteDesription);
    
    window.addEventListener('keydown', function(event) {
      if (i !== 4 && event.keyCode == 39) {
        const nowContainer = document.querySelector(`.container:nth-child(${i})`);
        i++;
        const nextContainer = document.querySelector(`.container:nth-child(${i})`);
        nowContainer.classList.remove('move-on');
        nowContainer.classList.add('hidden-left');
        nextContainer.classList.remove('hidden-right');
        nextContainer.classList.add('move-on');
      if (i === 2) {
        setTimeout(nowPageRemove, 1000);
      } 
      console.log(i)
      };
    })

    window.addEventListener('keydown', function(event) {
      if (i !== 1 && event.keyCode == 37) {
        const nowContainer = document.querySelector(`.container:nth-child(${i})`);
        i--;
        const nextContainer = document.querySelector(`.container:nth-child(${i})`);
        nowContainer.classList.remove('move-on');
        nowContainer.classList.add('hidden-right');
        nextContainer.classList.remove('hidden-left');
        nextContainer.classList.add('move-on');
        if (i === 1) {
          nowPage();
      };
      console.log(i)
      }
    })
    
    
  })();


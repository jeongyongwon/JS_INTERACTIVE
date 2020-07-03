
/* 오른쪽,왼쪽 이동 */
(function() {

    let eventClick = document.querySelector('.event-click');
    const rightWall = document.querySelector('.right-wall');
    const containerInner = document.querySelector('.container-inner');
    const firstPage = document.querySelector('.total')
    

    let i = 1;
    let j = 1;

    function goRight(event) {
      const nowContainer = document.querySelector(`.total:nth-child(${j}) .container:nth-child(${i})`);
      if (event.target.classList.contains('right-wall') || event.target.parentNode.classList.contains('right-wall')) {
        i++;
        const nextContainer = document.querySelector(`.total:nth-child(${j}) .container:nth-child(${i})`);
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
      const nowContainer = document.querySelector(`.total:nth-child(${j}) .container:nth-child(${i})`);
      if (event.target.classList.contains('left-wall') || event.target.parentNode.classList.contains('left-wall')) {
        i--;
        const nextContainer = document.querySelector(`.total:nth-child(${j}) .container:nth-child(${i})`);
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
      const contain1item2 = document.querySelector('.total:nth-child(2) .container:nth-child(1) .item:nth-child(3)')
      const contain4item1 = document.querySelector('.total:nth-child(2) .container:nth-child(4) .item:nth-child(2)')
      const contain4item2 = document.querySelector('.total:nth-child(2) .container:nth-child(4) .item:nth-child(3)')
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
      const contain1item2 = document.querySelector('.total:nth-child(2) .container:nth-child(1) .item:nth-child(3)')
      const contain4item1 = document.querySelector('.total:nth-child(2) .container:nth-child(4) .item:nth-child(2)')
      const contain4item2 = document.querySelector('.total:nth-child(2) .container:nth-child(4) .item:nth-child(3)')
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

    
    eventClick.addEventListener('click', goRight);
    eventClick.addEventListener('click', goLeft);
    eventClick.addEventListener('mouseover', goDesription);
    eventClick.addEventListener('mouseout', deleteDesription);
    
    window.addEventListener('keydown', function(event) {
      if (i !== 4 && event.keyCode === 39) {
        if (eventClick !== firstPage) {

          const nowContainer = document.querySelector(`.total:nth-child(${j}) .container:nth-child(${i})`);
          i++;
          const nextContainer = document.querySelector(`.total:nth-child(${j}) .container:nth-child(${i})`);
          nowContainer.classList.remove('move-on');
          nowContainer.classList.add('hidden-left');
          nextContainer.classList.remove('hidden-right');
          nextContainer.classList.add('move-on');

          if (i === 2) {
            setTimeout(nowPageRemove, 1000);
          } 

        }
      };
    })

    window.addEventListener('keydown', function(event) {
      if (i !== 1 && event.keyCode === 37) {
        if (eventClick !== firstPage) {

          const nowContainer = document.querySelector(`.total:nth-child(${j}) .container:nth-child(${i})`);
          i--;
          const nextContainer = document.querySelector(`.total:nth-child(${j}) .container:nth-child(${i})`);
          nowContainer.classList.remove('move-on');
          nowContainer.classList.add('hidden-right');
          nextContainer.classList.remove('hidden-left');
          nextContainer.classList.add('move-on');
          if (i === 1) {
            nowPage();
          };
        }
      }
    })


    function BlackToGreen() {
      const blackPage = document.querySelector('.blackPage')
      const greenPage = document.querySelector('.greenPage')
    
      
      greenPage.classList.remove('hidden-bottom')
      greenPage.classList.add('Viewing')
    
        
    }
    
    
    function GreenToIntro() {
        
        const greenPage = document.querySelector('.greenPage')
        const IntroPage = document.querySelector('.IntroPage')
    
        
        greenPage.classList.remove('Viewing')
        IntroPage.classList.remove('unViewing')
        
        IntroPage.classList.add('Viewing')
    
    };
    
    
    function GridHover() {
      const GridLayer = document.querySelectorAll('.layer')
      const GridIndex = 0
      for(let i=0; i<GridLayer.length; i++) {
        
        GridLayer[i].classList.add(`layer${i+1}`)
      }
    
    }
       
    // window.addEventListener('load', BlackToGreen);
   
    setTimeout(BlackToGreen, 1000)
    setTimeout(GreenToIntro, 4000)
    setTimeout(GridHover, 5000)


    window.addEventListener('keydown', function (event) {
      
      if (event.keyCode === 40 ) {
        i = 1;
        j++;
        const nextTotal = document.querySelector(`.total:nth-child(${j})`);
        eventClick.classList.remove('event-click');
        eventClick.classList.add('hidden-bottom');
        nextTotal.classList.remove('hidden-top');
        nextTotal.classList.add('move-on');
        nextTotal.classList.add('event-click')
        eventClick = nextTotal;
        nowPage();
        eventClick.addEventListener('click', goRight);
        eventClick.addEventListener('click', goLeft);
        eventClick.addEventListener('mouseover', goDesription);
        eventClick.addEventListener('mouseout', deleteDesription);
      } 
    });
   
  })();


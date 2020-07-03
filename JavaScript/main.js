/* 오른쪽,왼쪽 이동 */
(function() {
    const bts1 = document.querySelector(`.container:nth-child(${1}) .item:nth-child(${2})`);
    const bts2 = document.querySelector(`.container:nth-child(${1}) .item:nth-child(${3})`);
    const eventClick = document.querySelector('.event-click');
    const rightWall = document.querySelector('.right-wall');
    let i = 1;
    let j = 1;
    let k = 1;
    
    function loadPage () {
      const nowImg = document.querySelectorAll(`.container:nth-child(${i}) .item`);
      nowImg.forEach(function(item) {
        if (item.classList.contains("move-on")){

        } else {
          item.classList.remove("hidden-left");
          item.classList.remove("hidden-top");
          item.classList.remove("hidden-right");
          item.classList.remove("hidden-bottom");
          item.classList.add("move-on");
        }
      })
    };

    function delItem() {
      const nowImg = document.querySelectorAll(`.container:nth-child(${j}) .item`);
      nowImg.forEach(function(item, index) {
        if (index === 0){
          item.classList.remove("move-on");
          item.classList.add("hidden-left");
        }
        if (index === 1){
          item.classList.remove("move-on");
          item.classList.add("hidden-top");
        }
        if (index === 2){
          item.classList.remove("move-on");
          item.classList.add("hidden-right");
        }
        if (index === 3){
          item.classList.remove("move-on");
          item.classList.add("hidden-bottom");
        }
      })
    };
    
    function slideText() {
      if (i === 2 || i === 4) {
        const mugDetail = document.querySelector(`.container:nth-child(${i}) .item:nth-child(${4}) .text`);
        const thumbDetail = document.querySelector(`.container:nth-child(${i}) .item:nth-child(${5}) .text`);
        mugDetail.classList.remove("hidden-top");
        mugDetail.classList.add("move-on2");
        thumbDetail.classList.remove("hidden-bottom");
        thumbDetail.classList.add("move-on2");
      };
      if (i === 3 || i === 5) {
        const mugDetail = document.querySelector(`.container:nth-child(${i}) .item:nth-child(${2})`);
        const thumbDetail = document.querySelector(`.container:nth-child(${i}) .item:nth-child(${5})`);
        mugDetail.classList.remove("hidden-top");
        mugDetail.classList.add("move-on2");
        thumbDetail.classList.remove("hidden-bottom");
        thumbDetail.classList.add("move-on2");

      } 
    };

    function delText(i) {
      if (i === 2 || i === 4) {
        const mugDetail = document.querySelector(`.container:nth-child(${i}) .item:nth-child(${4}) .text`);
        const thumbDetail = document.querySelector(`.container:nth-child(${i}) .item:nth-child(${5}) .text`);
        mugDetail.classList.remove("move-on2");
        mugDetail.classList.add("hidden-top");
        thumbDetail.classList.remove("move-on2");
        thumbDetail.classList.add("hidden-bottom");
      };
      if (i === 3 || i === 5) {
        const mugDetail = document.querySelector(`.container:nth-child(${i}) .item:nth-child(${2})`);
        const thumbDetail = document.querySelector(`.container:nth-child(${i}) .item:nth-child(${5})`);
        mugDetail.classList.remove("move-on2");
        mugDetail.classList.add("hidden-top");
        thumbDetail.classList.remove("move-on2");
        thumbDetail.classList.add("hidden-bottom");
      }
    }

    
    function goRight(event) {
      const nowContainer = document.querySelector(`.container:nth-child(${i})`);
      if (event.target.classList.contains('right-wall') || event.target.parentNode.classList.contains('right-wall')) {
        i++;
        const nextContainer = document.querySelector(`.container:nth-child(${i})`);
        nowContainer.classList.remove('move-on');
        nowContainer.classList.add('hidden-left');
        nextContainer.classList.remove('hidden-right');
        nextContainer.classList.add('move-on');
        if (i === 1) {
        };
        if (i === 2) {
          const firstContainer = document.querySelector(`.container:nth-child(${1})`);
          if (firstContainer.classList.contains('hidden-left')) {
            setTimeout(delItem, 1000);
          };
          setTimeout(slideText, 1500, i);
        }
        else if (i === 3) {
          setTimeout(slideText, 1500, i);
          setTimeout(delText, 1000, 2);
        }
        else if (i === 4) {
          setTimeout(delText, 1000, 3);
          setTimeout(slideText, 1500, i);
        }
        else if (i === 5) {
          setTimeout(delText, 1000, 4);
          setTimeout(slideText, 1500, i);
        }
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
        if (i === 1) {
          setTimeout(loadPage, 1300);
          setTimeout(delText, 1000, 2);
        }
        else if (i === 2) {
          setTimeout(slideText, 1500, i);
          setTimeout(delText, 1000, 3);
        } 
        else if (i === 3) {
          setTimeout(slideText, 1500, i);
          setTimeout(delText, 1000, 4);
        }
        else if (i === 4) {
          setTimeout(slideText, 1500, i);
          setTimeout(delText, 1000, 5);
        }
      };
    };

    function showInfo (event) {
      if (event.target.classList.contains('info1')) {
        const Info = document.createElement("p");
        const Info2 = document.createElement("p");
        Info.innerText = "BTS Glass";
        Info2.innerText = "26000Won";
        event.target.append(Info);
        event.target.append(Info2);  
        event.target.classList.add("info");
      }
      else if (event.target.classList.contains('info2')) {
        const Info = document.createElement("p");
        const Info2 = document.createElement("p");
        Info.innerText = "BTS Mug";
        Info2.innerText = "24000Won";
        event.target.append(Info);
        event.target.append(Info2);  
        event.target.classList.add("info");
      }
    
    };

    function noInfo (event) {
      if (event.target.classList.contains("info1") || event.target.classList.contains("info2")) {
        const Info = event.target.querySelectorAll("p");
        Info.forEach(function(item) {
          event.target.classList.remove('info');
          item.remove();  
        })
      }
    }

    // loadEvent.addEventListener('load', loadPage);
    bts1.addEventListener("mouseenter", showInfo);
    bts1.addEventListener("mouseleave", noInfo);
    bts2.addEventListener("mouseenter", showInfo);
    bts2.addEventListener("mouseleave", noInfo);
    window.addEventListener("load", loadPage);
    eventClick.addEventListener('click', goRight);
    eventClick.addEventListener('click', goLeft);
  
  })();





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

function IntroToIntro2() {
  const IntroPage = document.querySelector('.IntroPage')
  const IntroPage2 = document.querySelector('.IntroPage2')
  const greenPage = document.querySelector('.greenPage')
  const blackPage = document.querySelector('.blackPage')

  // IntroPage2.classList.remove('hidden-bottom')
  IntroPage2.classList.add('Viewing')
  IntroPage.classList.remove('Viewing')
  // IntroPage.classList.add('hidden-bottom')
  greenPage.classList.add('hidden-bottom')
  blackPage.classList.add('hidden-bottom')


};

function Intro2ToIntro3() {
    
  const IntroPage2 = document.querySelector('.IntroPage2')
  const IntroPage3 = document.querySelector('.IntroPage3')

  
  IntroPage2.classList.remove('Viewing')
  IntroPage3.classList.remove('unViewing')
  
  IntroPage3.classList.add('Viewing')

};

function Intro2hover() {
  const intro2Layer = document.querySelector('.intro2_layer')
   
  intro2Layer.classList.add('intro2_layer_hover')
};



// window.addEventListener('load', BlackToGreen);
setTimeout(BlackToGreen, 1000)
setTimeout(GreenToIntro, 4000)
setTimeout(GridHover, 5000)
// setTimeout(IntroToIntro2, 8000)
// setTimeout(Intro2hover, 8500)
// setTimeout(Intro2ToIntro3, 10000)
// window.addEventListener('load', GreenToIntro);





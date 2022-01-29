const box = $('#box');
    box.on('click', function(){
        let maxWidth = $(window).width();
        let maxHeight = $(window).height();
        let height = `${getRandomArbitrary(1, maxHeight - 100)}px`;
        let width = `${getRandomArbitrary(1, maxWidth - 100)}px`;
        box.animate({
            top: height,
            left: width,
            width:`${getRandomArbitrary(1, 300)}px`,
            height: `${getRandomArbitrary(1, 300)}px`,
            backgroundColor: `#${getRandomColor()}`,
        }, 1000)

        console.log(getRandomColor())
    })

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

    function getRandomColor(){
          return Math.floor(Math.random()*16777215).toString(16);
      }
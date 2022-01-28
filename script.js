const box = $('#box');
    box.on('click', function(){
        getRandomBgColor();
        getRandomPosition();
        getRandomSize();
    })

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

    function getRandomBgColor() {
        let random = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        box.css("background-color", random );
    }

    function getRandomPosition() {
        const maxWidth = $(window).width();
        const maxHeight = $(window).height();
        box.css("top", `${getRandomArbitrary(1, maxHeight)}px` );
        box.css("left", `${getRandomArbitrary(1, maxWidth)}px` );
    }

    function getRandomSize() {
        box.css("width", `${getRandomArbitrary(1, 300)}px` );
        box.css("height", `${getRandomArbitrary(1, 300)}px` );
    }
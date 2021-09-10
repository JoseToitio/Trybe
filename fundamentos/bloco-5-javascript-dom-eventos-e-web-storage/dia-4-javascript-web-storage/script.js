window.onload = function () {
    let changeColor = document.querySelector('#select1');
    changeColor.addEventListener('change', function () {
        let selected = changeColor.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;
        localStorage.setItem('background-color', selected.value)
    })
    let changeColorWords = document.querySelector('#select2');
    changeColorWords.addEventListener('change', function () {
        let selected = changeColorWords.selectedOptions[0];
        document.body.style.color = selected.value;
        localStorage.setItem('color-text', selected.value );
    })

    let changeFontFamily = document.querySelector('#select3');
    changeFontFamily.addEventListener('change', function (){
        let fonts = changeFontFamily.selectedOptions[0];
        document.body.style.fontFamily = fonts.value;
        localStorage.setItem('font-family', fonts.value)
    })

    let inputFontSize = document.querySelector('input[name= "font-size"]')
    inputFontSize.addEventListener('change', function () {
       let p = document.querySelector('#content-text');
       p.style.fontSize = `${inputFontSize.value}px`
       localStorage.setItem('font-size', `${inputFontSize.value}px` ) 
    })
    let inputLineHeight = document.querySelector('input[name = "line-height"]')
    inputLineHeight.addEventListener('change', function () {
        let p = document.querySelector('#content-text');
        p.style.lineHeight = `${inputLineHeight.value}px`
        localStorage.setItem('line-height', `${inputLineHeight.value}px`);
    })
    function savedAllStorage () {
        let savedBackGround = localStorage.getItem('background-color');
        let savedColorText = localStorage.getItem('color-text');
        let savedFontSize = localStorage.getItem('font-size');
        let savedFontFamily = localStorage.getItem('font-family');
        let savedLineHeight = localStorage.getItem('line-height');
        document.querySelector('#content-text').style.lineHeight = savedLineHeight;
        document.body.style.fontFamily = savedFontFamily;
        document.querySelector('#content-text').style.fontSize = savedFontSize;
        document.body.style.color = savedColorText
        document.body.style.backgroundColor = savedBackGround;
    }
    savedAllStorage();
}
    
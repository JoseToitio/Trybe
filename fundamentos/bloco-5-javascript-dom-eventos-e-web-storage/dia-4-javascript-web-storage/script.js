window.onload = function () {
    let changeColor = document.querySelector('#select1')
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

    let inputFontSize = document.querySelector('input[name= "font-size"]')
    inputFontSize.addEventListener('change', function () {
       let p = document.querySelector('#content-text');
       p.style.fontSize = `${inputFontSize.value}px`

       localStorage.setItem('font-size', `${inputFontSize.value}px` )
       
    })
    function savedAllStorage () {
        let savedBackGround = localStorage.getItem('background-color');
        let savedColorText = localStorage.getItem('color-text');
        let savedFontSize = localStorage.getItem('font-size');
        document.querySelector('#content-text').style.fontSize = savedFontSize;
        document.body.style.color = savedColorText
        document.body.style.backgroundColor = savedBackGround;
    }
    savedAllStorage();
}
    
AFRAME.registerComponent('spheretracker', {
    init: function () {
        let solved = false;
        this.el.addEventListener('click', () => {
            if (solved === false) {
                var textString = document.getElementById('learn-tracker').getAttribute("text");
                console.log("yo")
                console.log(textString);
                console.log(textString['value']);
                console.log("yo")
                var newNum = textString.substring(-3, 1).parseInt() + 1;
                var newString = newNum.parseInt();
                console.log(newString);
                newString = "font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; width: 18; anchor: center; align: center; value: Learned " + newString + "/3";
                document.getElementById('learn-tracker').setAttribute("text", newString);
                solved = true;
            }
        });
    }
})
AFRAME.registerComponent('spheretracker', {
    init: function () {
        let solved = false;
        this.el.addEventListener('click', () => {
            if (solved === false) {
                var textString = document.getElementById('learn-tracker').getAttribute("text")['value'].toString();
                console.log(textString.substring(8, 9));
                var newNum = textString.substring(8, 9).parseInt() + 1;
                var newString = newNum.toString();
                newString = "font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; width: 18; anchor: center; align: center; value: Learned " + newString + "/3";
                document.getElementById('learn-tracker').setAttribute("text", newString);
                solved = true;
            }
        });
    }
})
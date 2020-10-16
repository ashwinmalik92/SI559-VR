AFRAME.registerComponent('spheretracker', {
    init: function () {
        let solved = false;
        this.el.addEventListener('click', () => {
            if (solved === false) {
                var textString = document.getElementById('learn-tracker').getAttribute("text")['value'].toString();
                var newNum = Number(textString.substring(8, 9)) + 1;
                var newString = newNum.toString();
                newString = "font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; width: 18; anchor: center; align: center; value: Learned " + newString + "/3";
                document.getElementById('learn-tracker').setAttribute("text", newString);
                solved = true;
            }
        });
    }
})
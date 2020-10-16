AFRAME.registerComponent('spheretracker', {
    init: function () {
        let solved = false;
        this.el.addEventListener('click', () => {
            if (solved === false) {
                var textString = document.getElementById('learn-tracker').getAttribute("text");
                var newNum = textString.substring(-3, 1);
                newNum = newNum.parseInt() + 1;
                var newString = newNum.parseInt();
                newString = "font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; width: 18; anchor: center; align: center; value: Learned " + newString + "/3";
                document.getElementById('learn-tracker').setAttribute("text", newString);
                solved = true;
            }
            
        });
    }
})

AFRAME.registerComponent('audiobench', {
    init: function () {
        let audio = this.el.components.sound;
        this.el.setAttribute("src", "audio/bench.ogg");
        this.el.addEventListener('click', () => {
            audio.playSound();
        });
    }
})

AFRAME.registerComponent('audiotable', {
    init: function () {
        let audio = this.el.components.sound;
        this.el.setAttribute("src", "audio/table.ogg");
        this.el.addEventListener('click', () => {
            audio.playSound();
        });
    }
})

AFRAME.registerComponent('audiolamp', {
    init: function () {
        let audio = this.el.components.sound;
        this.el.setAttribute("src", "audio/lamp.ogg");
        this.el.addEventListener('click', () => {
            audio.playSound();
        });
    }
})

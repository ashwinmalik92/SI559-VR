var targetEl = document.querySelector('#textbench');

AFRAME.registerComponent('audiobench', {
    init: function () {
        let audio = this.el.components.sound;
        let showtext = false;

        this.el.setAttribute("src", "audio/bench.ogg");
        this.el.addEventListener('click', () => {
            audio.playSound();

            if (!showtext) {
                console.log("set true");
                console.log(targetEl);
                targetEl.setAttribute("visible", "true");
                console.log(targetEl);
            } else {
                console.log("set false");
                targetEl.setAttribute("visible", "false");
            }
            showtext = !showtext;
        });
    }
})

AFRAME.registerComponent('audiotable', {
    init: function () {
        let playing = false;
        let audio = this.el.components.sound;
        this.el.setAttribute("src", "audio/table.ogg");
        this.el.addEventListener('click', () => {
            if (!playing) {
                audio.playSound();
            } else {
                audio.stopSound();

            }
            playing = !playing;
        });
    }
})

AFRAME.registerComponent('audiolamp', {
    init: function () {
        let playing = false;
        let audio = this.el.components.sound;
        this.el.setAttribute("src", "audio/lamp.ogg");
        this.el.addEventListener('click', () => {
            if (!playing) {
                audio.playSound();
            } else {
                audio.stopSound();

            }
            playing = !playing;
        });
    }
})

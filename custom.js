AFRAME.registerComponent('audiobench', {
    init: function () {
        let playing = false;
        let showtext = false;
        let audio = this.el.components.sound;
        this.el.setAttribute("src", "audio/bench.ogg");
        this.el.addEventListener('click', () => {
            if (!playing) {
                audio.playSound();
            } else {
                audio.stopSound();
            }
            playing = !playing;
            if (!showtext) {
                document.getElementById("bench-text").setAttribute("visible", "true");
            } else {
                document.getElementById("bench-text").setAttribute("visible", "false");
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

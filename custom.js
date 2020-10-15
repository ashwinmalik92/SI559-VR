AFRAME.registerComponent('audiobench', {
    init: function () {
        let audio = this.el.components.sound;
        this.el.setAttribute("src", "audio/bench.ogg");
        this.el.addEventListener('click', () => {
            audio.playSound();
        });
    }
})

AFRAME.registerComponent('textbench', {
    init: function () {
        let showtext = false;
        this.el.addEventListener('click', () => {
            console.log(showtext);
            if (!showtext) {
                this.el.setAttribute("visible", "true");
            } else {
                this.el.setAttribute("visible", "false");
            }
            showtext = !showtext;
        });
    }
});

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

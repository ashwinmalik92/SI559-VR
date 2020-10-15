AFRAME.registerComponent('audiobench', {
    init: function () {
        let audio = this.el.components.sound;
        this.el.setAttribute("src", "audio/bench.ogg");
        this.el.addEventListener('click', () => {
            audio.playSound();
        });

        let showtext = false;
        this.el.addEventListener('click', () => {
            console.log(showtext);
            if (!showtext) {
                console.log("set true");
                console.log(document.querySelector('#textbench'))
                document.querySelector('#textbench').setAttribute("visible", "true");
            } else {
                console.log("set false");
                document.querySelector('#textbench').setAttribute("visible", "false");
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

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
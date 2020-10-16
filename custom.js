AFRAME.registerComponent('learntracker', {
    init: function () {
        let cube = false;
        let sphere = false;
        let cylinder = false;

        this.el.addEventListener('click', () => {
            console.log(this.el.attr('id'));
            document.getElementById('learn-tracker').setAttribute("text", "font: https://cdn.aframe.io/fonts/Aileron-Semibold.fnt; width: 18; anchor: center; align: center; value: Learned 3/3");
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

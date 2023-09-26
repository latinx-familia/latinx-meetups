import Glide from '@glidejs/glide'

let sliders = document.querySelectorAll('.glide');
    for (let i = 0; i < sliders.length; i++) {
        let glide = new Glide(sliders[i], {
            startAt: 0,
            autoplay: 2800,
            hoverpause: true,
        });
        glide.mount();
    }
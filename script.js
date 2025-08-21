document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sampler-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const soundName = button.getAttribute('data-sound');
            if (soundName) {
                const audio = new Audio(`samples/ajr-samples/${soundName}`);
                audio.play();
            }
        });
    });
});
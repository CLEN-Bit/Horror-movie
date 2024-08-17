document.addEventListener('DOMContentLoaded', () => {
    const openCardBtn = document.getElementById('openCard');
    const closeCardBtn = document.getElementById('closeCard');
    const front = document.querySelector('.front');
    const inside = document.querySelector('.inside');
    const batsContainer = document.querySelector('.bats');

    openCardBtn.addEventListener('click', () => {
        front.style.display = 'none';
        inside.style.display = 'block';
        createBats();
    });

    closeCardBtn.addEventListener('click', () => {
        front.style.display = 'block';
        inside.style.display = 'none';
        clearBats();
    });

    function createBats() {
        for (let i = 0; i < 10; i++) {
            let bat = document.createElement('div');
            bat.classList.add('bat');
            bat.style.top = Math.random() * window.innerHeight + 'px';
            bat.style.left = Math.random() * window.innerWidth + 'px';
            bat.style.animationDelay = `${Math.random() * 5}s`;
            batsContainer.appendChild(bat);
        }
    }

    function clearBats() {
        batsContainer.innerHTML = '';
    }
});

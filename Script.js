// Função para abrir o menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Função para fechar o menu
function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = 'none';
}

// Função para a chuva de corações
function createHearts() {
    const heartColors = ['#FF0000', '#FF1493', '#FF6347', '#FF8C00', '#FFD700', '#32CD32'];
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.position = 'absolute';
    heart.style.fontSize = '24px';
    heart.innerHTML = '❤️';
    heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
    heart.style.animation = 'fall 10s linear infinite';
    heart.style.top = '-50px';
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000); // Remove o coração após 10 segundos
}

// Criando corações no fundo da tela
setInterval(createHearts, 500); // Cria um coração a cada 500ms

// Animação de queda
@keyframes fall {
    to {
        transform: translateY(100vh);
    }
}

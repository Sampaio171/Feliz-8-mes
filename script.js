// Funções popup
function abrirCarta() {
    document.getElementById('carta').style.display = 'flex';
}

function fecharCarta() {
    document.getElementById('carta').style.display = 'none';
}

// Timer avançado: meses + dias/h/m/s desde 13/09/2025
function atualizarTempo() {
    const inicio = new Date('2025-09-13');
    const agora = new Date();
    const diffMs = Math.abs(agora - inicio);
    
    const diasTotais = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const meses = Math.floor(diasTotais / 30); // Aproximação mês=30 dias
    const dias = diasTotais % 30;
    const horas = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diffMs / (1000 * 60)) % 60);
    const segundos = Math.floor((diffMs / 1000) % 60);
    
    const isFuture = agora < inicio;
    const prefix = isFuture ? 'Faltam ' : 'Há ';
    
    document.getElementById('tempo').innerHTML = 
        `${prefix}${meses} meses ${dias}d ${horas}h ${minutos}m ${segundos}s ❤️`;
}

// Update timer a cada segundo
atualizarTempo();
setInterval(atualizarTempo, 1000);

// Corações intensos caindo
function criarCoracao() {
    const emojis = ['❤️', '💖', '💕', '💗', '💝'];
    const heart = document.createElement('div');
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
    heart.style.opacity = 0.7 + Math.random() * 0.3;
    heart.style.animationDuration = (Math.random() * 5 + 4) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
}

setInterval(criarCoracao, 150);



// Inicia tudo quando DOM carrega
document.addEventListener('DOMContentLoaded', () => {
    atualizarTempo();
});

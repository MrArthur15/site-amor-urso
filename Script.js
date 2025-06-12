function abrirCartinha(elemento) {
  elemento.classList.toggle('aberta');

  // Se a cartinha acabou de ser aberta, solta confetes
  if (elemento.classList.contains('aberta')) {
    criarConfetes();
  }
}

// Criar confetes
  function criarConfetes() {
  const emojis = ['•', '✦', '✧', '✨']; // Emojis de confete
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-20px';
      confetti.style.position = 'fixed';
      confetti.style.fontSize = Math.random() * 20 + 16 + 'px';
      confetti.style.animation = 'cairConfete 3s ease-out forwards';
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }, i * 50);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Mostrar/ocultar poesias
  document.querySelectorAll('.toggle-poesia').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const poesia = toggle.nextElementSibling;
      poesia.classList.toggle('show');
      
      const seta = toggle.querySelector('.seta');
      seta.textContent = poesia.classList.contains('show') ? '⬆️' : '⬇️';
    });
  });

const botoes = document.querySelectorAll('.toggle-poesia');

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    const poesia = btn.nextElementSibling;
    poesia.classList.toggle('show');
    const seta = btn.querySelector('.seta');
    seta.textContent = poesia.classList.contains('show') ? '⬆️' : '⬇️';
  });
});

  // Criar corações flutuantes
  function criarCoracao() {
  const coracoes = ["💙", "💙", "💙", "💜", "💜"]; // Mais azul do que roxo
  const coracao = document.createElement("div");
  coracao.classList.add("cora");

  // Escolhe o coração com chance maior para azul
  coracao.innerHTML = coracoes[Math.floor(Math.random() * coracoes.length)];

  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = (Math.random() * 5 + 3) + "s";
  coracao.style.animationDelay = "0s";
  coracao.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 8000);
}


setInterval(() => {
  for (let i = 0; i < 10; i++) {
    criarCoracao();
  }
}, 100);

});

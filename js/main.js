// Seleciona o botão
const whatsappButton = document.querySelector('.whatsapp-button');

// Adiciona um evento de clique ao botão
whatsappButton.addEventListener('click', function () {
    // Adiciona a classe de animação
    whatsappButton.classList.add('shake');

    // Remove a classe após a animação terminar
    setTimeout(() => {
        whatsappButton.classList.remove('shake');
    }, 500); // 500ms = duração da animação
});
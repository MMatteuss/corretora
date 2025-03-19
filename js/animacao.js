// Seleciona todos os elementos com as classes de animação
const animatedElements = document.querySelectorAll('.animated-left, .animated-right, .animated-up');

// Função para ativar as animações
function activateAnimations() {
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate');
        }, index * 200);
    });
}

// Aguarda 1 segundo antes de ativar as animações
setTimeout(activateAnimations, 1);
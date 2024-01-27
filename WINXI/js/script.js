// script.js

// Aguarde até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function () {

    // Adicione um evento de clique ao botão "Novas Coleções" no meio da página
    const novoColecaoBtn = document.querySelector('.Meio button');
    novoColecaoBtn.addEventListener('click', function () {
        alert('Confira nossas novas coleções!');
    });

    // Adicione um evento de clique aos ícones do carrinho
    const carrinhoIcons = document.querySelectorAll('.roupa ion-icon');
    carrinhoIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            alert('Produto adicionado ao carrinho!');
            // Você pode adicionar lógica adicional aqui, como atualizar a contagem do carrinho ou fazer uma solicitação ao servidor.
        });
    });

    // Use o ScrollReveal para animar elementos na página quando forem rolados
    ScrollReveal().reveal('.Meio h1', { delay: 200 });
    ScrollReveal().reveal('.Meio p', { delay: 400 });
    ScrollReveal().reveal('.Meio button', { delay: 600 });

    ScrollReveal().reveal('.Container-card-1', { delay: 200, interval: 300 });

    ScrollReveal().reveal('.cta', { delay: 200 });

    ScrollReveal().reveal('.Container-roupas', { delay: 200, interval: 300 });

    ScrollReveal().reveal('.Marcas img', { delay: 200, interval: 300 });

    ScrollReveal().reveal('.Contato', { delay: 200, interval: 300 });
});

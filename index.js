// Seleciona a galeria de imagens
const galeria = document.querySelector('.galeria-imagem');
// Seleciona todas as imagens da galeria
const imagens = document.querySelectorAll('.galeria-imagem img');

// Define o tamanho base para as imagens
let tamanhoBase = imagens[0].clientWidth;

// Define o índice da imagem atual
let indiceImagem = 0;

// Função para ajustar o tamanho das imagens
function ajustarTamanhoImagens() {
    galeria.style.width = tamanhoBase * imagens.length + 'px';
    imagens.forEach(imagem => {
        imagem.style.width = tamanhoBase + 'px';
    });
}

// Ajusta o tamanho das imagens ao carregar a página
window.addEventListener('load', () => {
    ajustarTamanhoImagens();
    iniciarCarrossel();
});

// Função para mostrar a próxima imagem
function proximaImagem() {
    if (indiceImagem >= imagens.length - 1) {
        indiceImagem = 0;
    } else {
        indiceImagem++;
    }
    atualizarPosicao();
}

// Função para atualizar a posição da galeria
function atualizarPosicao() {
    galeria.style.transform = `translateX(${-tamanhoBase * indiceImagem}px)`;
}
document.addEventListener('DOMContentLoaded', function() {
    const imagens = document.querySelectorAll('.galeria-imagem img');
    let indiceImagemAtual = 0;

    setInterval(() => {
        imagens[indiceImagemAtual].style.opacity = '0'; // Esconde a imagem atual
        indiceImagemAtual = (indiceImagemAtual + 1) % imagens.length; // Atualiza o índice para a próxima imagem
        imagens[indiceImagemAtual].style.opacity = '1'; // Mostra a próxima imagem
    }, 4000); // Muda a imagem a cada 4 segundos
});
// Inicializar o mapa do Google Maps
function initMap() {
    // Coordenadas do petshop
    var petshopLocation = { lat: -23.5505199, lng: -46.6333094 };
    
    // Opções do mapa
    var mapOptions = {
        center: petshopLocation,
        zoom: 15
    };
    
    // Criar o mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    // Adicionar marcador do petshop
    var marker = new google.maps.Marker({
        position: petshopLocation,
        map: map,
        title: 'Petshop'
    });
}
// Abrir o WhatsApp com uma mensagem pré-definida
function openWhatsApp() {
    var phoneNumber = '551234567890'; // Número de telefone do petshop
    var message = 'Olá, gostaria de mais informações sobre os serviços do petshop.'; // Mensagem pré-definida
    
    // Montar o link para o WhatsApp com o número de telefone e a mensagem
    var url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    
    // Abrir o link em uma nova aba
    window.open(url, '_blank');
}
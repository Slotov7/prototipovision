// Espera o documento HTML ser completamente carregado para executar o código.
document.addEventListener('DOMContentLoaded', () => {

    // Pega o elemento de vídeo pelo seu ID. É aqui que a imagem da câmera vai aparecer.
    const videoElement = document.getElementById('camera-feed');

    // Verifica se o navegador do usuário suporta a API de mídia (necessária para acessar a câmera).
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        
        // Se suportar, pede permissão para usar a câmera de vídeo.
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                // Se o usuário der permissão, o 'stream' (fluxo de vídeo) é recebido.
                
                // Define o fluxo de vídeo como a fonte do nosso elemento <video>.
                videoElement.srcObject = stream;
                
                // Tenta iniciar a reprodução do vídeo.
                videoElement.play();
            })
            .catch((error) => {
                // Se o usuário negar a permissão ou ocorrer um erro, mostramos no console.
                console.error("Erro ao acessar a câmera: ", error);
                alert("Não foi possível acessar a câmera. Por favor, verifique as permissões no seu navegador.");
            });

    } else {
        // Se o navegador não for compatível, informa o usuário.
        alert("Seu navegador não suporta o acesso à câmera.");
    }
});  

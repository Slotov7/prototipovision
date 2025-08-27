document.addEventListener('DOMContentLoaded', () => {

    // Pega os elementos da tela da câmera
    const videoElement = document.getElementById('camera-feed');
    const shutterButton = document.querySelector('.shutter-button');
    const cameraContent = document.getElementById('cameraContent');

    // Pega os elementos das telas de transição
    const loadingScreen = document.getElementById('loadingScreen');
    const completeScreen = document.getElementById('completeScreen');
    const restartButton = document.getElementById('restartButton');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoElement.srcObject = stream;
                videoElement.play();
            })
            .catch((error) => {
                console.error("Erro ao acessar a câmera: ", error);
                alert("Não foi possível acessar a câmera.");
            });
    } else {
        alert("Seu navegador não suporta o acesso à câmera.");
    }

    // Evento de clique no botão de disparo da câmera
    shutterButton.addEventListener('click', () => {
        
        // Atraso de 1 segundo para simular a captura da foto.
        setTimeout(() => {
            
            // O código abaixo só será executado APÓS o atraso de 1 segundo.
            cameraContent.style.display = 'none'; // Esconde o conteúdo da câmera
            loadingScreen.classList.add('active'); // Mostra a tela de carregamento

            // A lógica de análise de 5 segundos continua aqui dentro, como antes.
            setTimeout(() => {
                loadingScreen.classList.remove('active'); 
                completeScreen.classList.add('active');
            }, 5000); // 5 segundos da análise

        }, 1000); // Atraso de 1 segundo (1000ms) para a "captura"
    });

    // Evento de clique no botão "Voltar ao Início"
    restartButton.addEventListener('click', () => {
        completeScreen.classList.remove('active');
        cameraContent.style.display = 'flex'; // Mostra o conteúdo da câmera novamente
    });
});
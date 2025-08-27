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
});  

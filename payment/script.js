document.getElementById('btn-pagar').addEventListener('click', () => {
    // Captura os dados digitados
    const username = document.getElementById('input-username').value;
    const value = document.getElementById('input-value').value;
    const originName = "Pedro Henrique Sales Cavalcante";

    // Elementos de Tela
    const screenPayment = document.getElementById('screen-payment');
    const overlayTransition = document.getElementById('overlay-transition');
    const screenReceipt = document.getElementById('screen-receipt');
    
    // Oculta tela de pagamento e exibe transição
    screenPayment.classList.remove('active');
    overlayTransition.style.display = 'flex';

    // Temporizador da Transição
    setTimeout(() => {
        overlayTransition.style.display = 'none';
        screenReceipt.style.display = 'flex';
        
        // --- DADOS TELA 2 (RESUMO) ---
        document.getElementById('receipt-value').innerText = value;
        document.getElementById('receipt-username').innerText = username;
        document.getElementById('receipt-origem').innerText = originName;
        
        const now = new Date();
        const formattedDate = now.toLocaleString('pt-BR');
        document.getElementById('receipt-date').innerText = formattedDate;
        
        const randomCode = Math.floor(100000 + Math.random() * 900000);
        document.getElementById('receipt-code').innerText = randomCode;

        // --- DADOS TELA 3 (COMPROPAY) ---
        // Preenchemos os dados da terceira tela ao mesmo tempo para já ficarem prontos
        document.getElementById('cp-value').innerText = "R$ " + value;
        document.getElementById('cp-origem').innerText = originName;
        document.getElementById('cp-username').innerText = username;
        document.getElementById('cp-code').innerText = randomCode;
        document.getElementById('cp-date').innerText = formattedDate;

    }, 2500); 
});

// Navegação para a Tela do ComproPay
document.getElementById('btn-ver-comprovante').addEventListener('click', () => {
    document.getElementById('screen-receipt').style.display = 'none';
    document.getElementById('screen-compropay').style.display = 'flex';
});

// Botão Voltar do ComproPay (volta para o resumo)
document.getElementById('btn-back-compropay').addEventListener('click', () => {
    document.getElementById('screen-compropay').style.display = 'none';
    document.getElementById('screen-receipt').style.display = 'flex';
});

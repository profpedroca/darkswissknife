document.getElementById('btn-pagar').addEventListener('click', () => {
    // Captura os dados da Tela 1
    const username = document.getElementById('input-username').value;
    const value = document.getElementById('input-value').value;
    const originName = "Pedro Henrique Sales Cavalcante";

    // Elementos das Telas
    const screenPayment = document.getElementById('screen-payment');
    const overlayTransition = document.getElementById('overlay-transition');
    const screenReceipt = document.getElementById('screen-receipt');
    
    // Animação
    screenPayment.classList.remove('active');
    overlayTransition.style.display = 'flex';

    setTimeout(() => {
        overlayTransition.style.display = 'none';
        screenReceipt.style.display = 'flex';
        window.scrollTo(0, 0); // Garante que a tela 2 abra no topo
        
        // Dados Tela 2
        document.getElementById('receipt-value').innerText = value;
        document.getElementById('receipt-username').innerText = username;
        document.getElementById('receipt-origem').innerText = originName;
        
        const now = new Date();
        const formattedDate = now.toLocaleString('pt-BR');
        document.getElementById('receipt-date').innerText = formattedDate;
        
        const randomCode = Math.floor(100000 + Math.random() * 900000);
        document.getElementById('receipt-code').innerText = randomCode;

        // Dados Tela 3 (ComproPay) preenchidos antecipadamente
        document.getElementById('cp-value').innerText = "R$ " + value;
        document.getElementById('cp-origem').innerText = originName;
        document.getElementById('cp-username').innerText = username;
        document.getElementById('cp-code').innerText = randomCode;
        document.getElementById('cp-date').innerText = formattedDate;

    }, 2500); 
});

// Ação: Botão "Ver comprovante" -> Abre a Tela 3 (ComproPay)
document.getElementById('btn-ver-comprovante').addEventListener('click', () => {
    document.getElementById('screen-receipt').style.display = 'none';
    document.getElementById('screen-compropay').style.display = 'flex';
    window.scrollTo(0, 0);
});

// Ação: Botão Voltar da Tela 3 -> Volta para Tela 2
document.getElementById('btn-back-compropay').addEventListener('click', () => {
    document.getElementById('screen-compropay').style.display = 'none';
    document.getElementById('screen-receipt').style.display = 'flex';
});

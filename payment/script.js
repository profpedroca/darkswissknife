document.getElementById('btn-pagar').addEventListener('click', () => {
    // 1. Captura os dados digitados na Tela 1
    const username = document.getElementById('input-username').value;
    const value = document.getElementById('input-value').value;
    
    // Define um nome de origem fixo como na referência
    const originName = "Pedro Henrique Sales Cavalcante";

    // 2. Elementos de Tela e Transição
    const screenPayment = document.getElementById('screen-payment');
    const overlayTransition = document.getElementById('overlay-transition');
    const screenReceipt = document.getElementById('screen-receipt');
    
    // Oculta a tela de pagamento
    screenPayment.classList.remove('active');
    
    // 3. Exibe o Overlay de Transição (com o GIF)
    overlayTransition.style.display = 'flex';

    // 4. Temporizador da Transição (Sincronizado com a duração do GIF)
    // Usaremos 2500ms (2,5 segundos), que é uma duração comum para GIFs de transição
    setTimeout(() => {
        // Oculta a transição
        overlayTransition.style.display = 'none';
        
        // 5. Exibe a Nova Tela de Comprovante Final
        screenReceipt.style.display = 'flex';
        
        // --- PREENCHIMENTO DE DADOS DINÂMICOS ---
        
        // Valor
        document.getElementById('receipt-value').innerText = value;
        // Destino (@user)
        document.getElementById('receipt-username').innerText = username;
        // Origem (Nome fixo)
        document.getElementById('receipt-origem').innerText = originName;
        
        // Data e Hora atuais
        const now = new Date();
        document.getElementById('receipt-date').innerText = now.toLocaleString('pt-BR');
        
        // Código de Transação aleatório (6 dígitos)
        const randomCode = Math.floor(100000 + Math.random() * 900000);
        document.getElementById('receipt-code').innerText = randomCode;

    }, 2500); // <-- TEMPO DE EXIBIÇÃO DO GIF (2,5 segundos)
});

document.getElementById('btn-pagar').addEventListener('click', () => {
    // Captura os dados digitados
    const username = document.getElementById('input-username').value;
    const store = document.getElementById('input-store').value;
    const value = document.getElementById('input-value').value;

    // 1. Abre Overlay "Validando transação..."
    const overlay = document.getElementById('overlay');
    const modalValidating = document.getElementById('modal-validating');
    const modalProcessing = document.getElementById('modal-processing');
    const screenBlack = document.getElementById('screen-black');
    const screenSuccess = document.getElementById('screen-success');
    const screenReceipt = document.getElementById('screen-receipt');
    
    overlay.style.display = 'flex';

    // 2. Tela preta após 1.5s
    setTimeout(() => {
        overlay.style.display = 'none';
        modalValidating.classList.add('hidden');
        screenBlack.classList.add('active');
        
        // 3. Modal "Realizando pagamento..."
        setTimeout(() => {
            screenBlack.classList.remove('active');
            overlay.style.display = 'flex';
            modalProcessing.classList.remove('hidden');

            // 4. Animação de sucesso (bolinha roxa)
            setTimeout(() => {
                overlay.style.display = 'none';
                screenSuccess.style.display = 'flex';

                // 5. Exibir o Comprovante Final
                setTimeout(() => {
                    screenSuccess.style.display = 'none';
                    document.getElementById('screen-payment').classList.remove('active');
                    screenReceipt.style.display = 'flex';
                    
                    // Preencher dados do comprovante
                    document.getElementById('receipt-value').innerText = value;
                    document.getElementById('receipt-store').innerText = store;
                    document.getElementById('receipt-username').innerText = username;
                    
                    // Data atual
                    const now = new Date();
                    document.getElementById('receipt-date').innerText = now.toLocaleString('pt-BR');
                    
                    // Código aleatório de 6 dígitos
                    const randomCode = Math.floor(100000 + Math.random() * 900000);
                    document.getElementById('receipt-code').innerText = randomCode;

                }, 2000); // Tempo exibindo o checkmark

            }, 1500); // Tempo validando pagamento

        }, 1000); // Tempo de tela preta

    }, 1500); // Tempo validando transação
});

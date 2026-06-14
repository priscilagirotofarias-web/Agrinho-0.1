// Função para alternar informações dos cards (Manipulação do DOM)
document.querySelectorAll('.btn-saiba').forEach(botao => {
    botao.addEventListener('click', function() {
        const infoId = this.getAttribute('data-info');
        const infoParagrafo = document.getElementById(`info-${infoId}`);
        
        // Alterna a classe hidden (esconder/mostrar)
        if (infoParagrafo.classList.contains('hidden')) {
            infoParagrafo.classList.remove('hidden');
            this.textContent = 'Mostrar menos';
        } else {
            infoParagrafo.classList.add('hidden');
            this.textContent = 'Saiba mais';
        }
    });
});

// --- Contador de árvores (Variáveis e lógica) ---
let contadorArvores = 0;
const elementoContador = document.getElementById('contador-valor');
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');
const mensagemDiv = document.getElementById('mensagem-motivacional');

function atualizarContador() {
    elementoContador.textContent = contadorArvores;
    
    // Feedback personalizado 
    if (contadorArvores === 0) {
        mensagemDiv.textContent = "🌱 Comece plantando uma árvore simbólica!";
        mensagemDiv.style.color = "#7DAA47";
    } else if (contadorArvores > 0 && contadorArvores < 10) {
        mensagemDiv.textContent = "💚 Você está ajudando a restaurar o futuro!";
        mensagemDiv.style.color = "#2C5E2E";
    } else if (contadorArvores >= 10) {
        mensagemDiv.textContent = "🎉 Uau! Você é um herói do agro sustentável! 🌳🚜";
        mensagemDiv.style.color = "#8B5A2B";
    }
}

btnAumentar.addEventListener('click', () => {
    contadorArvores++;
    atualizarContador();
});

btnDiminuir.addEventListener('click', () => {
    if (contadorArvores > 0) {
        contadorArvores--;
        atualizarContador();
    } else {
        mensagemDiv.textContent = "Não pode ter árvores negativas! Plante pelo menos uma 🌱";
        mensagemDiv.style.color = "#cc3300";
        setTimeout(() => {
            if(contadorArvores === 0) atualizarContador();
        }, 1500);
    }
});

// --- Formulário com validação simples ---
const form = document.getElementById('form-contato');
const respostaForm = document.getElementById('resposta-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recarregar a página
    
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    
    if (nome === "" || email === "") {
        respostaForm.textContent = "❌ Por favor, preencha seu nome e e-mail.";
        respostaForm.style.color = "red";
        return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
        respostaForm.textContent = "❌ Digite um e-mail válido (ex: nome@provedor.com)";
        respostaForm.style.color = "red";
        return;
    }
    
    // Simula envio
    respostaForm.innerHTML = `✅ Obrigado, ${nome}! Em breve enviaremos conteúdos sobre agro sustentável para ${email}. 🌾`;
    respostaForm.style.color = "#2C5E2E";
    
    // Limpa o formulário
    form.reset();
});
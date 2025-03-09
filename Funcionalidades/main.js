// Pegar os ids e o que esta dentro deles
var historico = document.getElementById('historico');
var comando = document.getElementById('comando');
var banner = document.getElementById('banner');

// Criar Array vazia para historico
var saida = [];

// Arrays com informações para comandos
const help = [
    "help|You already know what this does",
    "whoisme|Who is Benns?",
    "myprojects|Some of my projects.",
    "email|Don't email me(unless it's work).",
    "clear|Clear terminal.",
    "Banner|Self-explanatory, shows the banner."
];

const whoisme = [
    "Hi! My name is Bernardo, I'm from Portugal and started to code in 2024.",
    "My passion for code is about the creativity and how we can manipulate software and create amazing things!",
    "This terminal is just a little project of mine, it's inspired on ForrestKnight's terminal website.",
    "I hope you enjoy!"
];

const myprojects = [
    "View my projects here:",
];

const email = [
    "Don't email me. Unless if you got work some for me, than it's okay. bfilipe42@gmail.com"
];

// Capturar eventos com a tecla enter
comando.addEventListener('keydown', function(event) {
    if (event.key==='Enter') { // Verifica se o enter foi pressionado
        var cmd = comando.value.toLowerCase();

        saida.push(cmd); // Adiciona o comando ao historico

        // construir novo conteudo
        var conteudoAtual = historico.innerHTML;

        // Construir o novo conteudo
        var novoConteudo = conteudoAtual; // preserva o que estava
        if (saida.length) {
            novoConteudo += '<br>' + saida.map(cmd => `<div>${cmd}</div>`).join('<br>'); // Adiciona o histórico
        }

        if (cmd === 'help') {
            var helpText = ''; // Cria uma variavel para armazenar as opcoes do comando help
            for (var i = 0; i < help.length; i++) { // percorre a lista help
                const [comando, descricao] = help[i].split("|"); // Divide cada item em comando e descricao
                helpText += `<span class = "comando">${comando}</span> <span class = "descricao">${descricao}</span><br>`;
        } 
        novoConteudo += '<br>' + helpText; // adiciona o texto formatado ao conteudo
        } else if (cmd === "whoisme") {
            novoConteudo += '<br>' + whoisme.join('<br>');
        } else if (cmd === "myprojects") {
            novoConteudo += '<br>' + myprojects.join('<br>');
        } else if (cmd === "email") {
            novoConteudo += '<br>' + email.join('<br>');
        } else if (cmd === 'clear') {
            historico.innerHTML = '';
            saida = [];
            novoConteudo = '';
        } else if (cmd === 'banner') {
            novoConteudo += '<pre class = "pre-js">'+banner.innerHTML+'<pre>';
        } else {
            novoConteudo += '<br>' + 'Command not recognized. Try "Help".';
        }

        historico.innerHTML = novoConteudo;

        comando.value = '';
    }
});

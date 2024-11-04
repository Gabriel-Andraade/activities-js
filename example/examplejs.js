document.addEventListener("DOMContentLoaded", function() {
    var numeroAleatorio = Math.floor(Math.random() * 50 + 1);
    var palpites = document.querySelector(".palpites");
    var ultimoResultado = document.querySelector(".ultimoResultado");
    var baixoOuAlto = document.querySelector(".baixoOuAlto");

    var envioPalpite = document.querySelector(".envioPalpite");
    var campoPalpite = document.querySelector(".campoPalpite");

            if (!palpites) console.error("Elemento .palpites não encontrado");
            if (!ultimoResultado) console.error("Elemento .ultimoResultado não encontrado");
            if (!baixoOuAlto) console.error("Elemento .baixoOuAlto não encontrado");
            if (!envioPalpite) console.error("Elemento .envioPalpite não encontrado");
            if (!campoPalpite) console.error("Elemento .campoPalpite não encontrado");

    var contagemPalpite = 1;
    var botaoReinicio;

    function conferirPalpite() {
        var palpiteUsuario = Number(campoPalpite.value);
        if (contagemPalpite === 1) {
            palpites.textContent += palpiteUsuario + " ";
        }

        if (palpiteUsuario === numeroAleatorio) {
            ultimoResultado.textContent = "Xablau";
            ultimoResultado.style.backgroundColor = "blue";
            baixoOuAlto.textContent = "";
            configFimDeJogo();
        } else if (contagemPalpite === 10) {
            ultimoResultado.textContent = "Caboou";
            baixoOuAlto.textContent = "";
            configFimDeJogo();
        } else {
            ultimoResultado.textContent = "né esse não";
            ultimoResultado.style.backgroundColor = "red";
            if (palpiteUsuario < numeroAleatorio) {
                baixoOuAlto.textContent = "Tá baixo";
            } else if (palpiteUsuario > numeroAleatorio) {
                baixoOuAlto.textContent = "acabou de passar";
            }
        }

        contagemPalpite++;
        campoPalpite.value = "";
        campoPalpite.focus();
    }

    envioPalpite.addEventListener("click", conferirPalpite);

    function configFimDeJogo() {
        campoPalpite.disabled = true;
        envioPalpite.disabled = true;
        botaoReinicio = document.createElement("button");
        botaoReinicio.textContent = "iniciar novo jogo";
        document.body.appendChild(botaoReinicio);
        botaoReinicio.addEventListener("click", reiniciarJogo);
    }

    function reiniciarJogo() {
        contagemPalpite = 1;

        // Limpar o conteúdo dos elementos de resultado
        palpites.textContent = "";
        ultimoResultado.textContent = "";
        baixoOuAlto.textContent = "";

        botaoReinicio.parentNode.removeChild(botaoReinicio);
        campoPalpite.disabled = false;
        envioPalpite.disabled = false;
        campoPalpite.value = "";
        campoPalpite.focus();

        ultimoResultado.style.backgroundColor = "white";
        numeroAleatorio = Math.floor(Math.random() * 50 + 1);
    }
});

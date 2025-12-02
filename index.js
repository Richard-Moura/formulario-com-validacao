const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("name");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    let sucessoMsg = document.getElementById("sucesso");

    let valido = true;

    // Resetando erros
    document.querySelectorAll(".erro").forEach(el => el.style.visibility = "hidden");
    sucessoMsg.textContent = "";

    // Validação nome
    if (nome.value.trim() === "") {
        mostrarErro(nome, "O nome é obrigatório.");
        valido = false;
    }

    // Validação email
    if (email.value.trim() === "") {
        mostrarErro(email, "O email é obrigatório.");
        valido = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        mostrarErro(email, "Digite um email válido.");
        valido = false;
    }

    // Validação mensagem
    if (mensagem.value.trim().length < 10) {
        mostrarErro(mensagem, "A mensagem precisa ter pelo menos 10 caracteres.");
        valido = false;
    }

    // Se tudo ok
    if (valido) {
        sucessoMsg.textContent = "Mensagem enviada com sucesso!";
        form.reset();
    }
});

function mostrarErro(campo, msg) {
    const small = campo.parentElement.querySelector(".erro");
    small.textContent = msg;
    small.style.visibility = "visible";
}

📬 Formulário de Contato com Validação em JavaScript

Este repositório contém um formulário de contato desenvolvido com HTML, CSS e JavaScript, incluindo validação personalizada dos campos antes do envio.
O objetivo é demonstrar uma validação simples, clara e funcional para projetos front-end.

🚀 Funcionalidades

✔️ Campo Nome obrigatório

✔️ Campo Email obrigatório + validação básica

✔️ Mensagem deve ter pelo menos 10 caracteres

✔️ Exibição de mensagens de erro abaixo de cada campo

✔️ Limpeza automática do formulário após envio

✔️ Mensagem de sucesso exibida ao final


🧠 Como Funciona a Validação

A validação acontece no arquivo index.js:

Verifica se os campos estão vazios

Verifica se o email contém @ e .

Verifica se a mensagem tem no mínimo 10 caracteres

Exibe erros com <small class="erro">

Exibe mensagem de sucesso quando tudo está válido
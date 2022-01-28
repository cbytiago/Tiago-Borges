$("#entrar").click(function(){
    
    var nome = $("#nome").val()
    var senha = $("#senha").val()

    if(nome == ''){
        alert('Nome Inválido')
        nome.focus()
        return
    }

    if(senha == ''){
        alert('Senha Inválida')
        senha.focus()
        return
    }
    
    alert("Login com Sucesso!")
    $(location).attr('href', 'index.html');
})

// /* Função Validar */
// function validar() {
//     // pegando o valor do nome pelos names
//     var nome = document.getElementById("nome");
//     var sobrenome = document.getElementById("sobrenome");
//     var email = document.getElementById("email");
//     var senha = document.getElementById("senha");
//     var telefone = document.getElementById("telefone");
//     var cep = document.getElementById("cep");
//     var sexo = document.getElementById("sexo");
//     var newsletter = document.getElementById("newsletter").checked;
  
//     // verificar se o nome está vazio
//     if (nome.value == "") {
//       alert("Nome não informado");
  
//       // Deixa o input com o focus
//       nome.focus();
//       // retorna a função e não olha as outras linhas
//       return;
//     }
//     if (sobrenome.value == "") {
//       alert("Sobrenome não informado");
//       sobrenome.focus();
//       return;
//     }
//     if (email.value == "") {
//       alert("E-mail não informado");
//       email.focus();
//       return;
//     }
//     if (senha.value == "") {
//       alert("Senha não informada");
//       senha.focus();
//       return;
//     }
//     if (telefone.value == "") {
//       alert("Telefone não informado");
//       telefone.focus();
//       return;
//     }
//     if (cep.value == "") {
//       alert("CEP não informado");
//       cep.focus();
//       return;
//     }
//     if (sexo.value == "") {
//       alert("CEP não informado");
//       sexo.focus();
//       return;
//     }
//     alert("Formulário enviado!");
//     // envia o formulário
//     //formulario.submit();
//   }

function valida_dados (nomeform)
{
  if (nomeform.nome.value==""){
    alertt ("Por favor digite o nome.");
    return false;
  }

  if (nomeform.email.value=="" || nomeform.email.value.ind ex0f('@','0')==-1 || nomeform.email.valueinde x0f('.','0')==-1){
    alert ("E-mail inválido");
    return false;
  }

  if (nomeform.estado.selected Index==0){
    alert("Por favor selecione o estado");
    return false;
  }

  if (nomeform.login.value.len gth < 5 || nomeform.login.value.len gth > 15)
    alert("O login deve conter entre 5 e 15 caracteres");
  return false;
}

if (nomeform.login.value.ind es0f(' ','0')!= -1){
  alert("O login não pode conter espaços em branco");
  return false;
}

if (nomeform.senha.value.len gth < 5 || nomeform.senha.value.len gth > 15)
  alert("A senha deve conter entre 5 e 15 caracteres");
return false;
}

if (nomeform.senha.value.ind es0f(' ','0')!= -1){
  alert("A senha não pode conter espaços em branco");
  return false;
}

if (nomeform.senha.value!= nomeform.confirmação.val ue){
  alert ("Senhas não conferem, você digitou duas senhas diferentes");
  return false;
}
return true;
}
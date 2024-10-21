function enviar(){
    var nomeCompleto = document.getElementById('nomeCompleto')
    var emailCompleto = document.getElementById('emailCompleto')
    var tel = document.getElementById('telefone')
    var arquivo = document.getElementById('arquivo')

    var nome = nomeCompleto.value
    var email = emailCompleto.value
    var telefone = tel.valeu
    var arquivoC = arquivo.value

    if(nome === '' || email === '' || telefone === ''){
        alert(`[ERRO] Atenção! Verifique os dados e tente novamente`)
    } else{
        alert(`Olá, ${nome}, assim que possível iremos retornar sua solicitação. 
        Fique atento ao seu email e telefone! `)
        window.location.replace('index.html')//carregando outra página.
    }
}

function login(){
    var login1 = document.getElementById('loginAluno')
    var senha1 = document.getElementById('senhaAluno')

    var loginA = login1.value
    var senhaA = senha1.value


    if(loginA === '' || senhaA === ''){
        alert('[Erro] Atenção! Verifique os dados e tente novamente')
    } else{
        window.location.replace('pagInicial.html')
        alert('Bem vindo novamente!')
    }
}
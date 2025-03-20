const users = [];

// Função para adicionar um novo usuário
function addUser(nome, email, senha) {
    users.push({ nome, email, senha });
    console.log(`Usuário ${nome} adicionado com sucesso!`);
}


function removeUser(email) {
    const index = users.findIndex(user => user.email === email);
    if (index !== -1) {
        const user = users.splice(index, 1);
        console.log(`Usuário ${user[0].nome} removido com sucesso!`);
    } else {
        console.log("Usuário não encontrado.");
    }
}

function updateUserPassword(email, novaSenha) {
    const user = users.find(user => user.email === email);
    if (user) {
        user.senha = novaSenha;
        console.log(`Senha do usuário ${user.nome} atualizada com sucesso!`);
    } else {
        console.log("Usuário não encontrado.");
    }
}

// Exportar as funções para serem usadas em outro arquivo
module.exports = {
    addUser,
    removeUser,
    updateUserPassword
};
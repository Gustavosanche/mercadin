// Simulação de um banco de dados em memória
let usuarios = [
    { username: 'admin', password: 'admin123' }
];

let produtos = [];

// Função para manipular o login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se o usuário existe
    const usuario = usuarios.find(user => user.username === username && user.password === password);

    if (usuario) {
        alert('Login bem-sucedido!');
        // Redirecionar ou realizar ações após o login
        window.location.href = 'index.html'; // Redireciona para a página inicial
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

// Função para manipular o cadastro de produtos
document.getElementById('cadastroProdutoForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const nome = document.getElementById('nome').value;
    const setor = document.getElementById('setor').value;
    const tipo = document.getElementById('tipo').value;

    // Adiciona o produto ao "banco de dados"
    produtos.push({ nome, setor, tipo });
    alert('Produto cadastrado com sucesso!');

    // Limpa os campos do formulário
    document.getElementById('cadastroProdutoForm').reset();
});

// Função para listar produtos (pode ser chamada na index.html)
function listarProdutos() {
    const produtosSection = document.getElementById('produtos');
    produtosSection.innerHTML = '<h2>Produtos</h2>'; // Reseta a seção de produtos

    if (produtos.length === 0) {
        produtosSection.innerHTML += '<p>Nenhum produto cadastrado.</p>';
        return;
    }

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';
        produtoDiv.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Setor: ${produto.setor}</p>
            <p>Tipo: ${produto.tipo}</p>
        `;
        produtosSection.appendChild(produtoDiv);
    });
}

// Chama a função de listar produtos quando a página inicial é carregada
if (window.location.pathname.endsWith('index.html')) {
    listarProdutos();
}
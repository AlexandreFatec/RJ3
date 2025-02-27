class Cliente {
    // Atributos privados
    #cpf;

    constructor(nome, cpf, endereco) {
        this.nome = nome;  // Nome sem formatação
        this.#cpf = cpf;   // CPF mantido como privado
        this.endereco = endereco;  // Endereço sem formatação
        this.telefones = new Set();
    }

    // Método para deixar o nome em caixa alta
    formatarNome() {
        this.nome = this.nome.toUpperCase();
    }

    // Método para deixar o nome do endereço em caixa alta
    formatarEndereco() {
        this.endereco.formatarEndereco(); // Chama o método formatarEndereco da instância Endereco
    }

    // Método genérico para adicionar telefones
    adicionarTelefones(...telefones) {
        telefones.forEach(telefone => this.telefones.add(telefone));
    }

    // Método para exibir detalhes do cliente com o CPF formatado
    detalhes() {
        const detalhesTelefone = [...this.telefones].map(t => `DDD: ${t.ddd} | Número: ${t.numero}`).join('\n');
        return `Nome: ${this.nome}\nCPF: #${this.#cpf}\nEndereço: ${this.endereco.exibirEndereco()}\nTelefones:\n${detalhesTelefone}`;
    }

    // Método para acessar o CPF com o "#" na frente
    getCpf() {
        return `#${this.#cpf}`;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    // Função para retornar o endereço
    exibirEndereco() {
        return `${this.estado} | ${this.cidade} | ${this.rua} | Número: ${this.numero}`;
    }

    // Função para formatar o endereço em caixa alta
    formatarEndereco() {
        this.estado = this.estado.toUpperCase();
        this.cidade = this.cidade.toUpperCase();
        this.rua = this.rua.toUpperCase();
    }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

class Empresa {
    // Atributos privados
    #cnpj;

    constructor(razaoSocial, nomeFantasia, endereco, cnpj) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.endereco = endereco;
        this.#cnpj = cnpj;  // CNPJ mantido como privado
        this.clientes = new Set();
        this.telefones = new Set();
    }

    // Método genérico para adicionar cliente
    adicionarClientes(...clientes) {
        clientes.forEach(cliente => this.clientes.add(cliente));
    }

    // Método genérico para adicionar telefones
    adicionarTelefones(...telefones) {
        telefones.forEach(telefone => this.telefones.add(telefone));
    }

    // Exibe detalhes da empresa e dos seus clientes, com o CNPJ formatado
    detalhes() {
        const detalhesClientes = [...this.clientes].map(cliente => cliente.detalhes()).join('\n\n');
        return `Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\nCNPJ: #${this.#cnpj}\nEndereço: ${this.endereco.exibirEndereco()}\n\n${detalhesClientes}`;
    }

    // Método para acessar o CNPJ com o "#" na frente
    getCnpj() {
        return `#${this.#cnpj}`;
    }
}

// Criando endereço da empresa
let enderecoEmpresa = new Endereco("RJ", "Rio de Janeiro", "Rua das Palmeiras", 204);

// Criando telefones
let telefones = [
    new Telefone(21, 987654321),
    new Telefone(21, 987654322),
    new Telefone(21, 999999999),
    new Telefone(21, 988888888),
    new Telefone(21, 999111222),
    new Telefone(21, 911223344),
    new Telefone(21, 922334455),
    new Telefone(21, 933445566)
];

// Criando a empresa com CNPJ privado
let empresa = new Empresa("Tech Solutions LTDA", "TechZone", enderecoEmpresa, "12345678000100");

// Criando clientes com seus endereços
let cliente1 = new Cliente("Carlos Silva", "98765432100", new Endereco("RJ", "Rio de Janeiro", "Rua das Palmeiras", 204));
let cliente2 = new Cliente("Ana Souza", "87654321011", new Endereco("RJ", "Rio de Janeiro", "Avenida Atlântica", 150));
let cliente3 = new Cliente("Lucas Pereira", "76543210922", new Endereco("RJ", "Niterói", "Rua Washington Luiz", 342));
let cliente4 = new Cliente("Mariana Costa", "65432109833", new Endereco("RJ", "São Gonçalo", "Rua José Bonifácio", 500));

// Formatar nome e endereço para caixa alta
cliente1.formatarNome();
cliente1.formatarEndereco();
cliente2.formatarNome();
cliente2.formatarEndereco();
cliente3.formatarNome();
cliente3.formatarEndereco();
cliente4.formatarNome();
cliente4.formatarEndereco();

// Adicionando telefones aos clientes
cliente1.adicionarTelefones(telefones[0], telefones[1]);
cliente2.adicionarTelefones(telefones[2], telefones[3]);
cliente3.adicionarTelefones(telefones[4], telefones[5]);
cliente4.adicionarTelefones(telefones[6], telefones[7]);

// Adicionando clientes à empresa
empresa.adicionarClientes(cliente1, cliente2, cliente3, cliente4);

// Exibindo detalhes da empresa na tela
console.log(empresa.detalhes());



export interface Paciente{
    nome: string;
    cpf: string;
    rg: string;
    data_nascimento: Date;
    idade: number;
    sexo: string;
    n_atendimentos: number;
}

export interface Endereco{
    pessoa: Paciente;

    cep: string;
    cidade: string;
    endereco: string;
    numero: number;
    bairro: string;
    complemento: string;
    uf: string;
}

export interface Contato{
    pessoa: Paciente;

    telefone: string;
    email: string;
}

export interface DadosMedicos{
    pessoa: Paciente;
    tipoSangueneo: string;
    peso: number;
    altura: number;
    alergias: string;
    doencasPreexistentes: string;
    medicamentosEmUso: string;
}
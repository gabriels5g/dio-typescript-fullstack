interface Pessoa {
  nome: string;
  idade: number;
  profissao?: string;
}

const pessoa: Pessoa = {
  nome: "Gabriel",
  idade: 12,
};

const outraPessoa: Pessoa = {
  nome: "Karol",
  idade: 21,
  profissao: "Desenvolvedora",
};

const arrayPessoa: Array<Pessoa> = [pessoa, outraPessoa];

const arrayNum: number[] = [1, 2, 3];

const arrayString: Array<string> = ["1", "2", "3"];

export class Transacao {
  nome: string;
  tipo: boolean; // true para entrada, false para saída
  preco: number;
  data: Date;
  constructor(nome: string, tipo: boolean, preco: number, data: Date) {
    this.nome = nome;
    this.tipo=tipo;
    this.preco=preco;
    this.data=data;
  }

}
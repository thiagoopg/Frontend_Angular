export interface Transacao {
  nome: string;
  tipo: boolean; // true para entrada, false para saída
  preco: number;
  data: Date;
}
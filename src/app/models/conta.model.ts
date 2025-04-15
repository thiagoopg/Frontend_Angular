import { Transacao } from './transacao.model';

export class Conta {
    id: number;
    nomeConta: string;
    transacoes: Transacao[];
    saldoConta: number;

    constructor(id: number, nome: string, transacoes: Transacao[] = []) {
        this.id = id;
        this.nomeConta = nome;
        this.transacoes = transacoes;
        this.saldoConta = this.calcularSaldo();
    }

    private calcularSaldo(): number {
        return this.transacoes.reduce((total, transacao) => {
            return transacao.tipo ? total + transacao.preco : total - transacao.preco;
        }, 0);
    }
    public pegarTodosOsPrecosDeTransacoes(tipo:boolean): number[] {
        console.log(this.transacoes.map(transacao => transacao.preco));
        return this.transacoes
        .filter(transacao => transacao.tipo === tipo)
        .map(transacao => transacao.preco);
      }
      public pegarTodosOsNomesDeTransacoes(tipo: boolean): string[] {
        return this.transacoes
          .filter(transacao => transacao.tipo === tipo)
          .map(transacao => transacao.nome);
      }
    get gastosUltimoMes(): number {
        const agora = new Date();
        const anoAtual = agora.getFullYear();
        const mesAtual = agora.getMonth();

        return this.transacoes
            .filter(transacao => {
                const data = new Date(transacao.data);
                const ehUltimoMes =
                    (data.getFullYear() === anoAtual && data.getMonth() === mesAtual - 1) ||
                    (mesAtual === 0 && data.getFullYear() === anoAtual - 1 && data.getMonth() === 11);
                return ehUltimoMes && transacao.tipo === false;
            })
            .reduce((total, transacao) => total + transacao.preco, 0);
    }
}

class Sobrevivente {
  constructor(nome) {
    this.nome = nome;
    this.ferimentos = 0;
    this.acoes = 3;
    this.equipamentosMaos = [];
    this.equipamentosMochila = [];
    this.nivel = "Azul";
    this.experiencia = 0;
    this.arvoreHabilidades = [];
  }

  adicionarEquipamento(equipamento) {
    if (this.equipamentosMaos.length < 2) {
      this.equipamentosMaos.push(equipamento);
    } else if (this.equipamentosMochila.length < 3) {
      this.equipamentosMochila.push(equipamento);
    } else {
      console.log(
        `Amigo '${this.nome}' Não é possível adicionar mais equipamentos, você já tem equipamentos nas mãos e na mochila.`
      );
    }
  }

      removerEquipamentoMaos(equipamento) {
        const index = this.equipamentosMaos.indexOf(equipamento);
        if (index !== -1) {
          this.equipamentosMaos.splice(index, 1);
        } else {
          console.log(`Amigo '${this.nome}' Não encontrou o equipamento nas mãos.`);
        }
      }
    
      removerEquipamentoMochila(equipamento) {
        const index = this.equipamentosMochila.indexOf(equipamento);
        if (index !== -1) {
          this.equipamentosMochila.splice(index, 1);
        } else {
          console.log(`Amigo '${this.nome}' Não encontrou o equipamento na mochila.`);
        }
      }
  ferir(dano) {
    if (this.ferimentos < 3) {
      this.ferimentos += dano;
      const equipamentosPerdidos = this.ferimentos;
      this.capacidadeCarregamento = this.equipamentosMaos.length + this.equipamentosMochila.length - equipamentosPerdidos;

      if (this.capacidadeCarregamento < 0) {
        console.log(`Escolha um equipamento para ser excluído '${this.nome}'`);
      }

      if (this.ferimentos >= 3) {
        console.log(`Amigo '${this.nome}' foi morto.`);
      }
    } else {
      console.log(`Amigo '${this.nome}' já foi morto e não pode ser ferido novamente.`);
    }
  }
}


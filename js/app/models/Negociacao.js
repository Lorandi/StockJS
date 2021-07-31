class Negociacao {

  constructor(data, quantidade, valor) {
      this.data = data;
      this.quantidade = quantidade;
      this.valor = valor;
      this.volume = this.quantidade * this.valor
  }

  obtemVolume() {
      return this.quantidade * this.valor;
  }
}



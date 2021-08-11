class MensagemView extends View {

  constructor(elemento) {
      super(elemento);
  }
  // é desnecessário fazer o constructor pois o JS automaticamente considera o 
  // constructor da classe pai.
  // É necessário fazer o constructor na classe filho quando tiver um parametro 
  // exclusivo da classe filho, o que não é o caso desta.

  template(model) {

    return model.texto ?`<p class="alert alert-info">${model.texto}</p>` : `<p></</p>`;
  }
}
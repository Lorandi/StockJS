class NegociacoesView extends View {

  constructor(elemento) {
      super(elemento);
  }
  // é desnecessário fazer o constructor pois o JS automaticamente considera o 
  // constructor da classe pai.
  // É necessário fazer o constructor na classe filho quando tiver um parametro 
  // exclusivo da classe filho, o que não é o caso desta.

  template(model) {

    return `
    <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>                
                  ${model.negociacoes.map(n =>`
                      <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                  
                  `).join('')}
                </tbody>
                <tfoot>
                    <td colspan="3">Volume total</td>
                    <td>
                      ${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                    </td>
                </tfoot>
         </table>
        `;
  }
}


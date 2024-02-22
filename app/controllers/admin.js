import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AdminController extends Controller {
    @tracked appliedfilter = '';//none pois funciona como uma verificação de filtro. ira ser definido um valor quando precisar aplicar o fitro
    @tracked filteredProducts;//rastreada e definida para atribuir os produtos resultantes com base no filtro. 

    @action
    search() {//serach action
        var filter = this.filter;//recebemos o filtro do input
        this.appliedfilter = filter;//definimos o valor da appliedfilter propriedade igual ao filtro

        var rx = new RegExp(filter, 'gi'); // convertemos o filtro em uma expressao regular 

        var products = this.model;//recemos todos os produtos do nosos modelo

        let filtered = products.filter(function (product) {//filtramos nossos produtos onde o titulo ou descrição do produto corresponde ao fitlro
            return product.get('product_title').match(rx) || product.get('desc').match(rx);
        });

        this.filteredProducts = filtered; //definimos o valor da filteredProduct prop riedade igual ao resultado da filtragem
    }
}

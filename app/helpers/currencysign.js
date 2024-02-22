import { helper } from '@ember/component/helper';

export default helper(function currencysign(positional, named) {
  const amount = positional; //preço do produto Passamos o valor como nosso primeiro argumento: {{currencysign 32}}.
  const { currency = '$' } = named; //O valor padrão para o valor é $. Podemos sobrescrevê-lo: {{currencysign 32 currency = '£'}}.
  return `${currency} ${amount}`;
});

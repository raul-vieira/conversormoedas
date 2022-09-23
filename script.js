function Converter() {
  function valorConvertendo() {
    var moedaDe = document.getElementById("moedasde");
    var moedaDeEscolhida = moedaDe.value;
    var moedaPara = document.getElementById("moedaspara");
    var moedaParaEscolhida = moedaPara.value;
    var elementoValoraConverter = document.getElementById("valor");
    var valoraConverter = parseFloat(elementoValoraConverter.value);

    if (moedaDeEscolhida == "BRL" && moedaParaEscolhida == "USD") {
      return valoraConverter / 5.19;
    } else if (moedaDeEscolhida == "USD" && moedaParaEscolhida == "BRL") {
      return valoraConverter * 5.19;
    } else if (moedaDeEscolhida == "BRL" && moedaParaEscolhida == "EUR") {
      return valoraConverter / 5.12;
    } else if (moedaDeEscolhida == "EUR" && moedaParaEscolhida == "BRL") {
      return valoraConverter * 5.12;
    } else if (moedaDeEscolhida == "USD" && moedaParaEscolhida == "EUR") {
      return valoraConverter / 1.01;
    } else if (moedaDeEscolhida == "EUR" && moedaParaEscolhida == "USD") {
      return valoraConverter * 1.01;
    } else {
      return valoraConverter;
    }
  }
  var answer = valorConvertendo().toFixed(2);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado é: " + answer;
  elementoValorConvertido.innerHTML = valorConvertido;
}
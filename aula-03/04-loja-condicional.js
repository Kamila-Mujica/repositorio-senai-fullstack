let valorCompra = 180;
let temCupom = true;
let ehAlunoSENAI = false;
let formaPagamento = "pix";// pix,credito,boleto
const frete = 20
const DESCONTO_CUPOM = valorCompra * 0.10

let valorOriginal = valorCompra;
let frete = 0;
let total = valorCompra;

if (temCupom == true || ehAlunoSENAI == true) {
    valorCompra = valorCompra - DESCONTO_CUPOM;

}
switch (formaPagamento) {

    case "pix":
        valorCompra = valorCompra - (valorCompra * 0.05);
        break;

    case "boleto":
        valorCompra = valorCompra - (valorCompra * 0.05);
        break;

    case "credito":
        valorCompra = valorCompra;
        break;

    default:
        console.log("Opção invalida!");
        break;
}
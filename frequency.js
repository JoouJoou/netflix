const div = document.querySelector(".frequency");
const divAsk = document.querySelector(".asks");
const p1 = document.createElement("p");
const ul = document.querySelector(".lista");

p1.innerHTML =
  "A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.<br /> <br />Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.";
p1.classList.add("textlist");
p1.classList.add("estilo");
const p2 = document.createElement("p");
p2.innerHTML =
  "Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras.";
p2.classList.add("textlist");
p2.classList.add("estilo");
const p3 = document.createElement("p");
p3.innerHTML =
  "Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.<br /> <br />Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.";
p3.classList.add("textlist");
p3.classList.add("estilo");
const p4 = document.createElement("p");
p4.innerHTML =
  "A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.";
p4.classList.add("textlist");
p4.classList.add("estilo");
const p5 = document.createElement("p");
p5.innerHTML =
  "A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.";
p5.classList.add("textlist");
p5.classList.add("estilo");
const p6 = document.createElement("p");
p6.innerHTML =
  "A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos pais.<br /> <br />O recurso de controle dos pais, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.";
p6.classList.add("textlist");
p6.classList.add("estilo");

function toggleP(a, b) {
  const p = document.querySelector(".textlist");
  const li = a.parentElement;
  console.log(a.parentElement);
  switch (b) {
    case 1:
      if ((p && p !== p1) || !p) {
        console.log("oi");
        if (p) ul.removeChild(p);
        li.insertAdjacentElement("afterend", p1);
      } else if (p && p === p1) {
        ul.removeChild(p1);
      }
      break;
    case 2:
      if ((p && p !== p2) || !p) {
        console.log("oi");
        if (p) ul.removeChild(p);
        li.insertAdjacentElement("afterend", p2);
      } else if (p && p === p2) {
        ul.removeChild(p2);
      }
      break;
    case 3:
      if ((p && p !== p3) || !p) {
        console.log("oi");
        if (p) ul.removeChild(p);
        li.insertAdjacentElement("afterend", p3);
      } else if (p && p === p3) {
        ul.removeChild(p3);
      }
      break;
    case 4:
      if ((p && p !== p4) || !p) {
        console.log("oi");
        if (p) ul.removeChild(p);
        li.insertAdjacentElement("afterend", p4);
      } else if (p && p === p4) {
        ul.removeChild(p4);
      }
      break;
    case 5:
      if ((p && p !== p5) || !p) {
        console.log("oi");
        if (p) ul.removeChild(p);
        li.insertAdjacentElement("afterend", p5);
      } else if (p && p === p5) {
        ul.removeChild(p5);
      }
      break;
    case 6:
      if ((p && p !== p6) || !p) {
        console.log("oi");
        if (p) ul.removeChild(p);
        li.insertAdjacentElement("afterend", p6);
      } else if (p && p === p6) {
        ul.removeChild(p6);
      }
      break;
  }
}

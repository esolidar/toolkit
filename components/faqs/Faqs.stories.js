"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Faqs = _interopRequireDefault(require("./Faqs"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Faqs',
  component: _Faqs["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Faqs["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  lang: 'pt',
  tabs: [{
    type: 'general',
    text: 'General Questions'
  }, {
    type: 'charities',
    text: 'For Charities'
  }, {
    type: 'users',
    text: 'For Users'
  }],
  faqs: [{
    id: 1,
    type: 'users',
    title_pt: null,
    description_pt: null,
    title_en: 'How can I donate?',
    description_en: 'For each product listed, the seller can designate a percentage of the total sale amount to be allocated in support of one of our registered charities. Once the seller receives payment for the product, the donation is delivered to the selected charity with no fee taken from the transaction. When you are about to purchase a product, you can see the percentage and which charity will benefit from it.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 1,
    lastUpdate: '2016-04-06 10:59:57',
    dateAdded: '2015-03-12 00:00:00'
  }, {
    id: 2,
    type: 'charities',
    title_pt: 'Que tipo de organizações sem fins lucrativos estão registadas ou se podem registar na eSolidar?',
    description_pt: 'A eSolidar garante a conformidade de todas as organizações sem fins lucrativos registadas na plataforma através de um processo exigente, assegurando que estão legalmente criadas, operacionais, com um propósito social e que não tem qualquer relação com ódio, violência ou atividade ilegal. Todas as organizações sem fins lucrativos que respeitem estes critérios são muito bem-vindas.',
    title_en: 'Which charities are on the site?',
    description_en: 'Charities must be registered with the government and have a mission that is not tied to hate, extremism or violence in any way. Signup is free and we welcome all charities who meet these criteria to join.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 0,
    lastUpdate: '2015-10-13 10:36:00',
    dateAdded: '2015-03-12 00:00:00'
  }, {
    id: 3,
    type: 'general',
    title_pt: 'O que é a eSolidar?',
    description_pt: "A <a href=''>teste</a> eSolidar é uma startup de impacto social que possibilita às organizações sem fins lucrativos venderem produtos e organizarem leilões solidários, entre outras atividades, com o objetivo de angariarem fundos facilmente, sem incorrer em custos elevados. O maior objetivo da eSolidar é ser um mecanismo abrangente para que as organizações sem fins lucrativos angariem fundos online de uma forma rápida, eficaz e com baixo custo, envolvendo ativamente a comunidade neste processo. A eSolidar é igualmente um mercado social onde as pessoas podem vender produtos online (novos ou usados), escolhendo uma organização sem fins lucrativos para doar uma parte dos lucros. ",
    title_en: 'What is eSolidar?',
    description_en: 'eSolidar is a social impact startup that allows users to sell products online whilst designating a charity to receive a proportion of the proceeds. We are also a forum for charities to post products and auctions in order to easily fundraise without incurring large fees. Our goal is to provide an alternative form of fundraising for nonprofit organisations and establish an online community of individuals dedicated to giving to the greater good.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 0,
    lastUpdate: '2015-10-13 10:30:25',
    dateAdded: '2015-03-12 00:00:00'
  }, {
    id: 4,
    type: 'general',
    title_pt: 'Há quanto tempo existimos?',
    description_pt: 'A eSolidar trabalha com organizações sem fins lucrativos em Portugal e no Brasil desde 2014. Após um ano de conquistas nestes mercados, decidimos expandir a nossa plataforma para o Reino Unido também. Com vários anos de experiência em e-commerce e na área de impacto social, temos aprimorado o empenho, dedicação e trabalho árduo necessário para conduzir uma equipa focada no desenvolvimento de soluções e impacto para organizações sem fins lucrativos.',
    title_en: 'How long has eSolidar been around?',
    description_en: 'eSolidar began as a startup servicing charities primarily in Portugal and Brazil. After over a year of success in these markets, we have decided to expand our platform. With several years of experience under our belt in the e-commerce and social impact sector, we have fostered the commitment, dedication and hard work needed to drive a team focused on developing solutions and impact for charities.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 1,
    lastUpdate: '2016-04-06 10:59:59',
    dateAdded: '2015-03-12 00:00:00'
  }, {
    id: 5,
    type: 'general',
    title_pt: 'Porquê escolher a eSolidar?',
    description_pt: 'As organizações sem fins lucrativos passam a maior parte do seu tempo a tentar angariar fundos para garantirem a sua sustentabilidade, invés de estarem focadas no cumprimento da sua missão. A eSolidar é uma forma rápida, fácil e barata para as organizações sem fins lucrativos angariarem fundos, tornando mais fácil para as pessoas que querem ajudar as causas com as quais se preocupam, o fazerem num só lugar.',
    title_en: 'Why eSolidar?',
    description_en: 'Charities spend most of their time fundraising, which takes away from their ability to achieve their mission. eSolidar is an inexpensive way for charities to fundraise, making it easy for people to donate to causes they care about in just one, easy-to-use place.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 1,
    lastUpdate: '2016-04-06 11:00:01',
    dateAdded: '2015-03-12 00:00:00'
  }, {
    id: 6,
    type: 'general',
    title_pt: 'O que é o Paypal?',
    description_pt: 'O PayPal permite às pessoas enviar dinheiro para qualquer pessoa com uma conta registada. É usado por mais de 250 milhões de pessoas e é aceite em todo o mundo, assegurando a protecção e segurança dos dados. Se a pessoa não receber o produto que comprou ou se não corresponder à descrição disponibilizada, o valor correspondente à sua compra pode ser reembolsado através do PayPal.',
    title_en: 'What is PayPal?',
    description_en: 'PayPal allows people to send money to anyone with a registered account. It is used by over 250 million people and is accepted worldwide, ensuring data protection and security. If you do not receive the item you indicated or your goods do not match the description provided, your purchase can be refunded through PayPal.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 0,
    lastUpdate: '2015-10-13 10:31:31',
    dateAdded: '2015-03-12 00:00:00'
  }, {
    id: 7,
    type: 'general',
    title_pt: 'Como é distribuído o dinheiro após uma transação PayPal?',
    description_pt: 'A eSolidar aplica uma pequena taxa de 5% em Portugal e 7.5% fora do país, sobre todas as transações bem-sucedidas entre utilizadores. Por sua vez, às organizações sem fins lucrativos será cobrada uma pequena taxa de 2.5% em Portugal (5% fora do país) para as transações bem-sucedidas. Não cobraremos nenhuma percentagem se o vendedor escolher doar 100% da venda a uma organização sem fins lucrativos. No momento da transação, a divisão do valor é feita automáticamente e vai diretamente para as contas de PayPal de cada interveniente na transação. Por exemplo, um produto com o preço de €100, em que o vendedor escolheu doar 10% da sua venda a uma organização sem fins lucrativos: - O comprador paga €100 - O vendedor recebe €81.75 - A organização sem fins lucrativos recebe €10 - A eSolidar recebe €4.5 (e dá €0.9 a quem fez a partilha que deu origem à compra) - O PayPal recebe €3.75 (a taxa da transação é aplicada ao vendedor e é de aproximadamente 3.4% + €0.35).',
    title_en: 'How is the money distributed?',
    description_en: 'eSolidar applies a 7.5% commission fee on all successful transactions for users, compared to competitors that take upwards of 10%. Charities incur a 5% commission fee for successful transactions. Any percentage designated to a charity does not incur a commission at all, i.e. if the seller chooses to donate 100% of the sale, we do not charge any fees.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 0,
    lastUpdate: '2015-10-14 14:23:07',
    dateAdded: '2015-03-12 00:00:00'
  }, {
    id: 8,
    type: 'general',
    title_pt: 'Que tipos de pagamento posso usar para comprar um produto?',
    description_pt: 'Atualmente pode pagar com PayPal ou cartão de crédito. Pode também recorrer ao pagamento em mão ou envio à cobrança, sendo que, nestes casos, o pagamento não é responsabilidade da eSolidar pelo que, se algo correr mal, o compromisso de resolver o assunto fica entregue ao comprador e ao vendedor. Se o método de pagamento escolhido for o PayPal e algo não correr como esperado, poderá pedir o reembolso do dinheiro junto do PayPal, de forma rápida e segura.',
    title_en: 'What form of payment can I use to purchase a product?',
    description_en: 'Currently, you can only pay using a PayPal account or Credit Card. Payments are processed ​​independently of eSolidar. In the event of a payment dispute, it is the responsibility of both the buyer and seller to resolve the matter. If payment is made utilising a PayPal account, the account holder reserves the right to settle disputes directly through PayPal.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 0,
    lastUpdate: '2015-10-13 10:34:03',
    dateAdded: '2015-03-12 00:00:00'
  }, {
    id: 9,
    type: 'auctions',
    title_pt: 'O que é o Programa de Afiliados?',
    description_pt: 'Com o objetivo de criar uma comunidade solidária online para aumentar o crescimento e a angariação de fundos para organizações sem fins lucrativos, o Programa de Afiliados permite que qualquer pessoa escolha uma organização sem fins lucrativos para doar 1% de todas as vendas realizadas durante um ano. Depois de aderir, terá acesso a um link exclusivo de afiliado para partilhar com a sua comunidade e amigos.',
    title_en: 'What is the Affiliate Programme?',
    description_en: 'In order to create an online community to enhance growth and fundraising for charities, the Affiliate Programme allows any person to designate a charity to receive 1% of all sales conducted within a year. After you sign up, you will have access to a unique link to share with your network. Henceforth, when someone registers on our site with your link, 1% of all proceeds from that user benefit a registered charity of your choice.',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 0,
    lastUpdate: '2016-09-27 10:43:19',
    dateAdded: '2015-03-12 00:00:00'
  }, {
    id: 10,
    type: 'users',
    title_pt: 'Como seleciono uma organização sem fins lucrativos?',
    description_pt: 'Para selecionar uma organização sem fins lucrativos para receber uma percentagem da sua venda deve: 1 – Clicar no botão ‘inserir artigo’ ou ‘começar a vender’ 2 – Selecionar o PayPal como método de pagamento 3 – Escolher a organização sem fins lucrativos para a qual quer doar 4 – Selecionar a percentagem da venda que está disposto a doar à organização sem fins lucrativos escolhida por si 5 – Publicar o seu produto. ',
    title_en: 'How do I select a charity?',
    description_en: 'In order to designate a charity to receive a proportion of your sale, simply: 1 – Click ‘Add Item’ or ‘Start Selling’ 2 – Select PayPal as a payment method 3 – Select the charity that you wish to donate to 4 – Select the percentage of the sale you’d like to go to the charity 5 – Post your item!',
    title_br: null,
    description_br: null,
    position: 1,
    howitworks: 0,
    lastUpdate: '2015-10-13 10:35:20',
    dateAdded: '2015-03-12 00:00:00'
  }],
  type: 'general',
  changeType: function changeType() {},
  changeId: function changeId() {},
  isLoading: false,
  env: {
    cdn_static_url: 'https://static.esolidar.com'
  }
};
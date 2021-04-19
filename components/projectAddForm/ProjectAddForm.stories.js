"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Default = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ProjectAddForm = _interopRequireDefault(require("./ProjectAddForm"));

var _jsxRuntime = require("react/jsx-runtime");

var _default = {
  title: 'Components/Projects/ProjectAddForm',
  component: _ProjectAddForm["default"],
  argTypes: {
    color: {
      control: {
        type: 'object'
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProjectAddForm["default"], (0, _extends2["default"])({}, args));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  hideDropZone: false,
  color: {
    primaryColor: 'red'
  },
  errors: {},
  lang: 'pt',
  categories: [{
    id: 1,
    name: 'Categoria 1'
  }, {
    id: 2,
    name: 'Categoria 2'
  }],
  ods: [{
    id: 1,
    ods_id: 1,
    tag_name: 'ods-1',
    status: true,
    updated_at: '2020-02-05 17:26:34',
    created_at: '2020-02-05 17:26:27',
    name: '1-ods-1'
  }, {
    id: 2,
    ods_id: 2,
    tag_name: 'ods-2',
    status: true,
    updated_at: '2020-02-05 17:26:34',
    created_at: '2020-02-05 17:26:27',
    name: '2-ods-2',
    checked: true
  }],
  images: [{
    created_at: '2020-07-29 11:41:36',
    "default": 1,
    id: 152,
    image: 'whitelabel/5/projects/93f4af44-4755-4993-be56-2fbf283ccb27.jpg',
    image_size: 33970,
    image_type: 'jpg',
    position: 1,
    project_id: 54,
    streamImage: 'amazons3',
    updated_at: '2020-07-29 11:42:59'
  }, {
    created_at: '2020-07-29 11:41:39',
    "default": 0,
    id: 153,
    image: 'whitelabel/5/projects/255ff6ea-adc1-4773-b115-8b67bc62cfe0.jpg',
    image_size: 316018,
    image_type: 'jpg',
    position: 3,
    project_id: 54,
    streamImage: 'amazons3',
    updated_at: '2020-07-29 11:42:59'
  }],
  form: [{
    id: 'input-6',
    name: 'Projetos da Comunidade HPH',
    type: 'title'
  }, {
    id: 'input-7',
    name: 'Ficamos muito contentes pelo seu interesse em fazer parte da nossa Comunidade Human Power Hub Braga!',
    type: 'paragraph'
  }, {
    id: 'input-8',
    name: 'O Human Power Hub (HPH) - Centro de Inovação Social Braga, é um projeto lançado em parceria entre a Câmara Municipal e a Fundação Bracara Augusta, de forma a promover o desenvolvimento da inovação social na cidade de Braga. Valorizamos a inovação e a criação de impacto, por isso contem connosco para se tornarem projetos mais resilientes, fortes e criadores de Impacto ',
    type: 'paragraph'
  }, {
    id: 'input-1',
    name: 'Project title',
    type: 'input',
    fixed: true,
    required: true,
    value: 'Title'
  }, {
    id: 'input-2',
    name: 'Description',
    type: 'textarea',
    fixed: true,
    required: true
  }, {
    id: 'input-3',
    name: 'Categories',
    type: 'dropdown',
    fixed: true,
    required: true,
    reply: '2'
  }, {
    id: 'input-4',
    name: 'ODS',
    type: 'ods',
    fixed: true,
    required: true
  }, {
    id: 'input-5',
    name: 'Images',
    type: 'upload-images',
    fixed: true,
    required: true
  }, {
    id: 'input-9',
    help: '',
    name: 'Entidade Associada',
    type: 'input',
    required: true
  }, {
    id: 'input-10',
    help: 'Justifique porque o problema que está a resolver é 1) Importante (afecta um grande número de pessoas ou um pequeno número de forma muito profunda), é 2) Negligenciado (não está a ser resolvido por outras soluções de forma eficaz), e 3) Gera externalidades (a existência deste problema gera consequências negativas).',
    name: 'Qual o problema social/ambiental que pretende a resolver?',
    type: 'textarea',
    required: true
  }, {
    id: 'input-11',
    help: 'A solução do seu projeto é inovadora se resolver o problema de uma forma mais eficaz que as soluções já existentes, ou se vier resolver um problema que não está a ser resolvido por nenhuma solução',
    name: 'A solução é Inovadora? Justifique.',
    type: 'textarea',
    required: true
  }, {
    id: 'input-12',
    help: 'A sua solução é replicável se conseguir aplicá-la noutros contextos ou geografias, de forma a resolver aí o problema social/ambiental em questão, ou se a solução permitir diferentes aplicações que permitem resolver outros problemas sociais/ambientais (no mesmo ou em outros contextos). Exemplo: as lâmpadas a energia solar são facilmente replicáveis e escaláveis no contexto africano, pois, por serem baratas e fáceis de disseminar em regiões onde predomina a exposição solar, facilmente se tornam uma solução de energia eléctrica para os agregados familiares.',
    name: 'A sua solução é escalável e replicável?',
    type: 'textarea',
    required: true
  }, {
    id: 'input-13',
    help: 'Quem beneficia com a sua solução? Quais os efeitos positivos que gera a sua solução no curto, médio e longo prazo? Quais os benefícios da sua solução e como os pretende medir?',
    name: 'A sua solução gera impacto?',
    type: 'textarea',
    required: true
  }, {
    id: 'input-14',
    help: 'Descreva a forma como o seu projeto permite angariar rendimento de forma a financiar os custos e o funcionamento corrente da mesma? Quem paga pela solução? Para quem é que esta gera valor?',
    name: 'A sua solução é sustentável? Tem um modelo de negócios?',
    type: 'textarea',
    required: true
  }, {
    id: 'input-15',
    help: 'Exemplo: Segue um modelo partilhado entre o sector publico e o sector privado.',
    name: 'Qual o modelo de governança da sua Iniciativa?',
    type: 'textarea',
    required: true
  }, {
    id: 'input-16',
    help: '',
    name: 'Como envolve ou empodera o seu público-alvo?',
    type: 'textarea',
    required: true
  }, {
    id: 'input-17',
    help: '',
    name: 'Tem necessidades de financiamento no seu projeto? Especifique montantes e onde pretende aplicar os recursos financeiros.',
    type: 'textarea',
    required: true
  }, {
    id: 'input-18',
    help: '',
    name: 'Tem necessidades de trabalho voluntariado /pró-bono no seu projecto? Indique em que áreas, para que funções e durante quanto tempo.',
    type: 'textarea',
    required: true
  }, {
    id: 'input-19',
    help: '',
    name: 'Tem necessidades de formação no seu projecto? Especifique as áreas.',
    type: 'textarea',
    required: true
  }, {
    help: 'New multiple choice',
    id: 'input-100',
    isPrivate: true,
    name: 'New multiple choice',
    options: ['Option 1', 'Option 2', 'Option 3'],
    required: true,
    requiredMax: 3,
    requiredMin: 1,
    type: 'checkbox',
    checked: ['Option 3']
  }, {
    help: 'New single choice',
    id: 'input-102',
    isPrivate: true,
    name: 'New single choice',
    options: ['Option 4', 'Option 5', 'Option 6'],
    required: true,
    type: 'radiobox',
    reply: 'Option 3'
  }],
  dragAndDropMessage: 'Arraste e solte alguns ficheiros aqui ou clique para selecionar os ficheiros',
  onChangeCheckbox: function onChangeCheckbox() {},
  onChangeRadiobox: function onChangeRadiobox() {}
};
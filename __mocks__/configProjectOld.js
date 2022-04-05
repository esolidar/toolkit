const configProjectOld = {
  id: 1,
  whitelabel_id: 1,
  summary:
    '<h2>Submeta o seu projeto</h2>\n<p>O Human Power HUB - Centro de Inovação Social de Braga é um conceito centrado nos cidadãos e que visa criar iniciativas empreendedoras de base social em diversos territórios da Cidade de Braga e às quais, denominamos de áreas de transição social.&nbsp;</p>\n<p><br></p>\n<p>Queremos ainda, que &nbsp;nestas experimentações, se trabalhem várias tendências de Inovação Social, permitindo assim o desenvolvimento de &nbsp;experiências e prototipagem de projetos sociais, empoderamento social e apoio a pessoas em situação de dificuldade, social, económica ou geográfica.</p>',
  form: JSON.stringify([
    {
      id: 'input-105',
      name: 'title',
      type: 'title',
      isPrivate: true,
    },
    {
      id: 'input-106',
      name: 'paragraph',
      type: 'paragraph',
      isPrivate: false,
    },
    {
      id: 'input-107',
      name: 'short question',
      help: 'help',
      type: 'input',
      required: true,
      isPrivate: true,
    },
    {
      id: 'input-108',
      name: 'long question',
      help: 'help',
      type: 'textarea',
      required: false,
      isPrivate: false,
    },
    {
      id: 'input-109',
      name: 'single question',
      help: 'help',
      type: 'radiobox',
      required: false,
      isPrivate: false,
      options: ['option A', 'option B'],
    },
    {
      id: 'input-110',
      name: 'multiple choice',
      help: 'help',
      type: 'checkbox',
      required: false,
      requiredMin: 1,
      requiredMax: 2,
      isPrivate: false,
      options: ['option A', 'option B'],
    },
  ]),
  additional_texts: null,
  status: true,
  updated_at: '2020-12-06 15:13:28',
  created_at: '2020-02-19 09:47:16',
};

export default configProjectOld;

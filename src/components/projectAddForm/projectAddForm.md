#### Import

``` html
import { ProjectAddForm } from '@esolidar/toolkit';

```

#### Example

``` jsx
<ProjectAddForm
  color={{
    primaryColor: 'red'
  }}
  errors={{}}
  lang= 'pt'
  categories={[
    {
      id: 1,
      name: 'Categoria 1'
    },
    {
      id: 2,
      name: 'Categoria 2'
    },
  ]}
  ods={[
    {
      id: 1,
      ods_id: 1,
      tag_name: "ods-1",
      status: true,
      updated_at: "2020-02-05 17:26:34",
      created_at: "2020-02-05 17:26:27",
      name: "1-ods-1",
    },
    {
      id: 2,
      ods_id: 2,
      tag_name: "ods-2",
      status: true,
      updated_at: "2020-02-05 17:26:34",
      created_at: "2020-02-05 17:26:27",
      name: "2-ods-2",
      checked: true,
    }
  ]}
  form={[
   {
      id:"input-6",
      name:"Projetos da Comunidade HPH",
      type:"title"
   },
   {
      id:"input-7",
      name:"Ficamos muito contentes pelo seu interesse em fazer parte da nossa Comunidade Human Power Hub Braga!",
      type:"paragraph"
   },
   {
      id:"input-8",
      name:"O Human Power Hub (HPH) - Centro de Inovação Social Braga, é um projeto lançado em parceria entre a Câmara Municipal e a Fundação Bracara Augusta, de forma a promover o desenvolvimento da inovação social na cidade de Braga. Valorizamos a inovação e a criação de impacto, por isso contem connosco para se tornarem projetos mais resilientes, fortes e criadores de Impacto ",
      type:"paragraph"
   },
   {
      id:"input-1",
      name:"Project title",
      type:"input",
      fixed:true,
      required:true,
      value: "Title"
   },
   {
      id:"input-2",
      name:"Description",
      type:"textarea",
      fixed:true,
      required:true
   },
   {
      id:"input-3",
      name:"Categories",
      type:"dropdown",
      fixed:true,
      required:true,
      reply: 2
   },
   {
      id:"input-4",
      name:"ODS",
      type:"ods",
      fixed:true,
      required:true
   },
   {
      id:"input-5",
      name:"Images",
      type:"upload-imags",
      fixed:true,
      required:true
   },
   {
      id:"input-9",
      help:"",
      name:"Entidade Associada",
      type:"input",
      required:true
   },
   {
      id:"input-10",
      help:"Justifique porque o problema que está a resolver é 1) Importante (afecta um grande número de pessoas ou um pequeno número de forma muito profunda), é 2) Negligenciado (não está a ser resolvido por outras soluções de forma eficaz), e 3) Gera externalidades (a existência deste problema gera consequências negativas).",
      name:"Qual o problema social/ambiental que pretende a resolver?",
      type:"textarea",
      required:true
   },
   {
      id:"input-11",
      help:"A solução do seu projeto é inovadora se resolver o problema de uma forma mais eficaz que as soluções já existentes, ou se vier resolver um problema que não está a ser resolvido por nenhuma solução",
      name:"A solução é Inovadora? Justifique.",
      type:"textarea",
      required:true
   },
   {
      id:"input-12",
      help:"A sua solução é replicável se conseguir aplicá-la noutros contextos ou geografias, de forma a resolver aí o problema social/ambiental em questão, ou se a solução permitir diferentes aplicações que permitem resolver outros problemas sociais/ambientais (no mesmo ou em outros contextos). Exemplo: as lâmpadas a energia solar são facilmente replicáveis e escaláveis no contexto africano, pois, por serem baratas e fáceis de disseminar em regiões onde predomina a exposição solar, facilmente se tornam uma solução de energia eléctrica para os agregados familiares.",
      name:"A sua solução é escalável e replicável?",
      type:"textarea",
      required:true
   },
   {
      id:"input-13",
      help:"Quem beneficia com a sua solução? Quais os efeitos positivos que gera a sua solução no curto, médio e longo prazo? Quais os benefícios da sua solução e como os pretende medir?",
      name:"A sua solução gera impacto?",
      type:"textarea",
      required:true
   },
   {
      id:"input-14",
      help:"Descreva a forma como o seu projeto permite angariar rendimento de forma a financiar os custos e o funcionamento corrente da mesma? Quem paga pela solução? Para quem é que esta gera valor?",
      name:"A sua solução é sustentável? Tem um modelo de negócios?",
      type:"textarea",
      required:true
   },
   {
      id:"input-15",
      help:"Exemplo: Segue um modelo partilhado entre o sector publico e o sector privado.",
      name:"Qual o modelo de governança da sua Iniciativa?",
      type:"textarea",
      required:true
   },
   {
      id:"input-16",
      help:"",
      name:"Como envolve ou empodera o seu público-alvo?",
      type:"textarea",
      required:true
   },
   {
      id:"input-17",
      help:"",
      name:"Tem necessidades de financiamento no seu projeto? Especifique montantes e onde pretende aplicar os recursos financeiros.",
      type:"textarea",
      required:true
   },
   {
      id:"input-18",
      help:"",
      name:"Tem necessidades de trabalho voluntariado /pró-bono no seu projecto? Indique em que áreas, para que funções e durante quanto tempo.",
      type:"textarea",
      required:true
   },
   {
      id:"input-19",
      help:"",
      name:"Tem necessidades de formação no seu projecto? Especifique as áreas.",
      type:"textarea",
      required:true
   }
   ]}
/>

```

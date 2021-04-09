#### Import

```js static
import ProjectFilters from '@esolidar/toolkit/lib/components/projectFilters';
```

#### Example

```jsx
<ProjectFilters
  color="red"
  searchTitleLabel="Pesquisar"
  searchLabelPlaceholder="Pesquisar por título"
  onChangeInput={() => {}}
  filtersTitleLabel="Filtros"
  odsLabel="ODS"
  onSelectOds={() => {}}
  categories={[
    {
      id: 1,
      name: 'Categoria 1',
    },
  ]}
  status={[
    {
      id: 1,
      name: 'Pending',
    },
  ]}
  ods={[
    {
      id: 1,
      ods_id: 1,
      name: 'Erradicar a pobreza',
      tag_name: 'ods-1',
      status: 1,
      updated_at: '2020-01-23 10:14:03',
      created_at: '2020-01-23 10:14:03',
    },
    {
      id: 2,
      ods_id: 2,
      name: 'Erradicar a fome',
      tag_name: 'ods-2',
      status: 1,
      updated_at: '2020-01-23 10:14:03',
      created_at: '2020-01-23 10:14:03',
    },
    {
      id: 3,
      ods_id: 3,
      name: 'Saúde de qualidade',
      tag_name: 'ods-3',
      status: 1,
      updated_at: '2020-01-23 10:14:03',
      created_at: '2020-01-23 10:14:03',
    },
  ]}
  categoriesLabel="Selecione a Categoria"
  statusLabel="Selecione o Estado"
  applyButtonLabel="Aplicar filtro"
/>
```

#### Import

``` html
import { TicketsForm } from '@esolidar/toolkit';

```

#### Example

``` jsx
<TicketsForm
  onSubmit={()=>{}}
  onChange={()=>{}}
  errors={{}}
  statusDefault=""
  status={[]}
  priorityDefault=""
  priority={[]}
  openModalFiles={()=>{}}
  disabled={false}
  hideText={false}
  editTicket={{}}
  intl={{}}
  showAddFilesButtton={true}
  showModalFiles={false}
  toggleModalFiles={()=>{}}
  searchFiles={()=>{}}
  search=''
  onSubmitComment={()=>{}}
  onChangeComment={()=>{}}
  addComment={()=>{}}
  showCommentForm={false}
  uploadedFiles={[
    {
      created_at: "2020-06-01 10:44:34",
      file: "https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.jpg?width=300",
      file_size: 282141,
      file_type: "jpg",
      id: 21,
      name: "81734938_10157905502927402_5327388253257465856_o.jpg",
      project_id: 14,
      updated_at: "2020-06-01 10:44:34",
      user_id: 9,
    },
    {
      created_at: "2020-06-01 10:44:34",
      file: "https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.jpg?width=300",
      file_size: 282141,
      file_type: "jpg",
      id: 21,
      name: "81734938_10157905502927402_5327388253257465856_o.jpg",
      project_id: 14,
      updated_at: "2020-06-01 10:44:34",
      user_id: 9,
    }
  ]}
  files={[
    {
      checked: true,
      created_at: "2020-06-01 10:44:34",
      file: "https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.jpg?width=300",
      file_size: 282141,
      file_type: "jpg",
      id: 21,
      name: "81734938_10157905502927402_5327388253257465856_o.jpg",
      project_id: 14,
      updated_at: "2020-06-01 10:44:34",
      user_id: 9,
    },
    {
      created_at: "2020-06-01 10:44:34",
      file: "https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.pdf",
      file_size: 282141,
      file_type: "pdf",
      id: 21,
      name: "81734938_10157905502927402_5327388253257465856_o.pdf",
      project_id: 14,
      updated_at: "2020-06-01 10:44:34",
      user_id: 9,
    },
    {
      created_at: "2020-06-01 10:44:34",
      file: "https://image.testesolidar.com/whitelabel/5/projects/2155e7f1-91d0-443f-808a-691a50abeb3c.jpg?width=300",
      file_size: 282141,
      file_type: "jpg",
      id: 21,
      name: "81734938_10157905502927402_5327388253257465856_o.jpg",
      project_id: 14,
      updated_at: "2020-06-01 10:44:34",
      user_id: 9,
    }
  ]}
  loadingFiles={false}
  onChangeFile={() => {}}
  isLoadingUplod={false}
  onDrop={() => {}}
/>

```
#### Import

``` html
import { PostOptions } from '@esolidar/toolkit';

```

#### Example

``` jsx
<PostOptions
  image={{
    thumbs: {
      cover_image: "https://cdn.esolidar.com/institutions/5e309f02-6004-4a79-9558-1748ac1f010e-DETAIL.png",
      detail: "https://cdn.esolidar.com/institutions/5e309f02-6004-4a79-9558-1748ac1f010e-DETAIL.png",
      thumb: "https://cdn.esolidar.com/institutions/5e309f02-6004-4a79-9558-1748ac1f010e-DETAIL.png",
    }
  }}
  newImages={{
    thumbs: {
      cover_image: "https://cdn.esolidar.com/institutions/5d49a1ab-d808-456e-836f-71abac1f2bcd-DETAIL.png",
      detail: "https://cdn.esolidar.com/institutions/5d49a1ab-d808-456e-836f-71abac1f2bcd-DETAIL.png",
      thumb: "https://cdn.esolidar.com/institutions/5d49a1ab-d808-456e-836f-71abac1f2bcd-DETAIL.png",
    }
  }}
  highlightPost={()=>{}}
  post={{}}
  editPost={()=>{}}
  deletePost={()=>{}}
  closeModal={()=>{}}
  confirmDelete={()=>{}}
  showModalDelete={false}
  showModalUpdate={false}
  role="null"
  companyLogo="https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-THUMB.png"
  postAsCompany={()=>{}}
  user={{
    id: 153074,
    thumbs: {
      original: "https://cdn.esolidar.com/users/153074/1588601339.jpg",
      standard: "https://cdn.esolidar.com/users/153074/1588601339-STANDARD.jpg",
      thumb: "https://cdn.esolidar.com/users/153074/1588601339-THUMB.jpg",
    },
    work_email: [
      {
        company_id: 1007,
        department: null,
        name: "Patrícia Silva",
        role: "admin",
        user: null,
      },
    ]
  }}
  company={{
    id: 1007,
    thumbs: {
      cover_image: "https://cdn.esolidar.com/companies/1007/cover/2b48a9c1-f5f8-4a2a-9c10-4d02ddce451c.jpg",
      detail: "https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-DETAIL.png",
      thumb: "https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-THUMB.png",
    }
  }}
  postAsUser={()=>{}}
  companyName="eSolidar"
  textareaText="Textarea"
  textareaOnChange={()=>{}}
  errors={{}}
  type="share"
  ogImage=""
  deleteScrapterImage={()=>{}}
  deleteScrapter={()=>{}}
  title="title"
  description="description"
  domain="domain"
  onDrop={()=>{}}
  deleteImageGallery={()=>{}}
  onOpenClick={()=>{}}
  onChangCheckBox={()=>{}}
  publicPost="1"
  infoPublicPostText="Info post text"
  isLoading={false}
  onSubmit={()=>{}}
/>
```


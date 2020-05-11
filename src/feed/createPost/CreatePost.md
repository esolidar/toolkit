#### Import

``` html
import { CreatePost } from '@esolidar/toolkit';

```

#### Example

``` jsx
<CreatePost
  showCreateComment={()=>{}}
  companyLogo="https://cdn.esolidar.com/companies/adcdcdd0-abb4-4379-be4a-453ddd4ac295-THUMB.png"
  onSubmit={()=>{}}
  onDrop={()=>{}}
  role="string"
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
  textareaText="text area text"
  commentHereText="comment here"
  textareaOnChange={()=>{}}
  textareaOnKeyDown={()=>{}}
  textareaOnPaste={()=>{}}
  errors={[]}
  type="share"
  ogImage="https://cdn.esolidar.com/institutions/5e98904d-758c-46eb-968e-0baaac1f2b93-DETAIL.jpeg"
  deleteScrapterImage={()=>{}}
  deleteScrapter={()=>{}}
  title="Title"
  description="Description"
  ogDescription="Og Description"
  domain="domain"
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
  deleteImageGallery={()=>{}}
  infoPublicPostText="info Public Post Text"
  publicPost="public Post"
  onChangCheckBox={()=>{}}
  isLoading={false}
/>
```


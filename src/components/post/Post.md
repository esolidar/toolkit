#### Import

``` html
import { Post } from '@esolidar/toolkit';
```

#### Example

``` jsx
<Post
  post={{
    attachment: null,
    created_at: "2020-05-13 15:20:32",
    id: 2,
    parent_id: null,
    project_id: 31,
    replies: [
      {
        attachment: null,
        created_at: "2020-05-13 15:20:32",
        id: 2,
        parent_id: null,
        project_id: 31,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        updated_at: "2020-05-13 15:20:32",
        user_id: 9,
        user: {
            id: 9,
            name: "Patrícia Silva",
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
          },
      }
    ],
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    updated_at: "2020-05-13 15:20:32",
    user_id: 9,
  }}
  user={{
    id: 9,
    name: "Patrícia Silva",
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
  commentUpdated={{}}
  editComment={()=>{}}
  deleteComment={()=>{}}
  onSubmitReply={()=>{}}
  addMessageKeyDown={()=>{}}
  replyValue=""
  commentHereText="Comment here ..."
  textareaOnChange={()=>{}}
  errorsReply={[]}
  deletedComment={{}}
  onKeyDown={()=>{}}
/>
```

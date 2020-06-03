#### Import

``` html
import { TicketsComments } from '@esolidar/toolkit';
```

#### Example

``` jsx
<TicketsComments
  ticketComments={[
    {
    project_comment: {
      attachment_files: [
        {
          created_at: "2020-05-29 08:48:55",
          file: "https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/whitelabel/1/projects/31/files/amazon.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J%2F20200530%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200530T094257Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=53ec28aed49788ccacfaf24390373679d628d60311b4586c25e4ab82a4ba3082",
          file_size: 13264,
          file_type: "pdf",
          id: 39,
          name: "amazon.pdf",
          project_id: 31,
          updated_at: "2020-05-29 08:48:55",
          user_id: 51702,
      },
        {
          created_at: "2020-05-29 08:48:55",
          file: "https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/whitelabel/1/projects/31/files/amazon.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA25334ATHGOYXBR5J%2F20200530%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20200530T094257Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=53ec28aed49788ccacfaf24390373679d628d60311b4586c25e4ab82a4ba3082",
          file_size: 13264,
          file_type: "pdf",
          id: 40,
          name: "teste.pdf",
          project_id: 31,
          updated_at: "2020-05-29 08:48:55",
          user_id: 51702,
      },
      ],
      user: {
        firstName: "Patricia",
        id: 51859,
        image: null,
        institution: null,
        institution_id: null,
        lastName: "Silva",
        name: "Patricia Silva",
        streamImage: "local",
        thumbs: {
          original: "https://static.testesolidar.com/frontend/assets/no-image.png",
          standard: "https://static.testesolidar.com/frontend/assets/no-image.png",
          thumb: "https://static.testesolidar.com/frontend/assets/no-image.png",
        },
      },
    },
    company_id: 1,
    created_at: "2020-05-29 22:24:50",
    id: 11,
    project_id: 13,
    text: "Esta é uma descrição de teste \n https://github.com/esolidar/whitelabel/pull/178",
    updated_at: "2020-05-29 22:24:50",
    user_id: 51859,
    project_comment_id: 11,
    ticket_id: 1,
  },
  ]}
  activePage={1}
  per_page={10}
  total={12}
  handlePageChange={()=>{}}
/>

```

#### Import

``` html
import { NotificationsBell } from '@esolidar/toolkit';
```

#### Example

``` jsx
< NotificationsBell
  notificationsHeadTitle = "Notificações"
  totalNotifications = "20"
  onToggle = {() => (console.log(''))}
  markAllAsReadTitle = "Marcar todas como lidas"
  markAllAsReadFunc = {() => (console.log(''))}
  handleScrollFunc = {() => (console.log(''))}
  notifications = {[
    {
      id: "49690f5e-ea1f-4475-af94-a4588dcac136",
      sender_id: null,
      receiver_id: "9",
      photo: {},
      detail: "https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-DETAIL.png",
      thumb: "https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-THUMB.png",
      cover_image: "https://cdn.testesolidar.com/companies/1/cover/,c761bea5-709f-4ac9-8195-9c347c78bc84.jpg",
      read_at: "2020-02-07T15:47:28.000000Z",
      url: "https://business.testesolidar.com/requests/detail/117#report",
      text: "Finalize a sua iniciativa <u>Lorem Ipsum</u>, faça uma avaliação e anexe arquivos.",
      type: "RequestNotReviewedByCompanyNotification",
      target: "_SELF",
      updated_at: "2020-02-07T15:47:28.000000Z",
      created_at: "2020-01-23T14:42:08.000000Z",
    },
    {
      id: "49690f5e-ea1f-4475-af94-a4588dcac137",
      sender_id: null,
      receiver_id: "9",
      photo: {},
      detail: "https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-DETAIL.png",
      thumb: "https://cdn.testesolidar.com/companies/5e931871-e0d1-48d6-8b95-6cc1cdd76b93-THUMB.png",
      cover_image: "https://cdn.testesolidar.com/companies/1/cover/,c761bea5-709f-4ac9-8195-9c347c78bc84.jpg",
      read_at: null,
      url: "https://business.testesolidar.com/requests/detail/117#report",
      text: "Finalize a sua iniciativa <u>Lorem Ipsum</u>, faça uma avaliação e anexe arquivos.",
      type: "RequestNotReviewedByCompanyNotification",
      target: "_SELF",
      updated_at: "2020-02-07T15:47:28.000000Z",
      created_at: "2020-01-23T14:42:08.000000Z",
    }
  ]}
  loadMoreFunc = {() => (console.log(''))}
  hasMoreToLoad = {false}
  markAsReadFunc = {() => (console.log(''))}
/>
```


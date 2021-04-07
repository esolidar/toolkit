#### Import

```js static
import AuctionAddForm from '@esolidar/toolkit/lib/components/auctionAddForm';
```

#### Example

```jsx
<AuctionAddForm
  esolidarList={false}
  loadingPage={false}
  action={null}
  intl={{
    formatMessage: () => 'some text',
  }}
  timeZones={[]}
  getInstitutions={() => {}}
  institutions={{
    code: 200,
    data: {
      institutions: {
        data: [
          {
            user_id: 1124,
            id: 30,
            category_id: 1,
            name: 'Helpo',
            sigla: 'helpo',
            accept_volunteer: 1,
            accept_donations: 1,
            paypal_email: 'donativos@esolidar.com',
            image:
              'https://static.esolidar.com/institutions/5db984ee-51b4-43c3-b363-23eaac1f17c3.png',
            cover_image:
              'https://cdn.testesolidar.com/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
            country: 208,
            language: 2,
          },
          {
            user_id: 1125,
            id: 31,
            category_id: 1,
            name: 'Fundo Brasileiro para a Biodiversidade',
            sigla: 'AP Braga',
            accept_volunteer: 1,
            accept_donations: 1,
            paypal_email: 'donativos@esolidar.com',
            image:
              'https://static.esolidar.com/institutions/5d00d812-c3a8-47c3-a66c-46bbac1f2e6d.jpg',
            cover_image:
              'https://cdn.testesolidar.com/institutions/cover/fdc46ea6-fea3-446c-87e4-178610260c04.jpeg',
            country: 208,
            language: 2,
          },
        ],
      },
    },
  }}
  showInstitutions={true}
  showProjects={false}
  showBrands={true}
  showPrivate={true}
  projectsList={{}}
  getInstitutionCategories={() => {}}
  institutionCategories={{}}
  getProjectsList={() => {}}
  getBrandsList={() => {}}
  postUploadImage={() => {}}
  addImages={() => {}}
  postAuction={() => {}}
  addAuction={() => {}}
  postAuctionDeleteImage={() => {}}
  brands={{}}
  returnUrl="/"
  userRole="company"
  subscription={[
    {
      created_at: '2019-10-25 10:08:39',
      description: null,
      description_en: null,
      id: 7,
      name: 'whitelabel',
      name_en: null,
      pivot: { subscription_id: 1, feature_id: 7, hide: 0 },
      status: true,
      updated_at: '2019-10-28 17:05:13',
    },
  ]}
  userBankTransfer={{}}
/>
```

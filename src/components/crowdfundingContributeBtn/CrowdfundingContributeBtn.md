#### Import

``` html
import { CrowdfundingContributeBtn } from '@esolidar/toolkit';
```

#### Example

``` jsx
<CrowdfundingContributeBtn
  campaign={
    {
        "id": 1,
        "user_id": null,
        "institution_id": 124,
        "company_id": null,
        "sub_category_id": 1,
        "product_id": 1,
        "title": "Campanha para angariar donativos",
        "title_en": null,
        "tags": "batatas,cebolas,conhaques,motas",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        "description_en": null,
        "video": null,
        "reward": 1,
        "reward_description": "Quem der a maior licitação pode sempre levar o Mitch para casa e tomar conta dele",
        "goal": 7000,
        "minimum_contribution": 1,
        "currency_id": 1,
        "start_date": "2019-03-19 00:00:00",
        "end_date": "2019-04-18 23:00:00",
        "timezone": "UTC",
        "position": 777,
        "recipient_visible": 1,
        "status": "approved",
        "esolidar_list": 1,
        "updated_at": "2020-09-23 09:59:35",
        "created_at": "2019-02-06 12:11:26",
        "contributes_count": 0,
        "contributes_sum": 0,
        "product": {
            "id": 1,
            "payment_method_id": 2,
            "type": "crowdfunding",
            "updated_at": "2020-04-30 09:55:03",
            "created_at": "2019-02-15 11:15:53",
            "payment_method": {
                "id": 2,
                "paypal": 1,
                "stripe": 1,
                "sibs_checkout": 1,
                "sibs_mbway": 1,
                "sibs_multibanco": 1,
                "sibs_directdebit_sepa": 1,
                "sibs_cc": 1,
                "utrust": 0,
                "updated_at": "2019-02-21 12:49:06",
                "created_at": "2019-02-21 12:49:06"
            }
        },
        "institution": {
            "id": 124,
            "name": "Teste Cátia",
            "currency": {
                "id": 1,
                "name": "Euro",
                "small": "EUR",
                "value": "1.172",
                "symbol": "€",
                "status": true,
                "lastUpdate": "2020-10-15 12:00:11"
            },
            "image": "https://s3.eu-west-1.amazonaws.com/esolidar-proto-uploads/institutions/caaca667-45b1-4720-b23e-db024a7531fb.jpeg",
            "sigla": "TC",
            "thumbs": {
                "detail": "https://cdn.testesolidar.com/institutions/caaca667-45b1-4720-b23e-db024a7531fb-DETAIL.jpeg",
                "thumb": "https://cdn.testesolidar.com/institutions/caaca667-45b1-4720-b23e-db024a7531fb-THUMB.jpeg"
            },
            "s3_image_key": "institutions/caaca667-45b1-4720-b23e-db024a7531fb.jpeg",
            "s3_cover_key": null
        },
        "company": null,
        "images": [
            {
                "id": 39,
                "crowdfunding_id": 1,
                "image": "crowdfundings/LRM_EXPORT_390657949990823_20191027_154913292-184d4bfd-3182-4e72-aca6-aecc7d650e27.jpg"
            }
        ],
        "currency": {
            "id": 1,
            "name": "Euro",
            "small": "EUR",
            "value": "1.172",
            "symbol": "€",
            "status": true,
            "lastUpdate": "2020-10-15 12:00:11"
        },
        "sub_category": {
            "id": 1,
            "category_id": 6,
            "name": "Telemóveis / smartphones",
            "name_en": "Smartphones & Mobile",
            "info": "Dual-Band GSM Phone ,Tri-Band GSM Phone ,WAP-enabled GSM Phone ,PHS Phone",
            "status": "A",
            "dateAdded": "2014-07-08 10:56:50",
            "category": {
                "id": 6,
                "name": "Eletrónica",
                "name_en": "Electronic",
                "info": null,
                "status": "A",
                "css_classes": "categ-electronics",
                "dateAdded": "2014-07-07 10:36:05"
            }
        },
        "projects": []
    }
  }
  env={{
    cdn_static_url: 'https://static.esolidar.com'
  }}
  onChangeValue={() => {}}
  errors={null}
  value='10.00'
  countDownStatus='running'
  checkoutContribution={() => {}}
  isLoadingButton={false}
/>
```
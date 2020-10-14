#### Import

``` html
import { ContributesList } from '@esolidar/toolkit';
```

#### Example

``` jsx
<ContributesList
  contributesList={[
	{
		"id": 140,
		"company_id": null,
		"payment_product_id": 468,
		"message": "",
		"hidden": 1,
		"updated_at": "2020-04-09 16:30:18",
		"created_at": "2020-04-09 16:30:18",
		"laravel_through_key": 39,
		"contributor": null,
		"payment_product": {
			"id": 468,
			"payment_id": 337,
			"product_id": 39,
			"quantity": 1,
			"amount": 26,
			"currency_id": 1,
			"info": "{\"hidden\":\"1\",\"message\":\"\",\"checked\":1}",
			"updated_at": "2020-04-09 16:30:17",
			"created_at": "2020-04-09 16:30:17",
			"currency": {
				"id": 1,
				"name": "Euro",
				"small": "EUR",
				"value": "1.174",
				"symbol": "€",
				"status": true,
				"lastUpdate": "2020-10-14 00:00:03"
			}
		}
	}
]}
  loadingContributesList={true}
  loadingContributes={false}
  total={1}
  showMoreContributes={() => {}}
/>
```

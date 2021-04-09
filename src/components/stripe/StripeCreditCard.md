#### Import

```js static
import { StripeCreditCard } from '@esolidar/StripeCreditCard';
```

#### Example

```js static
<StripeCreditCard
  submitStripePayment={() => {}}
  loadingStripe={false}
  total={100}
  currencyId={1}
  updateState={() => {}}
  order={{}}
  env={{
    stripe: {
      publishableKey: 'pk_test_k1GFy6gdCeEfB8yfQWVWEQvZ',
      publishableKeyBr: 'pk_test_Og1YsCuVnh08BMh7gNbBKZ9z00NpxiYELH',
    },
  }}
/>
```

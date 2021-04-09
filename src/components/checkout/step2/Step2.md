#### Import

```js static
import Step2 from '@esolidar/toolkit/lib/components/step2';
```

#### Example

```jsx
<Step2
  state={{
    isLoadingPayment: false,
    errors: {},
    receipt: 1,
    nif: '123456789',
    invoice_address: '',
    agree: 1,
  }}
  onChangCheckBoxInvoicing={() => {}}
  onChange={() => {}}
  translateMessage={() => 'Some text'}
/>
```

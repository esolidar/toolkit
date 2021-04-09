#### Import

```js static
import RadioField from '@esolidar/toolkit/lib/elements/radioField';
```

#### Example

```jsx
<RadioField
  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  error="error"
  onChange={(x)=>console.log('test', x)}
  name="CheckboxField_name"
  value="CheckboxField_value"
  checked={true}
  disabled={false}
  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
/>
<RadioField
  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  error="error"
  onChange={(x)=>console.log('test', x)}
  name="CheckboxField_name"
  value="CheckboxField_value"
  checked={false}
  disabled={false}
/>
```

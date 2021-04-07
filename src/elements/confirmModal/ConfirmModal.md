#### Import

```js static
import ConfirmModal from '@esolidar/toolkit/lib/elements/confirmModal';
```

#### Example

```jsx
<ConfirmModal
  onConfirm={() => {
    alert('Confirmed');
  }}
  body="Are you sure you want to delete this?"
  confirmText="Confirm Delete"
  title="Deleting Stuff"
>
  <button>Delete Stuff</button>
</ConfirmModal>
```

#### Import

```html
import { CustomModal } from '@esolidar/toolkit';
```

#### Example

```jsx
<CustomModal
  actionsChildren={
    <>
      <button className="btn btn-secondary">Cancelar</button>
      <button className="btn btn-primary">Guardar</button>
    </>
  }
  bodyChildren={<p>Hello world!</p>}
  onHide={() => {}}
  show={false}
  title="Title"
  subtitle="subtitle"
/>
```

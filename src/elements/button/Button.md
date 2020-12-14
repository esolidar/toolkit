#### Import

```html
import { Button } from '@esolidar/toolkit';
```

#### Example

```jsx
<div>
  <h5>Full</h5>
  <div className="mb-3">
    <Button extraClass="info-full" target="_blank" href="#" text="info-full" />
    <Button extraClass="dark-full" target="_blank" href="#" text="dark-full" />
    <Button
      extraClass="success-full"
      target="_blank"
      href="#"
      text="success-full"
    />
    <Button
      extraClass="danger-full"
      target="_blank"
      href="#"
      text="danger-full"
    />
    <Button
      extraClass="warning-full"
      target="_blank"
      href="#"
      text="warning-full"
    />
  <Button extraClass="link" target="_blank" href="#" text="link" />
  </div>
  <h5>Outline</h5>
  <div className="mb-3">
    <Button extraClass="info" target="_blank" href="#" text="info" />
    <Button extraClass="dark" target="_blank" href="#" text="dark" />
    <Button extraClass="success" target="_blank" type="submit" text="success" />
    <Button extraClass="danger" target="_blank" href="#" text="danger" />
    <Button extraClass="warning" target="_blank" href="#" text="warning" />
  </div>
  <h5>Sizes</h5>
  <div className="mb-3">
    <Button
      extraClass="info-full"
      target="_blank"
      type="submit"
      text="success"
      size="sm"
    />
    <Button
      extraClass="info-full"
      target="_blank"
      type="submit"
      text="success"
      size="md"
    />
    <Button
      extraClass="info-full"
      target="_blank"
      type="submit"
      text="success"
      size="lg"
    />
  </div>
</div>
```

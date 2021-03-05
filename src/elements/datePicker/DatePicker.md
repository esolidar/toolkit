#### Import

``` html
import { DatePicker } from '@esolidar/toolkit';
```

#### Example

``` jsx
<DatePicker
  locale="en"
  selected={new Date('2021-03-05T10:20:30Z')}
  selectsStart
  startDate={new Date('2021-03-05T10:20:30Z')}
  endDate={new Date('2021-03-06T10:20:30Z')}
  showTimeSelect={true}
  onChange={() => {}}
  className="form-control"
  placeholderText="dd-mm-yyyy"
  timeCaption="hour"
  dateFormat="d-MM-yyyy h:mm aa"
/>
```

#### Import

```js static
import Countdown from '@esolidar/toolkit/lib/components/countdown';
```

#### Example

```jsx
import moment from 'moment-timezone';

const format = 'YYYY/MM/DD HH:mm:ss';

<>
  <Countdown
    startDate={moment().add(2, 'd').format(format)}
    endDate={moment().add(3, 'd').format(format)}
    thumb={false}
  />
  <Countdown
    startDate={moment().subtract(1, 'd').format(format)}
    endDate={moment().add(1, 'd').format(format)}
    thumb={false}
  />
  <Countdown
    startDate={moment().subtract(1, 'd').format(format)}
    endDate={moment().add(2, 'h').format(format)}
    thumb={false}
  />
  <Countdown startDate="2021-01-01 10:00:00" endDate="2021-01-01 10:01:00" thumb={false} />
</>;
```

#### Import

``` html
import { ChangeCurrency } from "@esolidar/toolkit";
```

#### Example

``` jsx
<ChangeCurrency 
    currentCurrency={{"id":1,"name":"Euro","small":"EUR","value":1.114,"symbol":"€","status":1,"lastUpdate":"2019-12-16 12:00:03"}}
    currencies={[
        {"id":1,"name":"Euro","small":"EUR","value":1.114,"symbol":"€","status":1,"lastUpdate":"2019-12-16 12:00:03"},
        {"id":1,"name":"U. S. Dollar","small":"USD","value":1.114,"symbol":"€","status":1,"lastUpdate":"2019-12-16 12:00:03"}
    ]}
    onChange={()=>(console.log(''))}
/>
```
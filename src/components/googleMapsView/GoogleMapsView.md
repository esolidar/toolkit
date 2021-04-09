#### Import

```js static
import GoogleMapsView from '@esolidar/toolkit/lib/components/googleMapsView';
```

#### Example

```jsx
<GoogleMapsView
  latitude="41.6918275"
  longitude="-8.8344101"
  onClickMap={() => {}}
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBppPOaHl8Dm8OLmzeDDysyyoAfjuxto2U"
  loadingElement={<div style={{ height: '100%' }} />}
  containerElement={<div style={{ height: '300px' }} />}
  mapElement={<div style={{ height: '100%' }} />}
/>
```

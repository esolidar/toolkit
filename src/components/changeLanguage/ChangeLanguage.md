#### Import
``` html
import ChangeLanguage from "@esolidar/toolkit";
```
#### Example
``` jsx
<div style={{background: '#163352', width: '100%', padding: '20px'}}>
  <ChangeLanguage 
  languages={[{id:0, name: 'pt', translate: "Português (PT)"},{id: 1, name: 'br', translate: "Português (BR)"}, {id: 2, name: 'en', translate: "English"}]} 
  onChangeLang={()=>(console.log(''))}
  currentLang='pt'
  />
</div>
```
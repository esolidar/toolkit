#### Import

``` html
import { Footer } from '@esolidar/toolkit';
```

#### Example

``` jsx
<div style={{position:"relative", minHeight: "300px"}}>
    <Footer
    newsletterTitle="Lorem Ipsum"
    socialTitle="Junte-se a nós"
    socialIcons={[
                { class: "icon-facebook1", url: "https://www.facebook.com/esolidar" },
                { class: "icon-twitter1", url: "#" },
                { class: "icon-linkedin21", url: "#" },
                { class: "icon-google-plus1", url: "#" }
                ]}
    copyright="All rights reserved."
    currentLang="pt"
    onChangeLang={()=>(console.log(''))}
    currencyChanged={()=>(console.log(''))} 
    languages={[
        { id: 0, name: "pt", translate: "Português (PT)" }, 
        { id: 1, name: "br", translate: "Português (BR)" },
        { id: 2, name: "en", translate: "English" }
        ]}
    showCurrency
    currentCurrency={{"id":1,"name":"Euro","small":"EUR","value":1.114,"symbol":"€","status":1,"lastUpdate":"2019-12-16 12:00:03"}}
    currencies={[
        {id:1,name:"Euro",small:"EUR",value:1.114,symbol:"€",status:1,lastUpdate:"2019-12-16 12:00:03"},
        {id:1,name:"U. S. Dollar",small:"USD",value:1.114,symbol:"€",status:1,lastUpdate:"2019-12-16 12:00:03"}
    ]} 
    mainMenuFooter={[
        { text:"Follow us", url: "#", target: "_self"}, 
        { text:"Follow us", url: "#", target: "_self"}, 
        { text:"Follow us", url: "#", target: "_self"}, 
    ]}
    secondMenuFooter={[
        { text: "Follow us", url: "#", target: "_self"}, 
        { text: "Follow us", url: "#", target: "_self",
                submenu:[
                    { text: "Follow us", url: "#", target: "_self"},
                    { text: "Follow us", url: "#", target: "_self"}
                    ]}, 
    ]}
    bottomMenuFooter={[
        { text: "Terms and Conditions", url: "#", target: "_self"},
        { text: "Privacy Policy", url: "#", target: "_self"},
    ]}
/>
</div>
```


#### Import

``` html
import { BankAccount } from '@esolidar/toolkit';

```

#### Example

``` jsx
<BankAccount
  intl={() => ('')}
  countryId={208}
  color="green"
  postBankTransfer={() => {}}
  bankTransfer={{
    1: [{
      iban: 'PT69003506516188419472534',
      bic: 'TOTAPTPL',
    },
   ],
    150: [{
      bank_branch: '123',
      bank_checking_account: '123',
      bank_number: '123123',
      beneficiary: '123123',
      cnpj: '131212312323',
    }],
    208: [{
      iban: 'PT69003506516188419472534',
      nib: '003506516188419472534',
      bic: 'TOTAPTPL',
    }],
    231: [{
      accountholder: 'Joel Calheiros',
      banksortcode: '122345',
      accountnumber: '324234324',
    }],
  }}
/>

```

import institution from './institution';

const giftcards = [
  {
    id: 118,
    company_id: 1,
    name: 'Giftcard Oliver',
    description: 'Lorem ippsum',
    amount: 10,
    amount_usd: 11.8,
    currency_id: 1,
    expire_at: '2020-11-13 00:00:00',
    updated_at: '2020-04-15 10:28:14',
    created_at: '2020-04-15 10:28:14',
    laravel_through_key: 'email@gmail.com',
    giftcard_institution: [],
    currency: { id: 1, name: 'Euro', small: 'EUR', value: 1.091, symbol: '€', status: 1 },
  },
  {
    id: 119,
    company_id: 1,
    name: 'Giftcard Oliver',
    description: 'Lorem ippsum',
    amount: 10,
    amount_usd: 11.8,
    currency_id: 1,
    expire_at: '2020-11-13 00:00:00',
    updated_at: '2020-04-15 10:28:14',
    created_at: '2020-04-15 10:28:14',
    laravel_through_key: 'email@gmail.com',
    giftcard_institution: [
      {
        created_at: '2021-12-06 11:26:30',
        donate_pack_id: null,
        donor_name: 'Patricia Silva',
        employee_id: 'patricia+company@esolidar.com',
        id: 1286,
        institution,
        institution_id: 106,
        laravel_through_key: 227,
        member_id: null,
        message: null,
        number_of_packs: null,
        updated_at: '2021-12-06 11:26:30',
      },
    ],
    currency: { id: 1, name: 'Euro', small: 'EUR', value: 1.091, symbol: '€', status: 1 },
  },
];

export default giftcards;

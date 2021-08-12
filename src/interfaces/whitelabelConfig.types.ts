import Company from './company.types';

interface WhitelabelConfig {
  id: number;
  company_id: number;
  domain: string;
  subdomain: string;
  company: Company;
}

export default WhitelabelConfig;

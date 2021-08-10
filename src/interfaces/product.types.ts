interface PaymentMethod {
  id: number;
  paypal: number;
  stripe: number;
  sibs_checkout: number;
  sibs_mbway: number;
  sibs_multibanco: number;
  sibs_directdebit_sepa: number;
  sibs_cc: number;
  utrust: number;
  updated_at: string;
  created_at: string;
}

interface Product {
  id: number;
  payment_method_id: number;
  type: string;
  updated_at: string;
  created_at: string;
  payment_method: PaymentMethod;
}

export default Product;

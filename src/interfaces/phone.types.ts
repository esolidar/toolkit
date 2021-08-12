interface Phone {
  id: number;
  user_id: number;
  phone: string;
  code: string;
  main: number;
  twilio_sid: string;
  verified: number;
  updatedDate: string;
  dateAdded: string;
}

export default Phone;

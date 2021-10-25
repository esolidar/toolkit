interface SetNewPasswordResponse {
  data: SetData;
  status: number;
}

interface SetData {
  request_time: number;
  code: number;
  data: DataData;
}

interface DataData {
  message: string;
  exception: string;
  file: string;
  line: number;
}

export default SetNewPasswordResponse;

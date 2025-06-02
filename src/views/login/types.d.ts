import type { AxiosResponse } from "axios";

interface LoginResponse extends AxiosResponse {
  data?: {
    token?: string;
  };
}

export type { LoginResponse };

/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface IPackResp<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface IHomeData {
  func: string;
  imgSrc: string;
}

export interface IResponsePost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IResponseUserGeo {
  lat: string;
  lng: string;
}

interface IResponseUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IResponseUserGeo;
}

interface IResponseUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IResponseUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IResponseUserAddress;
  phone: string;
  website: string;
  company: IResponseUserCompany;
}

export interface IResponseUserNames {
  [key: string]: string;
}

import { Pet } from "./pet";

interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  zipcode: string;
  state: string;
  country: string;
  phone: string;

  pets?: Pet[];
}

export class User {
  private props: IUser;

  get id(): number | undefined {
    return this.props.id;
  }

  set id(id: number | undefined) {
    this.props.id = id;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get avatar(): string {
    return this.props.avatar;
  }

  get zipcode(): string {
    return this.props.zipcode;
  }

  get state(): string {
    return this.props.state;
  }

  get country(): string {
    return this.props.country;
  }

  get phone(): string {
    return this.props.phone;
  }

  constructor(props: IUser) {
    this.props = props;
  }
}

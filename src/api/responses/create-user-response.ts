interface CreateUserResponseProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  zipcode: string;
  state: string;
  country: string;
  phone: string;
}

export class CreateUserResponse {
  private props: CreateUserResponseProps;

  constructor(props: CreateUserResponseProps) {
    this.props = props;
  }

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
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
}

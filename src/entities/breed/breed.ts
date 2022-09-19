interface BreedProps {
  uuid: string;
  name: string;
}

export class Breed {
  private props: BreedProps;

  get uuid(): string {
    return this.props.uuid;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: BreedProps) {
    this.props = props;
  }
}

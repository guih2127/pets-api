interface BreedProps {
  id: number;
  name: string;
}

export class Breed {
  private props: BreedProps;

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: BreedProps) {
    this.props = props;
  }
}

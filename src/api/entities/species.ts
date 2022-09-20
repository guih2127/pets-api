interface SpeciesProps {
  id: number;
  name: string;
}

export class Species {
  private props: SpeciesProps;

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: SpeciesProps) {
    this.props = props;
  }
}

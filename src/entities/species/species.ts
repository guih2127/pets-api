interface SpeciesProps {
  uuid: string;
  name: string;
}

export class Species {
  private props: SpeciesProps;

  get uuid(): string {
    return this.props.uuid;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: SpeciesProps) {
    this.props = props;
  }
}

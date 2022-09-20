interface SpeciesProps {
  id?: number;
  name: string;
}

export class Species {
  private props: SpeciesProps;

  get id(): number | undefined {
    return this.props.id;
  }

  set id(id: number | undefined) {
    this.props.id = id;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: SpeciesProps) {
    this.props = props;
  }
}

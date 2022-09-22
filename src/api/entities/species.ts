export interface ISpecies {
  id?: number;
  name: string;
}

export class Species {
  private props: ISpecies;

  get id(): number | undefined {
    return this.props.id;
  }

  set id(id: number | undefined) {
    this.props.id = id;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: ISpecies) {
    this.props = props;
  }
}

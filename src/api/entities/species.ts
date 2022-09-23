import { Breed } from "./breed";

export interface ISpecies {
  id?: number;
  name: string;

  breeds?: Breed[];
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

  get breeds(): Breed[] {
    return this.props.breeds;
  }

  constructor(props: ISpecies) {
    this.props = props;
  }
}

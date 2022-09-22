import { Species } from "./species";

export interface IBreed {
  id?: number;
  name: string;
  speciesId: number;

  species?: Species;
}

export class Breed {
  private props: IBreed;

  get id(): number | undefined {
    return this.props.id;
  }

  set id(id: number | undefined) {
    this.props.id = id;
  }

  get name(): string {
    return this.props.name;
  }

  get speciesId(): number {
    return this.props.speciesId;
  }

  get species(): Species {
    return this.props.species;
  }

  constructor(props: IBreed) {
    this.props = props;
  }
}

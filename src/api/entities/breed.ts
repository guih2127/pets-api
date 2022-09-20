import { Species } from "./species";

interface BreedProps {
  id?: number;
  name: string;
  speciesId: number;

  species?: Species;
}

export class Breed {
  private props: BreedProps;

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

  constructor(props: BreedProps) {
    this.props = props;
  }
}

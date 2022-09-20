import { Species } from "./species";

interface BreedProps {
  id: number;
  name: string;
  species: Species;
}

export class Breed {
  private props: BreedProps;

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get species(): Species {
    return this.props.species;
  }

  constructor(props: BreedProps) {
    this.props = props;
  }
}

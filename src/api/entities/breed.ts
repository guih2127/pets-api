import { Species } from "./species";

interface BreedProps {
  id: number;
  name: string;
  speciesId: number;
}

export class Breed {
  private props: BreedProps;

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get speciesId(): number {
    return this.props.speciesId;
  }

  constructor(props: BreedProps) {
    this.props = props;
  }
}

import { Species } from "./species";
import { User } from "./user";
import { Breed } from "./breed";
import { Gemre } from "./gemre";

interface PetProps {
  id: number;
  name: string;
  description: string;
  pictures: string[];
  author: User;
  species: Species;
  breed: Breed;
  gemre: Gemre;
}

export class Pet {
  private props: PetProps;

  get id(): number {
    return this.props.id;
  }
  get name(): string {
    return this.props.name;
  }
  get description(): string {
    return this.props.description;
  }
  get pictures(): string[] {
    return this.props.pictures;
  }
  get author(): User {
    return this.props.author;
  }
  get species(): Species {
    return this.props.species;
  }
  get breed(): Breed {
    return this.props.breed;
  }
  get gemre(): Gemre {
    return this.props.gemre;
  }

  constructor(props: PetProps) {
    this.props = props;
  }
}

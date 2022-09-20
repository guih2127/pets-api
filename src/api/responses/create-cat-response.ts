import { Breed } from "../entities/breed";
import { Species } from "../entities/species";
import { Genre } from "../entities/genre";
import { User } from "../entities/user";

interface CreatePetResponseProps {
  id: number;
  name: string;
  description: string;
  picture: string;
  author: User;
  breed: Breed;
  species: Species;
  genre: Genre;
}

export class CreatePetResponse {
  private props: CreatePetResponseProps;

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get picture(): string {
    return this.props.picture;
  }

  get author(): User {
    return this.props.author;
  }

  get breed(): Breed {
    return this.props.breed;
  }

  get species(): Species {
    return this.props.species;
  }

  get genre(): Genre {
    return this.props.genre;
  }

  constructor(props: CreatePetResponseProps) {
    this.props = props;
  }
}

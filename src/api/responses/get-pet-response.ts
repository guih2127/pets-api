import { Breed } from "../entities/breed";
import { Species } from "../entities/species";
import { Genre } from "../entities/genre";
import { User } from "../entities/user";
import { UserModel } from "../models/user-model";

interface GetPetResponseProps {
  id: number;
  name: string;
  description: string;
  picture: string;
  user: UserModel;
  breed: Breed;
  species: Species;
  genre: Genre;
}

export class GetPetResponse {
  private props: GetPetResponseProps;

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

  get user(): UserModel {
    return this.props.user;
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

  constructor(props: GetPetResponseProps) {
    this.props = props;
  }
}

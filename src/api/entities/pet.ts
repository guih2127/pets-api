import { Breed } from "./breed";
import { Genre } from "./genre";
import { Species } from "./species";
import { User } from "./user";

interface PetProps {
  id?: number;
  name: string;
  description: string;
  picture: string;
  authorId: number;
  speciesId: number;
  breedId: number;
  genreId: number;

  author?: User;
  genre?: Genre;
  breed?: Breed;
  species?: Species;
}

export class Pet {
  private props: PetProps;

  get id(): number | undefined {
    return this.props.id;
  }

  set id(id: number | undefined) {
    this.props.id = id;
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

  get authorId(): number {
    return this.props.authorId;
  }

  get author(): User {
    return this.props.author;
  }

  get speciesId(): number {
    return this.props.speciesId;
  }

  get species(): Species {
    return this.props.species;
  }

  get breedId(): number {
    return this.props.breedId;
  }

  get breed(): Breed {
    return this.props.breed;
  }

  get genreId(): number {
    return this.props.genreId;
  }

  get genre(): Genre {
    return this.props.genre;
  }

  constructor(props: PetProps) {
    this.props = props;
  }
}
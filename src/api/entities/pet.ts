interface PetProps {
  id?: number;
  name: string;
  description: string;
  picture: string;
  authorId: number;
  speciesId: number;
  breedId: number;
  genreId: number;
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

  get speciesId(): number {
    return this.props.speciesId;
  }

  get breedId(): number {
    return this.props.breedId;
  }

  get genreId(): number {
    return this.props.genreId;
  }

  constructor(props: PetProps) {
    this.props = props;
  }
}

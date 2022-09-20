interface GenreProps {
  id?: number;
  name: string;
}

export class Genre {
  private props: GenreProps;

  get id(): number | undefined {
    return this.props.id;
  }

  set id(id: number | undefined) {
    this.props.id = id;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: GenreProps) {
    this.props = props;
  }
}

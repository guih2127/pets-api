interface GenreProps {
  id: number;
  name: string;
}

export class Genre {
  private props: GenreProps;

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: GenreProps) {
    this.props = props;
  }
}

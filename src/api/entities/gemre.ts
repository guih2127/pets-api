interface GemreProps {
  id: number;
  name: string;
}

export class Gemre {
  private props: GemreProps;

  get id(): number {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: GemreProps) {
    this.props = props;
  }
}

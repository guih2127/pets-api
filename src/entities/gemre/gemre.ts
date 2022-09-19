interface GemreProps {
  uuid: string;
  name: string;
}

export class Gemre {
  private props: GemreProps;

  get uuid(): string {
    return this.props.uuid;
  }

  get name(): string {
    return this.props.name;
  }

  constructor(props: GemreProps) {
    this.props = props;
  }
}

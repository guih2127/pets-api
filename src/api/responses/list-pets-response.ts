import { GetPetResponse } from "./get-pet-response";

interface ListPetsResponseProps {
  pets: GetPetResponse[];
}

export class ListPetsResponse {
  private props: ListPetsResponseProps;

  get pets(): GetPetResponse[] {
    return this.props.pets;
  }

  constructor(props: ListPetsResponseProps) {
    this.props = props;
  }
}

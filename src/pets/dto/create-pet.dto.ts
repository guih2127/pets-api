export class CreatePetDto {
  name: string;
  description: string;
  avatar: string;
  available: boolean;
  userId: number;
  speciesId: number;
}

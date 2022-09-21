export interface CreatePetRequest {
  name: string;
  description: string;
  picture: string;

  userId: number;
  breedId: number;
  genreId: number;
  speciesId: number;
}

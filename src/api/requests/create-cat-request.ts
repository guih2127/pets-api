export interface CreatePetRequest {
  name: string;
  description: string;
  picture: string;

  authorId: number;
  breedId: number;
  genreId: number;
  speciesId: number;
}

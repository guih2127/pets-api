export interface ListPetsRequest {
  name?: string;
  speciesId?: number;
  genreId?: number;
  userId?: number;
  breedId?: number;

  pageSize?: number;
  pageNumber?: number;
}

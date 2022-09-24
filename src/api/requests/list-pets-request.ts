export interface ListPetsRequest {
  name?: string;
  speciesId?: string;
  genreId?: string;
  userId?: string;
  breedId?: string;

  pageSize?: string;
  pageNumber?: string;
}

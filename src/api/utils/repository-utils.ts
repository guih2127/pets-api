interface PaginationObject {
  limit: number;
  offset: number;
}

export abstract class RepositoryUtils {
  public static createLimitAndOffset(
    pageNumber: string,
    pageSize: string
  ): PaginationObject {
    const limit = parseInt(pageSize);
    const offset = (parseInt(pageNumber) - 1) * parseInt(pageSize);

    return { limit, offset } as PaginationObject;
  }

  public static createLikeParam(param: string): string | null {
    return param ? `%${param}% ` : null;
  }
}

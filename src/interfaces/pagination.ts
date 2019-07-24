export interface PaginationInfo {
  total_pages: number;
  per_page: number;
  total: number;
  page: number;
}

export interface PaginatedApiResponse<T> {
  data: T[];
  total_pages: number;
  per_page: number;
  total: number;
  page: number;
}

export interface ApiResponse<T> {
  data: T;
}

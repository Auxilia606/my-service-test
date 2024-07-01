export type ReqDTO = {
  from?: string;
  to?: string;
  pageSize?: string;
  page?: string;
};

export type ResDTO = {
  data: ListData[];
  total: number;
  message: string;
};

export type ListData = {
  id: string;
  title: string;
  content: string;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
};

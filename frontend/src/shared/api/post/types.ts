export type ReqDTO = { id: string };

export type ResDTO = {
  title?: string;
  content?: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
  creator?: string;
  isOwner?: boolean;
};

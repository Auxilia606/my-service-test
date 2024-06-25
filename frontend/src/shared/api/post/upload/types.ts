export type ReqDTO = {
  file: File;
};

export type ResDTO = {
  data: {
    messages: string[];
    baseurl: string;
  };
  success: boolean;
};

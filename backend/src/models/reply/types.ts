export type ReplyDTO = {
  createdAt: string;
  updatedAt: string;
  creator: {
    _id: String;
    nickname: string;
  };
  content: string;
  subReply: SubReplyDTO[];
};

export type SubReplyDTO = {
  createdAt: string;
  updatedAt: string;
  creator: {
    _id: String;
    nickname: string;
  };
  content: string;
};

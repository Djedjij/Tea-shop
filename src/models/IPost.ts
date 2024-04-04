export interface IComment {
  id?: number;
  userName: string;
  text: string;
  date: string;
}

export interface IPost {
  id: number;
  name: string;
  text: string;
  description: string;
  date: string;
  comments: IComment[];
  img: string;
}

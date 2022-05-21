export type UserType={
    avatar:string;
    name:string; 
    login: string;
    url: string;
    followers: number;
    following:number;
  }
  
export type ReposType=Array<RepoType>;
  
export type RepoType={
    name?: string;
    description?: string;
  }
 
export type UserDataType={
    repos:ReposType;
}&UserType;
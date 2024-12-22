import "next-auth";

declare module "next-auth" {
  export interface Session {
    user: {
      id:number;
      email: string;
      token: string;
    };
  }
}

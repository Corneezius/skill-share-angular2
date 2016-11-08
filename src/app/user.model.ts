export class User {
  constructor(
    public username: string,
    public email: string,
    public photo: string,
    public skills_held: string[],
    public skills_wanted: string[],
    public occupation: string
  ) { }
}

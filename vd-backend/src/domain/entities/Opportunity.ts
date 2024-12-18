export class Opportunity {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public location: string,
    public deadline: string,
    public chequeSize: string,
    public type: string,
    public matchingScore: number
  ) {}
}
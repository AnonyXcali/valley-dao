/**
 * @class Oppurtunity
 * this class provides the shape of the Opportunity object
 */
export class Opportunity {
  constructor(
    //unique identifier of the opportunity
    public id: number,

    //title property of the opportunity
    public title: string,

    //description property of the opportunity
    public description: string,
    
    //location property of the opportunity
    public location: string,

    //deadline property of the opportunity
    public deadline: string,

    //cheque_size property of the opportunity
    public chequeSize: string,

    //type property of the opportunity
    public type: string,

    //matching_score property of the opportunity
    public matchingScore: number
  ) {}
}
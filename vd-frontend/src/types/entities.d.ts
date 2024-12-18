/**
 * interface conforming to Opportunity class 
 * in backend provided response
 */
export interface Opportunity {
  id: number;
  title: string;
  description: string;
  location: string;
  deadline: string;
  chequeSize: string;
  type: string;
  matchingScore: number;
}
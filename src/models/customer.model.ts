import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Customer extends Entity {
  @property({
    type: 'string',  // name is not the primary key, keep it as a regular property
    required: true,
  })
  name: string;

  @property({
    type: 'number',  // Ensure id is the primary key
    id: true,
    generated: true,  // Mark as auto-generated
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;


  [prop: string]: any;

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;


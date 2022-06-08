export interface IEvent {
  endDate: number;
  id: number;
  image: string;
  name: string;
  startDate: number;
}

export interface IEventDetail extends IEvent {
  description: string;
}

export interface ICreatEvent {
  name: string;
  desc: string;
  startDate: string;
  endDate: string;
  uploadeImage: string;
}

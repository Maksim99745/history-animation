export interface Event {
  date: string;
  description: string;
}

export interface TimeSegment {
  id: number;
  startYear: number;
  endYear: number;
  category: string;
  events: Event[];
}

export interface HistoryData {
  segments: TimeSegment[];
}

export interface SegmentData {
  date: number;
  text: string;
}

export interface TimelineSegment {
  name: string;
  date_1: string;
  date_2: string;
  sliderData: SegmentData[];
}

export interface TimeCircleProps {
  segments: TimelineSegment[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export interface NavigationProps {
  segments: TimelineSegment[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export interface TimeSliderProps {
  segments: TimelineSegment[];
  activeIndex: number;
}


export interface ChartBoxProps {
  title: string;
  data: { week: string; score: number }[];
  lineColor: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
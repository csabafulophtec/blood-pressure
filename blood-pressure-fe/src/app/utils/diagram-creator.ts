import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const createDiagram = (
  type: 'bar' | 'line',
  labels: any,
  datasets: any,
  ranges: { minValue: number; maxValue: number }
) => {
  return new Chart('canvas', {
    type,
    data: {
      labels,
      datasets,
    },
    options: type === 'bar' ? barOptions(ranges) : lineOptions(ranges),
  });
};

export const lineOptions = (ranges: { minValue: number; maxValue: number }) => {
  return {
    maintainAspectRatio: false,
    scales: {
      y: {
        min: Math.ceil((ranges.minValue - 20) / 10) * 10,
        max: Math.ceil((ranges.maxValue + 10) / 10) * 10,
      },
    },
  };
};

export const barOptions = (ranges: { minValue: number; maxValue: number }) => {
  return {
    maintainAspectRatio: false,
    scales: {
      y: {
        min: Math.ceil((ranges.minValue - 20) / 10) * 10,
        max: Math.ceil((ranges.maxValue + 10) / 10) * 10,
      },
    },
  };
};

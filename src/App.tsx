import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const inputData = {
  labels: ['PT 1.8', 'PT 2', 'PT 2.2', 'PT 2.5', 'PT 2.7'],
  datasets: [],
};
const dataset6 = [
  {
    label: '1 Million/6%',
    data: [6501, 6663, 6830, 6985, 7246],
    fill: true,
    borderColor: 'rgba(75,192,192,1)',
  },
  {
    label: '950K/6%',
    data: [6190, 6340, 6498, 6736, 6894],
    fill: false,
    borderColor: '#742774',
  },
  {
    label: '900K/6%',
    data: [5872, 6017, 6167, 6297, 6542],
    fill: true,
    borderColor: 'rgba(55,2,2,1)',
  },
  {
    label: '850K/6%',
    data: [5557, 5694, 5835, 5853, 6189],
    fill: false,
    borderColor: 'rgba(25,20,222,1)',
  },
  {
    label: '800K/6%',
    data: [5242, 5370, 5504, 5609, 5837],
    fill: true,
    borderColor: 'rgba(5,12,12,1)',
  },
  {
    label: '750K/6%',
    data: [4927, 5047, 5172, 5265, 5485],
    fill: false,
    borderColor: 'rgba(25,92,102,1)',
  },
];
const dataset55 = [
  {
    label: '1 Million/5.5%',
    data: [6247, 6409, 6576, 6731, 6992],
    fill: true,
    borderColor: 'rgba(5,12,12,1)',
  },
  {
    label: '950K/5.5%',
    data: [5945, 6099, 6257, 6399, 6653],
    fill: false,
    borderColor: '#742774',
  },
  {
    label: '900K/5.5%',
    data: [5643, 5788, 5938, 6068, 6313],
    fill: true,
    borderColor: 'rgba(10,31,42,1)',
  },
  {
    label: '850K/5.5%',
    data: [5341, 5478, 5619, 5737, 5873],
    fill: false,
    borderColor: 'rgba(25,60,62,1)',
  },
  {
    label: '800K/5.5%',
    data: [5039, 5167, 5301, 5406, 5634],
    fill: true,
    borderColor: 'rgba(55,72,82,1)',
  },
  {
    label: '750K/5.5%',
    data: [4737, 4857, 4982, 5074, 5294],
    fill: false,
    borderColor: 'rgba(65,92,92,1)',
  },
];
const dataset5 = [
  {
    label: '1 Million/5%',
    data: [6000, 6161, 6328, 6483, 6745],
    fill: true,
    borderColor: 'rgba(75,102,102,1)',
  },
  {
    label: '950K/5%',
    data: [5710, 5863, 6022, 6164, 6417],
    fill: false,
    borderColor: '#742774',
  },
  {
    label: '900K/5%',
    data: [5420, 5565, 5715, 5845, 6090],
    fill: true,
    borderColor: 'rgba(85,112,112,1)',
  },
  {
    label: '850K/5%',
    data: [5130, 5267, 5409, 5526, 5763],
    fill: false,
    borderColor: 'rgba(95,122,122,1)',
  },
  {
    label: '800K/5%',
    data: [4841, 4969, 5102, 5207, 5436],
    fill: true,
    borderColor: 'rgba(105,132,132,1)',
  },
  {
    label: '750K/5%',
    data: [4551, 4671, 4796, 4888, 5108],
    fill: false,
    borderColor: 'rgba(115,142,142,1)',
  },
];
const dataset45 = [
  {
    label: '1 Million/4.5%',
    data: [5758, 5920, 6087, 6242, 6503],
    fill: true,
    borderColor: 'rgba(125,152,152,1)',
  },
  {
    label: '950K/4.5%',
    data: [5480, 5634, 5792, 5935, 6188],
    fill: false,
    borderColor: '#742774',
  },
  {
    label: '900K/4.5%',
    data: [5203, 5348, 5498, 5628, 5873],
    fill: true,
    borderColor: 'rgba(135,162,162,1)',
  },
  {
    label: '850K/4.5%',
    data: [4925, 5062, 5204, 5321, 5558],
    fill: false,
    borderColor: 'rgba(145,172,172,1)',
  },
  {
    label: '800K/4.5%',
    data: [4648, 4776, 4909, 5014, 5243],
    fill: true,
    borderColor: 'rgba(155,182,182,1)',
  },
  {
    label: '750K/4.5%',
    data: [4370, 4490, 4615, 4708, 4928],
    fill: false,
    borderColor: 'rgba(165,192,192,1)',
  },
];
const dataset4 = [
  {
    label: '1 Million/4.5%',
    data: [5524, 5686, 5853, 6008, 6269],
    fill: true,
    borderColor: 'rgba(175,202,202,1)',
  },
  {
    label: '950K/4.5%',
    data: [5260, 5412, 5570, 5713, 5966],
    fill: false,
    borderColor: 'rgba(185,212,212,1)',
  },
  {
    label: '900K/4.5%',
    data: [4992, 5137, 5287, 5417, 5662],
    fill: true,
    borderColor: 'rgba(195,222,222,1)',
  },
  {
    label: '850K/4.5%',
    data: [4726, 4863, 5005, 5122, 5359],
    fill: false,
    borderColor: 'rgba(205,232,232,1)',
  },
  {
    label: '800K/4.5%',
    data: [4460, 4589, 4722, 4827, 5055],
    fill: true,
    borderColor: 'rgba(215,242,242,1)',
  },
  {
    label: '750K/4.5%',
    data: [4194, 4314, 4439, 4532, 4752],
    fill: false,
    borderColor: 'rgba(225,252,252,1)',
  },
];
inputData.datasets = [
  ...dataset6,
  ...dataset55,
  ...dataset5,
  ...dataset45,
  ...dataset4,
];

export function App() {
  return <Line data={inputData} />;
}

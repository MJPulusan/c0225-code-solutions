import RotatingBanner from './RotatingBanner';
import './RotatingBanner.css';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export default function App() {
  return (
    <div>
      <RotatingBanner items={items} />
    </div>
  );
}

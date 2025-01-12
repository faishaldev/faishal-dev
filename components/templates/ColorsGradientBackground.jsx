import Noise from '../../assets/images/noise.png';
import LinePattern from '../../assets/images/line-pattern.svg';
import { cn } from '@/lib/utils';

export default function ColorsGradientBackground({ className = '' }) {
  return (
    <div className={cn(`relative w-full h-full ${className}`)}>
      <div
        className={cn(
          `absolute w-full h-full bg-gradient-to-r from-red-700 via-green-700 to-purple-700`,
        )}
      />
      <div
        className={cn(`absolute w-full h-full opacity-25 animate-noise`)}
        style={{ backgroundImage: `url(${Noise.src})` }}
      />
      <div
        className={cn(`absolute w-full h-full animate-line-pattern`)}
        style={{ backgroundImage: `url(${LinePattern.src})` }}
      />
      <div
        className={cn(
          `absolute inset-0 bg-gradient-to-b from-transparent to-[#101012]`,
        )}
      />
    </div>
  );
}

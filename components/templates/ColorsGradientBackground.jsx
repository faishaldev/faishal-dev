import Noise from '../../assets/images/noise.png';
import LinePattern from '../../assets/images/line-pattern.svg';

export default function ColorsGradientBackground({ className = '' }) {
  return (
    <div
      className={`
        bg-gradient-to-r
        from-red-500
        via-green-500
        to-purple-500
        relative
        w-full
        h-full
        ${className}`}
    >
      <div
        className="absolute w-full h-full opacity-25"
        style={{ backgroundImage: `url(${Noise.src})` }}
      />
      <div
        className="absolute w-full h-full"
        style={{ backgroundImage: `url(${LinePattern.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#101012]" />
    </div>
  );
}

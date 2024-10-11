import { ReactSVG } from 'react-svg';

function Svg({ className, src, alt }) {
  return (
    <ReactSVG
      className={className}
      src={src}
      alt={alt}
      onError={(error) => console.error('Erro ao carregar SVG: ', error)}
    />
  );
}

export default Svg;

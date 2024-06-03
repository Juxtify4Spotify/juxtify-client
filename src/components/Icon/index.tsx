import React from 'react';

type IconProps = {
  name: string;
  filled: 'yes' | 'no';
  className?: string;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ name, filled, className, color }) => {
  const [svgContent, setSvgContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    const iconName = filled === 'yes' ? `${name}-filled.svg` : `${name}.svg`;
    const svgUrl = `/src/assets/icons/${iconName}`;

    fetch(svgUrl)
      .then(response => response.text())
      .then(text => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        const paths = doc.querySelectorAll('path');
        paths.forEach(path => {
          if (className) {
            path.setAttribute('class', className);
          }
          if (color) {
            if (path.getAttribute('stroke') !== null) {
              path.classList.add(`stroke-${color}`);
            }
            if (path.getAttribute('fill') !== null) {
              path.classList.add(`fill-${color}`);
            }
          }
        });
        const serializer = new XMLSerializer();
        const serializedSVG = serializer.serializeToString(doc.documentElement);
        setSvgContent(serializedSVG);
      })
      .catch(error => console.error(`Error fetching SVG: ${iconName}`, error));
  }, [name, filled, className, color]);

  return svgContent ? (
    <div dangerouslySetInnerHTML={{ __html: svgContent }} />
  ) : null;
};

export default Icon;

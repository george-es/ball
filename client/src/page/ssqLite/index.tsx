// 双色球
import React, { useRef, useEffect } from 'react'
import { Bar } from '@antv/g2plot';
interface ISSQLiteProps {

}
const SSQLite: React.FC<ISSQLiteProps> = () => {
  const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
  ];

  const container = useRef(null);
  useEffect(() => {
    if (!container.current) {
      return;
    }
    const bar = new Bar((container as any).current, {
      data,
      xField: 'sales',
      yField: 'year',
      // colorField: 'year',
    });
    bar.render();
  }, []);
  return (
    <div ref={container} />
  )
}

export default SSQLite
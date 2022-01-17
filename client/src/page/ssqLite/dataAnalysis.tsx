// 双色球
import React, { useRef, useEffect } from 'react'
import { Bar } from '@antv/g2plot'
import ssqData from '../../../../py/ssq_data.json'
import formatData from './utils/formatData'
import Search from '../../components/search'
interface ISSQLiteProps {

}


const SSQLite: React.FC<ISSQLiteProps> = () => {

  // const data1 = [
  //   { year: '1951 年', sales: 38 },
  //   { year: '1952 年', sales: 52 },
  //   { year: '1956 年', sales: 61 },
  //   { year: '1957 年', sales: 145 },
  //   { year: '1958 年', sales: 48 },
  // ];

  const redContainer = useRef(null);
  const blueContainer = useRef(null);
  const data = useRef(formatData(ssqData.result))
  useEffect(() => {
    if (!redContainer.current) {
      return;
    }
    const redBar = new Bar((redContainer as any).current, {
      data: data.current.red,
      width: 100,
      xField: 'count',
      yField: 'number',
    });
    redBar.render();
  }, []);
  useEffect(() => {
    if (!blueContainer.current) {
      return;
    }
    const blueBar = new Bar((blueContainer as any).current, {
      data: data.current.blue,
      xField: 'count',
      yField: 'number',
      // colorField: 'year',
    });
    blueBar.render()
  }, [])
  return (
    <>
      <Search />
      <div ref={redContainer} />
      <div ref={blueContainer} />
    </>
  )
}

export default SSQLite
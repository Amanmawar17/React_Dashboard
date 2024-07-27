import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

export default function Chart() {
    const data = useContext(DataContext);
  return (
    <div className='grid grid-cols-5 gap-5'>
        {data.map((item,index)=>(
            <h1 key={index} className='text-lg text-blue-500'>
                {item.title}
            </h1>
                
        ))}
    </div>
  )
}

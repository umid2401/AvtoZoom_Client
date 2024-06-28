import React from 'react';
import './ServicePackegs.css';

export default function ServicePackegs({names}) {
  return (
    <div className='service_package'>
      <span><small></small></span>
      <p>{names}</p>
    </div>
  )
}

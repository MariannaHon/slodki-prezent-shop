
'use client';

import { Suspense } from 'react';

import Thanks from '../components/Thanks/Thanks';


const ThanksPage = () => {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Thanks />
    </Suspense>
    
  )
}

export default ThanksPage







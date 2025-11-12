import React from 'react';
import Categoriesblock from '../main/Categoriesblock';
import Mainheading from '../utils/Mainheading';
import Heading from '../utils/heading';

const Categories = () => {
  return (
    <section className='w-full h-auto py-12 md:py-14 lg:py-16'>
      <div className="w-[95%] m-auto">
        <Mainheading>categories</Mainheading>
        <Heading>browse by categories</Heading>
        <Categoriesblock />
      </div>
    </section>
  )
}

export default Categories

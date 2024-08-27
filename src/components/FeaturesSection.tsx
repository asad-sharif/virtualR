import React from 'react'
import { features } from '../constants/index';

const FeaturesSection: React.FC = () => {
    return (
        <section className='my-12  text-center' id='features-section'>
            <span className='bg-neutral-900 text-center font-medium text-sm text-orange-700 px-5 py-1 rounded-full'>Features</span>

            <h2 className='text-center my-8 text-3xl sm:text-5xl md:text-6xl'>Easily build
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>{' '}your code
                </span></h2>

            <div className='features-wrapper py-8  grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 md:gap-x-16 text-left '>
                {features.map((feature, index) => (
                    <div className="feature flex gap-3" key={index}>
                        <div className='text-orange-700'>{ feature.icon}</div>
                        <div>
                            <h3>{feature.text}</h3>
                            <p className='text-neutral-400 mt-4 text-sm'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturesSection
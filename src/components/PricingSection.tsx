import React from 'react';
import { CheckCircle } from "lucide-react";
import { pricingOptions } from '../constants/index';

export const PricingSection: React.FC = () => {
    return (
        <section className='text-center my-20' id="pricing-section">
            <span className='bg-neutral-900 font-medium text-sm text-orange-700 px-5 py-1 rounded-full'>Pricing</span>

            <h2 className='text-center my-12 text-3xl sm:text-5xl md:text-6xl'>Pricing</h2>

            <div className="cards text-left flex flex-col flex-wrap md:flex-row gap-6">
                {pricingOptions.map(({ title, price, features }, index) => (
                    <div className='py-8 px-4 flex-1 border rounded-lg border-neutral-700 shadow-lg shadow-neutral-900' key={index}>
                        <h3 className='text-2xl'>
                            {title}
                            {title === 'Pro' && <span className='md:text-xs lg:text-xl text-lg bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'> (Most Popular)</span>}
                        </h3>

                        <p className='text-4xl my-8'>{price} <small className='text-sm text-neutral-400'>/Month</small></p>
                        {features.map((feature, key) => (
                            <div className='flex gap-x-4 my-4' key={key}>
                                <div className='text-orange-700'><CheckCircle /></div>
                                <p className='md:text-xs lg:text-xl'>{feature}</p>
                            </div>
                        ))}

                        <button className='w-full py-2 mt-12 border rounded-lg border-orange-900 hover:bg-orange-800'>Subscribe</button>

                    </div>
                ))}
            </div>
        </section>
    );
};

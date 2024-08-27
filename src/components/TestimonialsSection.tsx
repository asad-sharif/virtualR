import React from 'react'
import { testimonials } from '../constants/index'

const TestimonialsSection: React.FC = () => {
    return (
        <section className='text-center my-20' id='testimonials-section'>
            <span className='bg-neutral-900 font-medium text-sm text-orange-700 px-5 py-1 rounded-full'>Testimonials</span>

            <h2 className='text-center my-12 text-3xl sm:text-5xl md:text-5xl'>What People are saying</h2>

            <div className="card text-left grid gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-3 ">
                {testimonials.map((testimonial, index) => (
                    <div className='bg-neutral-900 rounded-lg border border-neutral-800 px-6 py-8 font-light h-fit' key={index}>
                        <p className='text-neutral-300 mb-8 text-sm'>{testimonial.text}</p>
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} alt="" className='w-12 rounded-full border-2 border-orange-400'/>
                            <div>
                                <h3>{testimonial.user}</h3>
                                <p className='text-neutral-400 text-xs'>{testimonial.company}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TestimonialsSection
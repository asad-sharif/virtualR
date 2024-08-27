import React from 'react'
import img from '../assets/code.jpg'
import { checklistItems } from '../constants/index'
import { CheckCircle } from "lucide-react";

const WorkflowSection: React.FC = () => {
    return (
        <section className='my-16  text-center' id='workflow-section'>
            <span className='bg-neutral-900 text-center font-medium text-sm text-orange-700 px-5 py-1 rounded-full'>Workflow</span>

            <h2 className='text-center my-12 text-3xl sm:text-5xl md:text-6xl'>Accelerate your
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>{' '}coding workflow
                </span></h2>

            <div className='content-wrapper my-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8'>
                <div className='flex-1'><img src={img} alt="" className='w-full' /></div>

                <div className='flex flex-1 flex-col gap-y-12 md:gap-y-6 lg:gap-y-20 justify-center text-left'>
                    {checklistItems.map((item, index) => (
                        <div className='flex gap-4 items-start' key={index}>
                            <div className='text-orange-700'><CheckCircle /></div>
                            <div>
                                <h3>{item.title}</h3>
                                <p className='text-neutral-400 mt-2 text-sm'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkflowSection
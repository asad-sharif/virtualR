import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from "../constants/index";

export const Footer: React.FC = () => {
    return (
        <footer className='grid sm:grid-cols-3 gap-y-10 py-12'>
            <div>
                <h3 className='text-xl mb-6'>Resources</h3>
                {resourcesLinks.map((link, index) => (
                    <a href={link.href} key={index} className='flex flex-col text-sm my-3 font-light text-neutral-300 hover:text-orange-700'>{link.text}</a>
                ))}
            </div>
           
            <div>
                <h3 className='text-xl mb-6'>Platform</h3>
                {platformLinks.map((link, index) => (
                    <a href={link.href} key={index} className='flex flex-col text-sm my-3 font-light text-neutral-300 hover:text-orange-700'>{link.text}</a>
                ))}
            </div>
           
            <div>
                <h3 className='text-xl mb-6'>Community</h3>
                {communityLinks.map((link, index) => (
                    <a href={link.href} key={index} className='flex flex-col text-sm my-3 font-light text-neutral-300 hover:text-orange-700'>{link.text}</a>
                ))}
            </div>
        </footer>
    )
}

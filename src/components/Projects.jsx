import React from 'react'
import ProjectItem from './Projectitem'
import ArtPuddleImg from '../assets/Art-Puddle.png'
import MarketingsiteImg from '../assets/marketing-site.png'
import MentalhealthImg from '../assets/mental-health.png'
import StarbucksImg from '../assets/starbucks-website.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#031c32]'>Projetos</h1>
            <p className='text-center py-8 font-medium'>Aqui estão alguns exemplos de projetos que criei</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={ArtPuddleImg} title='Streaming App' subtitle='HTML/CSS' />
                <ProjectItem img={MarketingsiteImg} title='Marketing App' subtitle='HTML/CSS' />
                <ProjectItem img={MentalhealthImg} title='Mental Health App' subtitle='HTML/CSS' />
                <ProjectItem img={StarbucksImg} title='Starbucks App' subtitle='HTML/CSS' />
            </div>
            <div></div>
        </div>
    )
}

export default Projects
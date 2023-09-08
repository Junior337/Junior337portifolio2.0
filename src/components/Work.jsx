import React from 'react'
import WorkItem from './Workitem'

const data = [
    {
        year: 2021,
        title: 'Análise e Desenvolvimento de Sistemas',
        duration: '1 ano e 6 meses',
        details: 'Curso Técnico'
    },
    {
        year: 2023,
        title: 'Análise e Desenvolvimento de Sistemas',
        duration: 'Em Andamento',
        details: 'Curso Superior'
    },

]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#031c32]'>Formação</h1>
            <p className='text-center py-8 font-medium'>Minha Graduação</p>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    )
}

export default Work
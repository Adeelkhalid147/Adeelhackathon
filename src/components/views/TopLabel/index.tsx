"use client"
import ContextWrapper from '@/global/Context'
import React from 'react'
import SubComp from './comp/SubComp'

const TopLabel = () => {
  return (
    <ContextWrapper>
        <div className='overflow-x-hidden py-2 border-b bg-gray-800 text-gray-100'>
        <div className=' px-4 max-w-7xl mx-auto flex justify-between items-center'>
        <div>
        <p><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=435&lines=Get+A+Chance+To+Win+Movie+Ticket;Signup+To+Get+50%25+Sale;SALE+SALE+SALE+!!!!!" alt="Typing SVG" /></p>
        </div>
       <SubComp/>
        </div>
    </div>

    </ContextWrapper>
  )
}

export default TopLabel
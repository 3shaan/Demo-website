import React from 'react'
import Select from './Select'
import { SelectData } from '../types/types'
import Button from './Button'


export default function Sidebar() {
    const selectData:SelectData[] = [
        {
            id:1,
            label:"Item1"
        },
        {
            id:2,
            label:"Item2"
        },
        {
            id:3,
            label:"Item3"
        }
    ]
  return (
    <section className='w-full col-span-1 bg-gray-500 h-screen'>
        <div className='w-11/12 mx-auto mt-10 space-y-3'>
        <p>Sidebar</p>
        <Select selectData={selectData} selected={1}/>
        <div className='space-y-2 pl-12'>
            <Button label='Item A'/>
            <Button label='Item B'/>
        </div>
        <Select selectData={selectData} selected={2}/>
        <Select selectData={selectData} selected={3}/>
        </div>
   

    </section>
  )
}
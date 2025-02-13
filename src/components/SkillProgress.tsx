'use client'
import { Progress } from 'antd'
import React from 'react'

type Props = {
  percent:number
  label?:string
}

export default function SkillProgress({percent=0,label="Proficient"}: Props) {
  return (
    <>
      <Progress percent={percent} percentPosition={{ align: 'center', type: 'inner' }} className='w-full min-w-fit' size={[400, 20]}  format={() => `${label}`}/>
    </>
  )
}
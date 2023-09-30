import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router'

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
    <Button
    onClick={() => {navigate('/Coding')}}
    >Start</Button>
    </React.Fragment>
  )
}


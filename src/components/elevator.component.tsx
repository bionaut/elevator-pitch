import React from 'react'

interface ElevatorProps {
  level: number
}

export const Elevator = (props: ElevatorProps) => {
  const { level = 0 } = props

  // each level should be 10% of the total height
  const offset = (level / 10) * 100

  return (
    <div
      className="relative flex justify-center rounded-2xl bg-amber-200 w-32 h-[10%] p-2 border-black"
      style={{
        top: `calc(-${offset}% + 10%)`,
        transition: 'all 0.5s ease',
      }}
    >
      <div className="bg-white h-2 w-20 rounded" />
    </div>
  )
}

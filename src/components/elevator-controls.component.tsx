import React from 'react'

interface ElevatorControlsProps {}

const LEVELS = 10

export const ElevatorControls = (props: ElevatorControlsProps) => {
  return (
    <div className="flex items-center rounded-2xl bg-black/10 shadow-2xl backdrop-blur px-10">
      <div className="flex flex-col space-y-2">
        {Array.from({ length: LEVELS }, (_, i) => {
          const level = LEVELS - i

          return (
            <button
              key={i}
              className="bg-black/20 rounded-2xl text-white font-bold text-2xl text-center"
              onClick={() => console.log(level)}
            >
              {level}
            </button>
          )
        })}
      </div>
    </div>
  )
}

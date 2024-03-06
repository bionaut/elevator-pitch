import './App.css'
import { ElevatorShaft } from './components/elevator-shaft.component.tsx'
import { Building } from './components/building.component.tsx'
import { ElevatorControls } from './components/elevator-controls.component.tsx'
import { Elevator } from './components/elevator.component.tsx'

function App() {
  return (
    <main className="w-full h-full absolute top-0 left-0 bg-gray-900">
      <Building>
        <ElevatorControls />
        <ElevatorShaft>
          <Elevator level={1} />
        </ElevatorShaft>
      </Building>
    </main>
  )
}

export default App

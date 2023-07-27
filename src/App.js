import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1)
  }

  function handleNext() {
    if (step < messages.length) setStep((s) => s + 1)
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen ? (
        <div className='steps'>
          <div className='numbers'>
            {[...Array(messages.length).keys()].map((index) => (
              <div
                key={index}
                className={`${step >= index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>
          <div className='buttons'>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default App

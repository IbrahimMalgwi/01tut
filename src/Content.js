import React from 'react'

const Content = () => {
    const handleNameChange = () => {
    const names = ["Ibrahim", "Judith", "Joanna"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
    }

  return (
    <main>       
        <p>
          Hello { handleNameChange(1) }
        </p>
    </main>
  )
}

export default Content
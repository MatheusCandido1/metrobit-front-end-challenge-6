import { useState } from 'react';

function App() {
  const [achilles, setAchilles] = useState(0);
  const [tortoise, setTortoise] = useState(90);

  const tortoiseSpeed = 1;
  const achillesSpeed = 2;

  function onAchillesChange(e) {
    const newAchilles = Number(e.target.value);

    const deltaAchilles = newAchilles - achilles;

    const deltaTortoise = deltaAchilles * (tortoiseSpeed / achillesSpeed);

    setTortoise(prev => prev + deltaTortoise);
    setAchilles(newAchilles);
  }

  return (
    <main>
      <fieldset>
        <label>Tortoise</label>
        <input className="tortoise-slider" type="range" min="0" max="180" step="1" defaultValue={tortoise} />
      </fieldset>


      <fieldset>
        <label>Achilles</label>
        <input className="achilles-slider" type="range" min="0" max="180" step="1" value={achilles} onChange={onAchillesChange} />
      </fieldset>
    </main>
  )
}

export default App

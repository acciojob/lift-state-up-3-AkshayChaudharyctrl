import React, { useState } from 'react';

function Parent() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <ChildButton option="Option 1" onSelect={handleOptionSelect} />
      <ChildButton option="Option 2" onSelect={handleOptionSelect} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

function ChildButton({ option, onSelect }) {
  const handleClick = () => {
    onSelect(option);
  };

  return <button onClick={handleClick}>{option}</button>;
}

export default Parent;

import './styles/DrawInput.css';

function DrawInput() {
  return (
    <div className ="centerpiece">
      <textarea placeholder="Draw something"></textarea>
      <button>Draw</button>
    </div>
  );
}

export default DrawInput;
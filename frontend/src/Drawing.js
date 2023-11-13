import './styles/Drawing.css';

function Tweet({ content, author }) {
    return (
      <div>
        <h4>{author}</h4>
        <p>{content}</p>
      </div>
    );
  }
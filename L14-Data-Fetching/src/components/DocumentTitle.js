import { useState, useEffect } from 'react';

function DocumentTitle() {
  const [title, setTitle] = useState('Hello World 🌎')

  // First argument: CALLBACKS (effect - behavior)
  // Second argument: ARRAY - dependencies list
  useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <>
      <h2>Change the document title here!</h2>
      <input
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        type="text"
        placeholder="change the title ;)">  
      </input>
    </>
  );
}

export default DocumentTitle;
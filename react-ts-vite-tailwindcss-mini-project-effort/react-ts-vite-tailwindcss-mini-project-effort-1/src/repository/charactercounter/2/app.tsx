import React,{useState} from 'react'

const CustomApp = () => {
  return (
    <>
        <CharacterLimitTextarea/>
    </>
  )
}

export default CustomApp

const CharacterLimitTextarea: React.FC = () => {
    const [text, setText] = useState<string>('');
   const maxLength = 150;

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
  };

  const progressWidth = (text.length / maxLength) * 100;
  let progressBarColor = '';

  if (progressWidth <= 60) {
    progressBarColor = 'rgb(19, 160, 19)';
  } else if (progressWidth > 60 && progressWidth < 85) {
    progressBarColor = 'rgb(236, 157, 8)';
  } else {
    progressBarColor = 'rgb(241, 9, 9)';
  }
  
    return (
        <div id="container">
        <label htmlFor="txt">Type something:</label>
        <textarea
          id="txt"
          value={text}
          onChange={handleTextareaChange}
          maxLength={maxLength}
          cols={30}
          rows={10}
        ></textarea>
  
        <div id="progress" style={{ width: '100%', height: '7px', boxShadow: 'inset 1px 1px 2px #ccc', border: '1px solid #bbb', borderRadius: '15px' }}>
          <div id="progress-bar" style={{ height: '100%', width: `${progressWidth}%`, backgroundColor: progressBarColor }}></div>
          {progressWidth >= 85 && <p id="remaining-chars" style={{ fontSize: '11px', color: '#b62020', marginTop: '3px', float: 'right' }}>{maxLength - text.length} characters left</p>}
        </div>
      </div>
    );
  };
import React from 'react';

const FirstComp = () => {
  return (
    <>
        <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
    </>
  );
}

export default FirstComp;

function Profile(){
    return(
        <>
         <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
        </>
    )
}

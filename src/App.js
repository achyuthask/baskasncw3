

import React from 'react';


const App=()=>{ 
 

  const title=  React.createElement('h1', {}, 'B.Achyutha sri kashyap');
  const title1=  React.createElement('h1', {}, 'EXPIERENCE');
  const title2=  React.createElement('h2', {}, 'Learning at geekster');
  const title3=  React.createElement('h2', {}, 'Skills');
  const title4=  React.createElement('h2', {}, 'hobbies');

 const link1= React.createElement('a', { href: " " }, 'getting strted with web');
 const  para1=React.createElement('p' , {}, 'Learning at geekster');
 const line =React.createElement('hr');
 const myLi = React.createElement('li', {className: 'App'},'java');
 const myLi1 = React.createElement('li', {className: 'App'},'javascrpit');
 const myLi2 = React.createElement('li', {className: 'App'},'html');
 const myLi3 = React.createElement('li', {className: 'App'},'css');
 const myLi4 = React.createElement('li', {className: 'App'},'react js');
 const myLi5 = React.createElement('li', {className: 'App'},'anime');
 const myLi6 = React.createElement('li', {className: 'App'},'movies');
 const myLi7 = React.createElement('li', {className: 'App'},'stories');
  const  para2=React.createElement('p', {}, ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora cum inventore aliquam, nulla eos dignissimos ipsum voluptas id, dolores suscipit totam nostrum perferendis alias, expedita quaerat distinctio asperiores! Nobis, aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa ab qui autem nesciunt vel consequatur non totam, temporibus excepturi voluptatem iure impedit ut repellendus earum necessitatibus nemo eligendi, animi debitis reiciendis suscipit. Unde iure obcaecati dolores, numquam quibusdam rerum facilis a quam quos ad ullam consectetur reiciendis deserunt similique.');
 
return(
<>
<div className='App'>
{title}
{para1}
{link1}
{line}
{title1}
{title2}
{para2}
{line}
{title3}
{myLi}
{myLi1}
{myLi2}
{myLi3}
{myLi4}
{line}
{title4}
{myLi5}
{myLi6}
{myLi7}


</div>

</>
);

};


export default App;

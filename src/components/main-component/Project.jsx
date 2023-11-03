import {useState} from 'react'
import sm from "../../assets/sm.jpg";

const Project = function ({ darkTheme, image, link }) {
    const [boxShadow, setBoxShadow] = useState('');
    // const [boxShadow, setBoxShadow] = useState('3px 3px 2px 1px rgb("0, 0, 255")');
  // const style = getComputedStyle(img, null);
  // console.log(style);
//   rgb(0, 0, 255) 3px 3px 2px 1px;

  const styleFn = function (e) {
    // console.log(e.target);
    const styleEl = getComputedStyle(e.target.closest('.project'), null).getPropertyValue('box-shadow');
    // console.log(styleEl);
    setBoxShadow(styleEl);
    // console.log(boxShadow);
  };

  return (
    <div className="project" onMouseOver={styleFn}>
      <a className='project-link' href={link} >
        <img src={image} alt="" />
        <p className="description">Lorem, ipsum dolor...</p>
      </a>
    </div>
  );
};

export default Project;

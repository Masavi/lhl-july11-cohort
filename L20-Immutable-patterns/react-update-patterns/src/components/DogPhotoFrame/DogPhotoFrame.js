import './dogPhotoFrame.css';

const DogPhotoFrame = (props) => {

  return (
    <article className="dog-frame">
      <h2>Hi, my name is {props.name}!</h2>
      <img
        className="dog-frame-img"
        src={props.img_url}
        alt="Jensen, the coolest dog ♥" />
    </article>
  )
}

export default DogPhotoFrame;
import React from 'react'
import classes from "./Gallery.module.css";
import Gallerydata from './../../../data/Gallerydata';
import Card from "./../../layout/Card";
// import image from "./../../assets/gallery/image.png";

// import image1 from './../../assets/gallery/image.png';
// import image2 from './../../assets/gallery/irulas_500_with_handle.jpg';
// import image3 from './../../assets/gallery/irulas_1000_front.jpg';
// import image4 from './../../assets/gallery/irulas_1000_rear.jpg';
// import image5 from './../../assets/gallery/irulas.jpg';
// import image6 from './../../assets/gallery/MRS1.jpeg';
// import image7 from './../../assets/gallery/rear2.jpg';
// import image8 from './../../assets/gallery/Render.png';

function Gallery() {
  return (
    <>
    <div className={classes.gallery} id="gallery">
        <div className={classes["gallery-header"]}>
            <span>Gallery</span>
        </div>
<div className="row row-cols-1 row-cols-md-3 g-4">
  {/* <div className="col">
    <div className={classes["card"]}>
      <img src={image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className={classes["card"]}>
      <img src={image2} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className={classes["card"]}>
      <img src={image3} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className={classes["card"]}>
      <img src={image4} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className={classes["card"]}>
      <img src={image5} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className={classes["card"]}>
      <img src={image6} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className={classes["card"]}>
      <img src={image7} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className={classes["card"]}>
      <img src={image8} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}

  {
    Gallerydata.map((data,id) => {
      return(
        <>
      <div className="col" key={id}>
      <div className={classes["card"]}>
      <img src={data.img} className="card-img-top" alt={data.desc} />
      <div className="card-body">
        <h5 className="card-title">{data.desc}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
        </>
      )
    })
  }


</div>
    </div>
    </>
  )
}

export default Gallery

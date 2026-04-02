"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageRef = useRef();
  function handlePickClicking() {
    imageRef.current.click();
  }

  function handleImagePicking(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = function (event) {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="image selected by the user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png , image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImagePicking}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClicking}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
}

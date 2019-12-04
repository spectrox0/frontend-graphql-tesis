import React, { useState } from "react";
import { storage } from "./../helpers/firebase/index.js";

export default function UploadImage({ id, onImageUrl, handlingLoadImage }) {
  const [progress, setProgress] = useState(0);
  const onChangeImageUpload = e => {
    e.preventDefault();
    if (e.target.files[0]) {
      const image = e.target.files[0];
      if (!image) return;
      handlingLoadImage(true);
      const UploadTask = storage.ref(`images/${image.name}`).put(image);
      UploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        error => {
          handlingLoadImage(false);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              onImageUrl(url);
              handlingLoadImage(false);
            });
        }
      );
    }
  };
  return (
    <>
      <input
        id={id}
        className="imageInput"
        type="file"
        onChange={onChangeImageUpload}
      />
    </>
  );
}

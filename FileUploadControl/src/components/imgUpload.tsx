// src/components/BlobList.js
import * as React from "react";
import { useEffect, useState } from 'react';

const Base64ImageArray = () => {
  const imagesArray = [
    {
        "ImageNumber": 2,
        "Base64Image": "iVBORw0KGgoAAAANSUhEUgAAAC0AAAAgCAYAAACGhPFEAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACdUlEQVRYhe3YTUgUYRzH8d8+K5RLIASZqIvups0zu7DmpocFifAS2gsIIh0kvNhp8ehxUTCLboG3gmBFxpVARNbskiD5Fi4khfO4h9wVNpHoIqKrzDP/DrpCBmmiswjzhf/tYebDw/NcHgcAwgWrAAC6BwZws6Ym35ZjSy4t4WU4vI+uDgRwq6Eh36ZjI9o/FCzPjlNlo63KRluVjbYqG21VNtqqbLRV2WirstFWZaOt6kKiC/L1YyLCr40NpHQdmdVVXCsthUdVcd3tBmP/3kvL0Hu7u5gYHMTSzAxWdZ1Suk5bm5t/6S4XFpoVioJKVWU8GERLZyeuFBVZizYMA/FoFG96e831tTVWUlLyU1XVb3fa23XOueCcC6/X+z2TyZQJIbgQguu6roq5Of8HTXO/7e83n3R3s7Zw+I/v0uvpaVokOtNZMAzqGxoid1WVBED19fWLk5OT90zTdBARTjKJRCLY3Nw8AYCuFhfLhx0dhIMXMXra00Pze3tngv0sJb0YGaEbfr8EQIFA4OvY2Nij/8EendnZ2VBjY+PHAzAhFArNA6Byr1f2RqO0YBinxj6Pxcjr80kApKqqiMVibVJKdlrs0Zmamrrb1dX1CqZpOsbHxx/U1tZ+AUAezmX/8DDN7OycCPtpe5ueadoh1ufz6ZqmPTYMw3lW2KPjyL2PmabJRkdHWyKRSN/y8jJnjKHM45EVnDsrOUcl5yguL8d6Oo20EEgJgfTKivyRSjmJCH6/X49EIj2tra3vGGPmeV7uQ3QuKaUzHo/fTyQStw9usy+ZTFZns9lLuTUulyurKMqKoig651zU1dUtNjU1vT9vbK7fs+awC9OceIQAAAAASUVORK5CYII="
    },
    {
        "ImageNumber": 3,
        "Base64Image": "iVBORw0KGgoAAAANSUhEUgAAAC0AAAAgCAYAAACGhPFEAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACdUlEQVRYhe3YTUgUYRzH8d8+K5RLIASZqIvups0zu7DmpocFifAS2gsIIh0kvNhp8ehxUTCLboG3gmBFxpVARNbskiD5Fi4khfO4h9wVNpHoIqKrzDP/DrpCBmmiswjzhf/tYebDw/NcHgcAwgWrAAC6BwZws6Ym35ZjSy4t4WU4vI+uDgRwq6Eh36ZjI9o/FCzPjlNlo63KRluVjbYqG21VNtqqbLRV2WirstFWZaOt6kKiC/L1YyLCr40NpHQdmdVVXCsthUdVcd3tBmP/3kvL0Hu7u5gYHMTSzAxWdZ1Suk5bm5t/6S4XFpoVioJKVWU8GERLZyeuFBVZizYMA/FoFG96e831tTVWUlLyU1XVb3fa23XOueCcC6/X+z2TyZQJIbgQguu6roq5Of8HTXO/7e83n3R3s7Zw+I/v0uvpaVokOtNZMAzqGxoid1WVBED19fWLk5OT90zTdBARTjKJRCLY3Nw8AYCuFhfLhx0dhIMXMXra00Pze3tngv0sJb0YGaEbfr8EQIFA4OvY2Nij/8EendnZ2VBjY+PHAzAhFArNA6Byr1f2RqO0YBinxj6Pxcjr80kApKqqiMVibVJKdlrs0Zmamrrb1dX1CqZpOsbHxx/U1tZ+AUAezmX/8DDN7OycCPtpe5ueadoh1ufz6ZqmPTYMw3lW2KPjyL2PmabJRkdHWyKRSN/y8jJnjKHM45EVnDsrOUcl5yguL8d6Oo20EEgJgfTKivyRSjmJCH6/X49EIj2tra3vGGPmeV7uQ3QuKaUzHo/fTyQStw9usy+ZTFZns9lLuTUulyurKMqKoig651zU1dUtNjU1vT9vbK7fs+awC9OceIQAAAAASUVORK5CYII="
    }
  ];

  const [imageElements, setImageElements] = useState([]);

  useEffect(() => {
    const renderImages = () => {
      const elements :any = imagesArray.map((imageObj) => {
        const decodedData = atob(imageObj.Base64Image);

        const arrayBuffer = new Uint8Array(decodedData.length);
        for (let i = 0; i < decodedData.length; i++) {
          arrayBuffer[i] = decodedData.charCodeAt(i);
        }

        const blob = new Blob([arrayBuffer], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(blob);

        return (
          <div key={imageObj.ImageNumber}>
            <p>Image Number: {imageObj.ImageNumber}</p>
            {/* <img
              src={imageUrl}
              alt={`Image ${imageObj.ImageNumber}`}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            /> */}
          </div>
        );
      });

      setImageElements(elements);
    };

    renderImages();
  }, []);

  return <div>{imageElements}</div>;
};

export default Base64ImageArray;

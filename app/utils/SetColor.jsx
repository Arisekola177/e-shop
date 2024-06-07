// 'use client'
// const SetColor = ({ handleColorClick, productImages }) => {
//     return (
//       <div>
//         <div className="flex items-center gap-3 mt-4">
//             <span className="font-semibold font-roboto">COLOR: </span>
//           {productImages.map((image, index) => (
//             <div
//               key={index}
//               onClick={() => handleColorClick(image.image)}
//               style={{ backgroundColor: image.colorCode, width: '20px', height: '20px', borderRadius: '50%', cursor: 'pointer' }}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default SetColor;

 'use client' 
 import { useState } from "react";

 const SetColors = ({ item, addImageToState, removeImageFromState, isProductCreated }) => {
   const [selectedImage, setSelectedImage] = useState(null);
 
   const handleImageChange = (e) => {
     const file = e.target.files[0];
     if (file) {
       const newImage = {
         color: item.color,
         file: file,
         colorCode: item.colorCode
       };
       setSelectedImage(newImage);
       addImageToState(newImage);
     }
   };
 
   const handleRemoveImage = () => {
     removeImageFromState(selectedImage);
     setSelectedImage(null);
   };
 
   return (
     <div className="flex flex-col items-center">
       <label htmlFor={`color-${item.color}`} className="cursor-pointer">
         <div className={`w-8 h-8 rounded-full`} style={{ backgroundColor: item.colorCode }}></div>
       </label>
       <input
         id={`color-${item.color}`}
         type="file"
         accept="image/*"
         className="hidden"
         onChange={handleImageChange}
       />
       {selectedImage && (
         <div className="mt-2">
           <img src={URL.createObjectURL(selectedImage.file)} alt="selected" className="w-16 h-16 object-cover rounded" />
           <button onClick={handleRemoveImage} className="text-xs text-red-500 mt-1">Remove</button>
         </div>
       )}
     </div>
   );
 };
 
 export default SetColors;
 

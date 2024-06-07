// 'use client'

// import SetColors from "@/app/components/SetColors"
// import { colors } from "@/app/utils/Colors"
// import { useCallback, useEffect, useState } from "react"
// import toast, { Toaster } from "react-hot-toast";
// import {getDownloadURL, ref, uploadBytesResumable, } from "firebase/storage"
// import { storage } from "@/app/utils/firebase.config"
// import { categories } from "@/app/utils/Categories";


// const AddProductForm = () => {

//     const [isLoading, setIsLoading] = useState(false)
//     const [images, setImages] = useState(null);
//     const [isProductCreated, setIsProductCreated] = useState(false)
//     const [Category, setCategory] = useState(null);
//     const [name, setName] = useState('')
//     const [price, setPrice] = useState('')
//     const [uploadProgress, setUploadProgress] = useState(0)
//     const [brand, setBrand] = useState('')
//     const [inStock, setInStock] = useState(false);
//     const [description, setDescription] = useState('')
   

  
//     const handleClick = (label) => {
//       if (Category !== label) {
//           setCategory(label);
//       }
//   };



//     useEffect(()  => {
//         if(isProductCreated){
//             setImages(null)
//             setIsProductCreated(false)
//         }
//       },[isProductCreated] )


//     const addImageToState = useCallback((image) => {
//       setImages((prev) => {
//           if (!prev || !Array.isArray(prev) || !prev.length) {
//               return [image];
//           }
//           return [...prev, image];
//       });
//   }, []);
  


//     const removeImageFromState = useCallback((image) => {
//         setImages((prev) => {
//             if (prev) {
//                 const filteredImages = prev.filter((item) => item.color !== image.color);
//                 return filteredImages;  
//             }
//              return prev
//         });
//     }, []);

//     const handleAddProduct = async (e) => {
//       e.preventDefault();
      
//       const data = {name, price, description, Category, brand, inStock, images}
//       setIsLoading(true)
    
//        let uploadedImages = [];

//       if(!data.Category){
//         setIsLoading(false)
//         return toast.error('Category is not selected')
//       }

//       if(!data.images || data.images.length === 0 ){
//         setIsLoading(false)
//         return toast.error('No selected image')
//       }

//     const handleImageUpload = async ()=> {
//       toast("Creating Product, please wait ....");
//       try {
//           for(const item of data.images){
//             if(item.image){
//               const fileName = new Date().getTime() + '-' + item.image.name;
//               const storageRef = ref(storage, `products/${fileName}`);
//               const uploadTask = uploadBytesResumable(storageRef, item.image)

//               await new Promise((resolve, reject)=> {
//                 uploadTask.on('state_changed', 
//                  (snapshot) => {
//              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//               console.log('Upload is ' + progress + '% done');
//                switch (snapshot.state) {
//               case 'paused':
//                console.log('Upload is paused');
//                 break;
//                 case 'running':
//                 console.log('Upload is running');
//                 break;
//                 }}, 
//                (error) => {
//                 console.log('Error uploading image', error)
//               reject(error)
//              }, 
//              () => {
    
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             uploadedImages.push({
//               ...item,
//               image: downloadURL
//             })
//             console.log('File available at', downloadURL);
//             resolve()
//            }).catch((error)=> {
//             console.log('Error getting the download URL', error);
//             reject(error)
//            } )
//           }
//           );
//               })
//             }
//           }
//       } catch (error) {
//         setIsLoading(false)
//         console.log('Error handling image upload', error);
//         return toast.error('Error handling image upload')
//       }
//     }
//        await handleImageUpload()

//        const productData = {...data, images:uploadedImages}
//        console.log('productData',productData)
//     }

//   return (
//     <div className="container mx-auto font-roboto">
//     <div className="flex justify-center items-center py-16">
//       <div className="w-[500px] bg-slate-50 rounded-lg shadow-lg">
//          <h2 className="text-2xl font-bold text-center py-4">Add a Product</h2>
//          <form  onSubmit={handleAddProduct}  className="py-8 px-6 flex flex-col gap-4">
//          <input 
//            type="text"
//            placeholder="Name"
//            value={name}
//            onChange={(e) => setName(e.target.value) }
//            className="rounded-lg py-3 px-2 outline-none w-full border-[1px] border-black focus:outline-slate-500"
//            required
//            />

//            <input 
//            type="number"
//            placeholder="Price"
//            value={price}
//            onChange={(e) => setPrice(e.target.value) }
//            className="rounded-lg py-3 px-2 outline-none w-full border-[1px] border-black focus:outline-slate-500"
//            required
//            />

//            <input 
//            type="text"
//            placeholder="Brand"
//            value={brand}
//            onChange={(e) => setBrand(e.target.value) }
//            className="rounded-lg py-3 px-2 outline-none w-full border-[1px] border-black focus:outline-slate-500"
//            required
//            />

//            <textarea 
//            type="text"
//            placeholder="Description"
//            value={description}
//            onChange={(e) => setDescription(e.target.value) }
//            className="rounded-lg py-3 px-2 outline-none w-full border-[1px] border-black focus:outline-slate-500"
//            required
//            />  
           
//            <div className="flex items-center justify-start gap-2 ">
//            <input
//             type="checkbox"
//             id="inStock"
//             name="inStock"
//             value={inStock}
//             onChange={(e) => setInStock(e.target.checked) }
//             className="cursor-pointer"
//            />
//           <label className="text-sm" htmlFor="inStock">This product is in Stock?</label>
//           </div>
//           <div>
//             <div className="w-full font-medium">
//             <h2 className="mb-3 font-semibold">Select a Category</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 max-h-[50vh] gap-4 overflow-y-auto">
//                 {categories.map((category) => {
//                     if(category.label === 'All'){
//                         return null;
//                     }
//                     const IconComponent = category.icon;
//                     const isSelected = Category === category.label;
//                     return (
//                         <div
//                             key={category.label}
//                             onClick={() => handleClick(category.label)}
//                             className={`flex flex-col items-center gap-4 border-${isSelected ? 'slate-800' : 'slate-400'} border-[1px] rounded-lg shadow-md py-3 cursor-pointer  duration-300`}
//                         >
//                             <IconComponent size={24} />
//                             <p>{category.label}</p>
//                         </div>
//                     );
//                 })}  
//             </div>
//         </div>
//           </div>
//           <div className="w-full flex flex-col gap-4">
//           <div className="py-2" >
//             <p className="font-bold text-sm">Select the available product colors and upload their images.</p>
//             <p className="text-xs">You must upload an image for each of the color selected otherwise your color selection will be ignored.</p>
//           </div>
//             <div className="grid grid-cols-2 gap-3">
//               { colors.map((item) => {
//                 return  <SetColors
//                    item={item} key={item.color}
//                   addImageToState={addImageToState} 
//                   removeImageFromState={removeImageFromState}
//                    isProductCreated={isProductCreated} />
                  
//               })}
//             </div> 
//           </div>
//           <div className="w-full mt-4 bg-slate-900 text-white text-center rounded-md">
//             <button  className="py-2">{isLoading ? 'Loading.....' : 'Add Product'}</button>
//           </div>
           
//          </form>
         
//     </div>
//     </div>
//     <Toaster />
   
// </div>
//   )
// }

// export default AddProductForm


'use client'

import SetColors from "@/app/components/SetColors";
import { colors } from "@/app/utils/Colors";
import { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/app/utils/firebase.config";
import { categories } from "@/app/utils/Categories";

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [isProductCreated, setIsProductCreated] = useState(false);
  const [Category, setCategory] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [inStock, setInStock] = useState(false);
  const [description, setDescription] = useState('');

  const handleClick = (label) => {
    if (Category !== label) {
      setCategory(label);
    }
  };

  useEffect(() => {
    if (isProductCreated) {
      setImages([]);
      setIsProductCreated(false);
    }
  }, [isProductCreated]);

  const addImageToState = useCallback((image) => {
    setImages((prev) => {
      if (!prev || !Array.isArray(prev) || !prev.length) {
        return [image];
      }
      return [...prev, image];
    });
    console.log("Image added to state: ", image);
  }, []);

  const removeImageFromState = useCallback((image) => {
    setImages((prev) => {
      if (prev) {
        const filteredImages = prev.filter((item) => item.color !== image.color);
        return filteredImages;
      }
      return prev;
    });
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = { name, price, description, Category, brand, inStock, images };

    if (!data.Category) {
      setIsLoading(false);
      return toast.error('Category is not selected');
    }

    if (!data.images || data.images.length === 0) {
      setIsLoading(false);
      return toast.error('No selected image');
    }

    console.log("Images before upload: ", data.images);

    const handleImageUpload = async () => {
      toast("Creating Product, please wait ....");
      let uploadedImages = [];
      try {
        for (const item of data.images) {
          if (item.file) {
            const fileName = new Date().getTime() + '-' + item.file.name;
            const storageRef = ref(storage, `products/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);

            await new Promise((resolve, reject) => {
              uploadTask.on('state_changed',
                (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                  console.log('Error uploading image', error);
                  reject(error);
                },
                async () => {
                  try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    uploadedImages.push({
                      ...item,
                      image: downloadURL
                    });
                    console.log('File available at', downloadURL);
                    resolve();
                  } catch (error) {
                    console.log('Error getting the download URL', error);
                    reject(error);
                  }
                }
              );
            });
          }
        }
      } catch (error) {
        setIsLoading(false);
        console.log('Error handling image upload', error);
        return toast.error('Error handling image upload');
      }
      console.log('Uploaded Images:', uploadedImages);
      return uploadedImages;
    };

    const uploadedImages = await handleImageUpload();
    if (uploadedImages.length > 0) {
      const productData = { ...data, images: uploadedImages };
      console.log('productData', productData);
      setIsLoading(false);
      setIsProductCreated(true);
      toast.success('Product created successfully!');
    } else {
      setIsLoading(false);
      toast.error('No images were uploaded.');
    }
  };

  return (
    <div className="container mx-auto font-roboto">
      <div className="flex justify-center items-center py-16">
        <div className="w-[500px] bg-slate-50 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center py-4">Add a Product</h2>
          <form onSubmit={handleAddProduct} className="py-8 px-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg py-3 px-2 outline-none w-full border-[1px] border-black focus:outline-slate-500"
              required
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="rounded-lg py-3 px-2 outline-none w-full border-[1px] border-black focus:outline-slate-500"
              required
            />

            <input
              type="text"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="rounded-lg py-3 px-2 outline-none w-full border-[1px] border-black focus:outline-slate-500"
              required
            />

            <textarea
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded-lg py-3 px-2 outline-none w-full border-[1px] border-black focus:outline-slate-500"
              required
            />

            <div className="flex items-center justify-start gap-2">
              <input
                type="checkbox"
                id="inStock"
                name="inStock"
                checked={inStock}
                onChange={(e) => setInStock(e.target.checked)}
                className="cursor-pointer"
              />
              <label className="text-sm" htmlFor="inStock">This product is in Stock?</label>
            </div>
            <div>
              <div className="w-full font-medium">
                <h2 className="mb-3 font-semibold">Select a Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 max-h-[50vh] gap-4 overflow-y-auto">
                  {categories.map((category) => {
                    if (category.label === 'All') {
                      return null;
                    }
                    const IconComponent = category.icon;
                    const isSelected = Category === category.label;
                    return (
                      <div
                        key={category.label}
                        onClick={() => handleClick(category.label)}
                        className={`flex flex-col items-center gap-4 border-${isSelected ? 'slate-800' : 'slate-400'} border-[1px] rounded-lg shadow-md py-3 cursor-pointer duration-300`}
                      >
                        <IconComponent size={24} />
                        <p>{category.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="py-2">
                <p className="font-bold text-sm">Select the available product colors and upload their images.</p>
                <p className="text-xs">You must upload an image for each of the color selected otherwise your color selection will be ignored.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {colors.map((item) => (
                  <SetColors
                    item={item}
                    key={item.color}
                    addImageToState={addImageToState}
                    removeImageFromState={removeImageFromState}
                    isProductCreated={isProductCreated}
                  />
                ))}
              </div>
            </div>
            <div className="w-full mt-4 bg-slate-900 text-white text-center rounded-md">
              <button type="submit" className="py-2" disabled={isLoading}>
                {isLoading ? 'Loading.....' : 'Add Product'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AddProductForm;






// import "./style.css"
// import { useState } from "react";
// import { FiUpload } from "react-icons/fi"; // upload icon



// const ImageUpload = () => {

//       const [files, setFiles] = useState([]);

//   const handleFileChange = (e) => {
//     setFiles([...e.target.files]);
//   };
//     return (
//     <div className="image-upload">
//       <label className="upload-box" htmlFor="fileInput">
//         <FiUpload size={30} className="upload-icon" />
//         <p>Upload property images (max 10 images)</p>
//         <input
//           id="fileInput"
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleFileChange}
//           hidden
//         />
//         <div 
//             className="custom-btn" 
//         >
//             Choose file <span>No file choosen</span>
//         </div>
//       </label>

//       <div className="file-preview">
//         {files.length > 0 && (
//           <p>{files.length} file(s) selected</p>
//         )}
//       </div>
//     </div>
          
//     )
// }


// export default ImageUpload;
// ImageUpload.jsx
import "./style.css"
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

const ImageUpload = ({ onFilesSelected }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    // send files to parent form
    onFilesSelected(selectedFiles);
  };

  return (
    <div className="image-upload">
      <label className="upload-box" htmlFor="fileInput">
        <FiUpload size={30} className="upload-icon" />
        <p>Upload property images (max 10 images)</p>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          hidden
        />
        <div className="custom-btn">
          Choose file <span>{files.length > 0 ? `${files.length} selected` : "No file chosen"}</span>
        </div>
      </label>

      <div className="file-preview">
        {files.length > 0 && (
          <p>{files.length} file(s) selected</p>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

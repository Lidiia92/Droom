// import React from 'react';
// import {graphql} from 'react-apollo';
// import Dropzone from 'react-dropzone';
// import {UPLOAD_FILE} from '../queries/index';

// class Drop extends React.Component {
//     onDrop = async ([file]) => {
//         const response = await  this.props.mutate({variables: {file}});
//         console.log(response);
//     }

//     render() {
//         return(
//             <Dropzone>
//                 <p>Drop smth here</p>
//             </Dropzone>
//         );
//     }
// }

// export default graphql(UPLOAD_FILE)(Drop);

import React, {useCallback, useState} from 'react';
import {Mutation} from 'react-apollo';
import {UPLOAD_FILE} from '../queries/index';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/Dropzone.css';

const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;


function Drop(props) {
  
    const [avatar, setAvatar] = useState({
        name: ""
    });
  
    const emptyAvatar = {
      name: ""
    }  


  const onDrop = useCallback(async acceptedFiles => {
      const uploaded = await uploadingImg(acceptedFiles[0]);
      setAvatar(acceptedFiles[0]);
      props.onDrop(uploaded);
      console.log("image", acceptedFiles[0])

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  async function uploadingImg (file) {
    const newImg = file;
    const formdata = new FormData();
    formdata.append('file', newImg);
    formdata.append('upload_preset', 'image-upload-unsigned');

    const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, formdata);

    return response.data.url;
  }

    return (
    
                    <div className="dropzone" {...getRootProps()} >
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                        <div className="draggable">
                            <p className="draggable-p">Drop the files here ...</p>
                            {avatar.name ? <p ><FontAwesomeIcon className="image-upload upload-success" icon="check-square"/></p> : <p ><FontAwesomeIcon className="image-upload" icon="image"/></p>}
                            <button className="btn-cancel" onClick={(e) => {e.stopPropagation(); e.preventDefault(); setAvatar(emptyAvatar)}}>Cancel</button>
                        </div> :
                        <div  className="draggable" >
                            <p className="draggable-p">Drag 'n' drop image here, or click to select</p>
                            {avatar.name  ? <p ><FontAwesomeIcon className="image-upload upload-success" icon="check-square"/></p> : <p><FontAwesomeIcon  className="image-upload" icon="image"/></p>}
                            <button className="btn-cancel" onClick={(e) => {e.stopPropagation(); e.preventDefault(); setAvatar(emptyAvatar)}}>Cancel</button>
                        </div>
                    }

                    </div>

    
        );
}

export default Drop;
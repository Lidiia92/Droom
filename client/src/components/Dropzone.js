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
import {useDropzone} from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/Dropzone.css';

function Drop(props) {
  
  const [avatar, setAvatar] = useState("");

  const onDrop = useCallback(acceptedFiles => {
    props.onDrop(acceptedFiles[0]);
    setAvatar(acceptedFiles[0]);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  console.log(avatar);
  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <div className="draggable">
            <p className="draggable-p">Drop the files here ...</p>
            {avatar ? <p ><FontAwesomeIcon className="image-upload upload-success" icon="check-square"/></p> : <p ><FontAwesomeIcon className="image-upload" icon="image"/></p>}
            <button className="btn-cancel" onClick={(e) => {e.stopPropagation(); setAvatar("")}}>Cancel</button>
          </div> :
          <div  className="draggable" >
            <p className="draggable-p">Drag 'n' drop image here, or click to select</p>
            {avatar ? <p ><FontAwesomeIcon className="image-upload upload-success" icon="check-square"/></p> : <p><FontAwesomeIcon  className="image-upload" icon="image"/></p>}
            <button className="btn-cancel" onClick={(e) => {e.stopPropagation(); setAvatar("")}}>Cancel</button>
        </div>
      }

    </div>
  )
}

export default Drop;
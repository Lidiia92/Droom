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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/Dropzone.css';

function Drop(props) {
  
  const [avatar, setAvatar] = useState({
      name: "",
      type: "",
      size: 0,
      path: ""
  });

  const emptyAvatar = {
    name: "",
    type: "",
    size: 0,
    path: ""
  }

  const onDrop = useCallback(acceptedFiles => {
      setAvatar(acceptedFiles[0]);
      props.onDrop(acceptedFiles[0]);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  
  return (
    <Mutation mutation={UPLOAD_FILE} >

        {(uploadFile, {data, loading, error}) => {
            return (
                <div className="dropzone" {...getRootProps()} onChange={() => uploadFile({variables: {file: {...avatar}}})}>
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
        }}
    </Mutation>
  )
}

export default Drop;
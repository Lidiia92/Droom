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

import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

import './styles/Dropzone.css';

function Drop(props) {
  
  let avatar;
  const onDrop = useCallback(acceptedFiles => {
    props.onDrop(acceptedFiles[0]);
    avatar = acceptedFiles[0];
    //console.log(avatar);
    return avatar;
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  //console.log(avatar);
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p className="draggable">Drop the files here ...</p> :
          <p  className="draggable" >Drag 'n' drop some files here, or click to select files</p>
      }

      {avatar ? <p>{avatar.name}</p> : ""}
    </div>
  )
}

export default Drop;
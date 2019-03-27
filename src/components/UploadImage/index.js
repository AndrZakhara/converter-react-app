import React from 'react';
import { storage } from 'api/firebase';

import InputFile from '../InputFile';

const storageRef = storage.ref();

export default function uploadImage({ storagePath = 'images', accept } = {}) {
  const distRef = storageRef.child(storagePath);

  return function targetComponent(Component) {
    class UploadImage extends React.Component {
      constructor(props) {
        super(props);

        this.inputFileRef = React.createRef();
      }

      onInputFileChange = ev => {
        const file = ev.target.files[0];
        const { onImageUploadSuccess, onImageUploadFailed } = this.props;

        if (!file) {
          return;
        }

        const fileUploadTask = distRef.child(file.name).put(file);

        fileUploadTask
          .then(async () => {
            if (typeof onImageUploadSuccess === 'function') {
              const downloadURL = await fileUploadTask.snapshot.ref.getDownloadURL();

              onImageUploadSuccess(downloadURL);
            }
          })
          .catch(error => {
            if (typeof onImageUploadFailed === 'function') {
              onImageUploadFailed(error);
            }
          });
      };

      handleInitUpload = () => {
        this.inputFileRef.current.click();
      };

      render() {
        return (
          <React.Fragment>
            <Component {...this.props} onClick={this.handleInitUpload} />

            <InputFile
              innerRef={this.inputFileRef}
              accept={accept}
              onChange={this.onInputFileChange}
            />
          </React.Fragment>
        );
      }
    }

    return UploadImage;
  };
}

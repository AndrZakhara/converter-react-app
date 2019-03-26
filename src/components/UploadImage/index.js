import React from 'react';
import { storage } from 'api/firebase';

const storageRef = storage.ref();
const inputFileStyles = `
  width: 0;
  height: 0;
  position: absolute;
  overflow: hidden;
  opacity: 0;
  z-index: -1;
`;

export default function uploadImage({
  storagePath = 'images',
  accept = ['.png', '.jpg', '.jpeg'],
} = {}) {
  const distRef = storageRef.child(storagePath);
  const inputFile = window.document.createElement('input');

  inputFile.setAttribute('type', 'file');
  inputFile.setAttribute('accept', accept.join(','));
  inputFile.setAttribute('style', inputFileStyles);

  return function targetComponent(Component) {
    class UploadImage extends React.Component {
      componentDidMount() {
        window.document.body.appendChild(inputFile);

        inputFile.addEventListener('change', this.onInputFileChange);
      }

      componentWillUnmount() {
        inputFile.removeEventListener('change', this.onInputFileChange);

        window.document.body.removeChild(inputFile);
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
        inputFile.click();
      };

      render() {
        return <Component {...this.props} onClick={this.handleInitUpload} />;
      }
    }

    return UploadImage;
  };
}

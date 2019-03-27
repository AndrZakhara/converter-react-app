import React from 'react';

import { connect } from 'react-redux';

import InputFile from 'components/InputFile';

import { uploadImage as upload } from 'actions/profile.actions';

const mapDispatchToProps = {
  initiateImageUpload: upload,
};

export default function uploadImage({ storagePath = 'images', accept } = {}) {
  return function targetComponent(Component) {
    class UploadImage extends React.Component {
      constructor(props) {
        super(props);

        this.inputFileRef = React.createRef();
      }

      onInputFileChange = ev => {
        const file = ev.target.files[0];
        const { initiateImageUpload } = this.props;

        if (!file) {
          return;
        }

        initiateImageUpload({ file, storagePath });
      };

      handleInitUpload = () => {
        this.inputFileRef.current.click();
      };

      render() {
        const { initiateImageUpload, ...restProps } = this.props;
        return (
          <React.Fragment>
            <Component {...restProps} onClick={this.handleInitUpload} />

            <InputFile
              innerRef={this.inputFileRef}
              accept={accept}
              onChange={this.onInputFileChange}
            />
          </React.Fragment>
        );
      }
    }

    return connect(
      null,
      mapDispatchToProps,
    )(UploadImage);
  };
}

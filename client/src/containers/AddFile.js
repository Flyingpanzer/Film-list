import { connect } from 'react-redux';

import AddFile from '../components/AddFile';
import {
  addFile,
  showUploadModal,
  hideUploadModal,
} from '../actions/filmActions';

const mapStateToProps = ({ filmState }) => ({
  errorUpload: filmState.errorUpload,
  successUploadMsg: filmState.successUploadMsg,
  isShowingUploadModal: filmState.isShowingUploadModal,
});

export default connect(
  mapStateToProps,
  {
    addFile: file => addFile(file),
    showUploadModal,
    hideUploadModal,
  },
)(AddFile);

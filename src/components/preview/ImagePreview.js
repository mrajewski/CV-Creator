import React from "react";
import {connect} from "react-redux"
import {Image, Icon} from "semantic-ui-react";
import {photoUpdate} from "../../actions";


const ImagePreview = ({photo, photoUpdate}) => {
    const handleImageChange = (e) => {
        e.preventDefault();

        // handling image upload
        if(window.FileReader) {
            let reader = new FileReader();
            let file = e.target.files[0];

            if (file && file.type.match('image.*')) {
                reader.onloadend = () => {
                    photoUpdate(reader.result)
                };

                reader.readAsDataURL(file)
            }
        }
    };

    return (
        <>
            <Image
                src={photo}
                size="small"
                floated="right"
                circular
                className="photo"
            />
            <input type="file" className="upload" onChange={e => handleImageChange(e)}/>
            <div className="upload-overlay">
                <Icon name="cloud upload" size="huge" color="grey"/>
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        photo: state.resume.photo
    }
};

export default connect(mapStateToProps, {photoUpdate})(ImagePreview)

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
        <section className="photo">
            <Image
                src={photo}
                size="small"
                circular
                className="photo__portrait"
            />
            <input type="file" title="" className="photo__upload" onChange={e => handleImageChange(e)}/>
            <div className="photo__overlay">
                <Icon name="cloud upload" size="huge" color="grey"/>
            </div>
        </section>
    )
};

const mapStateToProps = (state) => {
    return {
        photo: state.resume.photo
    }
};

export default connect(mapStateToProps, {photoUpdate})(ImagePreview)

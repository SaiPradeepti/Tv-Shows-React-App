import React from 'react';
import { CgMoreO } from "react-icons/cg";

const Shows = (props) => {
    const newdata = props.data.map((item,index) => {
        const {title,image,year,description,genre} = item;
        return {title,image,year,description,genre,id:index+1}
    });
    console.log(newdata);
    return (
        newdata.map(item => {
        const {title,image,year,description,genre,id} = item;
        return (
            <div key={id} className="show">
                <img src={image} alt="title" className="show-image"/>
                <div className="show-icon">
                    <CgMoreO />
                </div>
            </div>  
        );     
    })
    );
}

export default Shows;

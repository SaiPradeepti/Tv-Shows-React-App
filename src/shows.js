import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CgMoreO } from "react-icons/cg";
import { Modal } from 'react-responsive-modal';

const Shows = (props) => {
    // const [open, setOpen] = useState(false); 
    const [open, setOpen] = useState([]); 
  const onOpenModal = (id) => {
      setOpen({id:id,value:true});
  };
  const onCloseModal = () => setOpen(false);
  
    const newdata = props.data.map((item,index) => {
        const {title,image,year,description,genre} = item;
        return {title,image,year,description,genre,id:index+1}
    });
    
    return (
        newdata.map(item => {
        const {title,image,id} = item;
        return (
            <div key={id} className="show" data-key={id}>
                <img src={image} alt="title" className="show-image"/>
                <div className="show-filter"></div>
                <div className="show-icon">                    
                    <CgMoreO onClick={()=>onOpenModal(id)}/>
                    {
                        open && (
                            <Modal open={open} onClose={onCloseModal} center
                        classNames={{
                        overlayAnimationIn: 'customEnterOverlayAnimation',
                        overlayAnimationOut: 'customLeaveOverlayAnimation',
                        modalAnimationIn: 'customEnterModalAnimation',
                        modalAnimationOut: 'customLeaveModalAnimation',
                        }}
                        animationDuration={800}>
                            <h2>{title}</h2>
                    </Modal>
                        )
                    }
                </div>

            </div>  
        );     
    })
    );
}
// ReactDOM.render(<Modal />, document.getElementById('root'));
export default Shows;

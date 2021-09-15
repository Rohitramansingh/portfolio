import React from 'react'

    function Projectcard(props)
    {
        return (
            <div className="project_card my-2">
                <img className="project_img "src={props.src} alt="no image"></img>
                <p className="my2 text-center">{props.name}</p>
            </div>
        )
    }

export default Projectcard;

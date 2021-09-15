import react from 'react';
function Recc(props){
    return (
        <div className="main_recc">
            <div>
                <h3 className="my-1 text-center">{props.head}</h3>
                <p className="my-1 text-center">{props.pp}</p>

            </div>

        </div>
    )
}
export default Recc;
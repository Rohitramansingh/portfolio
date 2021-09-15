import react from 'react';
function Recc(props){
    return (
        <div className="main_recc">
            <div>
                <h5 className="mt-2 text-center">{props.head}</h5>
                <p className="mt-1 text-center">{props.pp}</p>

            </div>

        </div>
    )
}
export default Recc;
import img1 from '../compoment/assets/dummy_image.png';
function Img() {
    return (
        <div className="container my-5 ">
            <div className="row text-center text-align-center">
                <div className="col-12 col-md-6 ">
                    <img
                        className="img-fluid"
                        src={img1} alt="no img"></img>
                </div>

                <div className="col-12 col-md-6  pad" >
                    <h2 ><span className="text-info">
                        Rohit</span>Raman Singh</h2>
                </div>
            </div>

        </div>
    )
}
export default Img;

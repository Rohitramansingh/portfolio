import React from 'react';
import Skills from './Skills';
import im1 from './assets/mysql.png';
import im2 from './assets/python.png';
import im3 from './assets/react.png';
import im4 from './assets/javascript.png';
import im5 from './assets/css3.png';
import im6 from './assets/flask.png';
import im7 from './assets/bootstrap4.png';
import im8 from './assets/html5.png';


function Stack () {
return (
<div className="  my-5">
<h2 className="text-center">
<span className="text-info">
Skill
</span>
Section
</h2>

<div className="stack_dimension bggrey py-3">
<Skills src={im1} />
<Skills  src={im2} />
<Skills  src={im3} />
<Skills  src={im4} />
</div>

<div className="stack_dimension bggrey py-3">
<Skills  src={im5} />
<Skills  src={im6} />
<Skills  src={im7} />
<Skills  src={im8} />
</div>

</div>
)

}
export default Stack;

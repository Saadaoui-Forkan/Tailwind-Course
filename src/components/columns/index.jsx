import React from 'react'

function index() {
  return (
    <>
      <div className="columns-2 gap-8">
        <img className="w-full" src="https://s.yimg.com/uu/api/res/1.2/RXwAiSfp0XFtYNg5mpF8fg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-05/6c1a9ec0-b815-11eb-8b33-87fbb637229f.cf.jpg" />
        <img className="w-full" src="https://www.01net.com/app/uploads/2022/10/3540-mea_1400.jpg" />
        <img className="w-full break-after-column" src="https://media.cnn.com/api/v1/images/stellar/prod/221028130910-ipad-pro-m2-review-cnnu-2.jpg?c=original" />
        <img className="w-full" src="https://cdn.mos.cms.futurecdn.net/arqGNVQxKBq4fxbBX9FcXo-480-80.jpg" />
      </div>
      <div className="columns-3 gap-24">
        <img className="w-full" src="https://s.yimg.com/uu/api/res/1.2/RXwAiSfp0XFtYNg5mpF8fg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-05/6c1a9ec0-b815-11eb-8b33-87fbb637229f.cf.jpg" />
        <img
          className="w-full break-before-column"
          src="https://www.01net.com/app/uploads/2022/10/3540-mea_1400.jpg"
        />
        <img className="w-full" src="https://s.yimg.com/uu/api/res/1.2/RXwAiSfp0XFtYNg5mpF8fg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-05/6c1a9ec0-b815-11eb-8b33-87fbb637229f.cf.jpg" />
        <img className="w-full" src="https://media.cnn.com/api/v1/images/stellar/prod/221028130910-ipad-pro-m2-review-cnnu-2.jpg?c=original" />
        <img className="w-full" src="https://cdn.mos.cms.futurecdn.net/arqGNVQxKBq4fxbBX9FcXo-480-80.jpg" />
      </div>
      <div className="columns-3xs">
        {/* <!-- Video Aspect Ratio --> */}
        <img className="w-full aspect-video" src="https://s.yimg.com/uu/api/res/1.2/RXwAiSfp0XFtYNg5mpF8fg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-05/6c1a9ec0-b815-11eb-8b33-87fbb637229f.cf.jpg" />
        {/* <!-- Square Aspect Ratio --> */}
        <img className="w-full aspect-square" src="https://media.cnn.com/api/v1/images/stellar/prod/221028130910-ipad-pro-m2-review-cnnu-2.jpg?c=original" />
        <img className="w-full break" src="https://www.01net.com/app/uploads/2022/10/3540-mea_1400.jpg" />
        <img className="w-full" src="https://cdn.mos.cms.futurecdn.net/arqGNVQxKBq4fxbBX9FcXo-480-80.jpg" />
      </div>
    </>
  );
}

export default index
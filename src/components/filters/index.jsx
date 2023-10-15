import React from 'react'

function index() {
  return (
    <div className='container mx-auto space-y-2'>
    {/* <!-- Blur --> */}
    <div className="blur-none">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque deserunt
      animi quas aliquam consectetur ut obcaecati voluptas repudiandae odit
      harum?
    </div>
    <div className="blur-sm">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque deserunt
      animi quas aliquam consectetur ut obcaecati voluptas repudiandae odit
      harum?
    </div>
    <div className="blur-lg">
      <img className="w-48" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388" alt="" />
    </div>
    <div className="blur-2xl">
      <img className="w-48" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/09/Image_-_How_to_design_a_website_.jpeg.jpg" alt="" />
    </div>

    {/* <!-- Brightness --> */}
    <div className="brightness-50">
      <img className="w-48" src="https://www.monigroup.com/sites/moni/files/2018-05/Why%20Web%20Design%20Is%20A%20Good%20Career%20Choice.jpg" alt="" />
    </div>
    <div className="brightness-100">
      <img className="w-48" src="https://www.chanty.com/blog/wp-content/uploads/2023/03/whatsapp-web.png.webp" alt="" />
    </div>
    <div className="brightness-150">
      <img className="w-48" src="https://www.interserver.net/assets/images/new/header-thumbnail.png" alt="" />
    </div>
    <div className="brightness-200">
      <img className="w-48" src="https://m-img.org/spai/q_lossless+ret_img+to_webp/matomo.org/wp-content/uploads/2019/09/privacy-security-web-ready-1.png" alt="" />
    </div>

    {/* <!-- Contrast --> */}
    <div className="contrast-50">
      <img className="w-48" src="https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/websites_on_the_dark_web_2022_examples_and_links_academy/Academy-Websites-on-the-Dark-Web-2022-Hero.jpg?width=1200&name=Academy-Websites-on-the-Dark-Web-2022-Hero.jpg" alt="" />
    </div>
    <div className="contrast-100">
      <img className="w-48" src="https://www.mozilla.org/media/img/firefox/more/what-is-a-browser.56f495565eca.jpg" alt="" />
    </div>
    <div className="contrast-150">
      <img className="w-48" src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/Image_-_How_to_design_a_website_.jpeg-900x510.jpg" alt="" />
    </div>
    <div className="contrast-200">
      <img className="w-48" src="https://static.wixstatic.com/media/72c0b2_4b28e59db27945fab192808be7ce5f18~mv2.jpg/v1/fill/w_640,h_366,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/72c0b2_4b28e59db27945fab192808be7ce5f18~mv2.jpg" alt="" />
    </div>

    {/* <!-- Grayscale --> */}
    <div className="grayscale">
      <img className="w-48" src="https://www.forbes.com/advisor/wp-content/uploads/2022/09/Image_-_How_to_design_a_website_.jpeg.jpg" alt="" />
    </div>

    {/* <!-- Invert --> */}
    <div className="invert">
      <img className="w-48" src="https://cdn.lesnumeriques.com/optim/tutorial/14/145093/cc911a45-installer-windows-10-sur-un-pc__1200_630__overflow.jpeg" alt="" />
    </div>

    {/* <!-- Sepia --> */}
    <div className="sepia">
      <img className="w-48" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/icloud/icloud/pc-windows-11-ios-16-iphone-13-pro-icloud-photos-hero.png" alt="" />
    </div>

    {/* <!-- Hue Rotate --> */}
    <div className="hue-rotate-15">
      <img className="w-48" src="https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-08/mini-pc-product-image-transparent-background.png.rendition.intel.web.864.486.png" alt="" />
    </div>
    <div className="hue-rotate-90">
      <img className="w-48" src="" alt="" />
    </div>
    <div className="hue-rotate-180">
      <img className="w-48" src="https://image-us.samsung.com/SamsungUS/home/explore/dex/mo-new/samsungdex_kv_mo.jpg?$default$" alt="" />
    </div>
    <div className="hue-rotate-60">
      <img className="w-48" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Gldn-Surface-Laptop-4-Platinum-BnrCntrl-CP01-1668x940?wid=406&hei=230&fit=crop" alt="" />
    </div>

    {/* <!-- Saturate --> */}
    <div className="saturate-50">
      <img className="w-48" src="https://www.temphas.com/wp-content/uploads/2023/01/technology-in-the-workplace.png" alt="" />
    </div>
    <div className="saturate-100">
      <img className="w-48" src="https://media.kingston.com/kingston/hero/ktc-articles-solutions-speed-up-your-pc-hero-lg.jpg" alt="" />
    </div>
    <div className="saturate-150">
      <img className="w-48" src="https://cdn.cloudflare.steamstatic.com/steam/apps/1659420/ss_a1816dd536122dd740043c2b9440136503904215.1920x1080.jpg?t=1695758484" alt="" />
    </div>
    <div className="saturate-200">
      <img className="w-48" src="https://sf2.cnetfrance.fr/wp-content/uploads/cnet/2023/05/meilleurs-pc-portables.jpg" alt="" />
    </div>
    </div>
  )
}

export default index
import React from 'react'
import './css/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import './css/hllo.css'
export default function Home() {
  return (
    <div className='Container'>
    <Navbar/>
    
   <div className='bagrondblack'>
    <div className='text'>
      <h5 className='title1'>You Know You’r Barber Shop</h5>
      <h1 className='title2'>Time is precious to you, so book your Chair and win your time</h1>
      <a  className='buttonbook' href="/Login">BOOK NOW</a>
      
    </div>
  
    <a href=""><img className='flech' src={require("./img/flech.png")} alt="" /></a>
   </div>

   <div className='feedback'>

   <div className="col">
  <div className='imagesB'><img  src="https://thebarbercompany.fr/wp-content/uploads/2019/07/Icon_club.png" alt /></div>
  <p className="titleC">The Barber Club</p>
  <a href="#"  className="cta-btn-gold">Rejoindre le club</a>
</div>

<div className="col">
 <div className='imagesB'> <img src="https://thebarbercompany.fr/wp-content/uploads/2019/07/Icon_salon.png" alt /> </div>
  <p className="titleC">Les Salons</p>
  <a href="#"  className="cta-btn-gold">Où sommes-nous ?</a>
</div>


<div className="col">
 <div className='imagesB'> <img src="https://thebarbercompany.fr/wp-content/themes/thebarbercompany/assets/img/Icon_newsletter.png" alt /> </div>
  <p className="titleC">Newsletter</p>
  <a  href="#" className="cta-btn-gold btn-newslatter">S'abonner</a>
</div>

<div className="col">
<div className='imagesB'> <img src="https://thebarbercompany.fr/wp-content/themes/thebarbercompany/assets/img/Icon_reseaux_sociaux.png" alt /></div> 
  <p className="titleC">Suivez-Nous</p>
  <div className="resauxS">
    <a href="#" target="_blank"><img src="https://thebarbercompany.fr/wp-content/uploads/2019/08/Icon_instagram_orange.png" alt /></a>
    <a href="#" target="_blank"><img src="https://thebarbercompany.fr/wp-content/uploads/2019/08/Icon_facebook_orange.png" alt /></a>
    <a href="#" target="_blank"><img src="https://thebarbercompany.fr/wp-content/uploads/2019/08/Icon_pinterest_orange.png" alt /></a>
  </div>
</div>


   </div>
   
   <div className='images'>
    <img className='img1' src={require("./img/a.jpg")} alt="" />
   <h1 className='ptudcut'>Product Lifestyle Gallery</h1>
    <img className='img1' src={require("./img/salon-coiffeur.png")} alt="" />

    
   </div>
   <div className='images'>
   <img className='img1' src={require("./img/b.jpg")} alt="" />
   <img className='img1' src={require("./img/c.jpg")} alt="" />
    <img className='img1' src={require("./img/h.jfif")} alt="" />
   </div>

   <div className='coupeCheveux'>

<div className="restaurant">
 <a href="/login"><div className="reservation_btn">
    Réserver
  </div></a>
  <div className="close_it">
    <i className="fas fa-times" />
  </div>
  <div className="infos_left">
    <div className="image_container1" >
    </div>
    <div className="prix_block">
      <span className="text_prix">Prix : </span>
      <span className="prix">40 DH</span>
    </div>
    <div className="block_infos">
      <h1>Normal Haircut</h1>
      <div className="adress_block">
        <i className="fas fa-map-marker-alt" />
        <span className="adress">Rue Saada</span>
      </div>
      <div className="adress_block">
      <span className="locate">Youssoufia</span>

      </div>
    </div>
  </div>
</div>


<div className="restaurant">
  <div className="reservation_btn">
    Réserver
  </div>
  <div className="close_it">
    <i className="fas fa-times" />
  </div>
  <div className="infos_left">
    <div className="image_container5" >
    </div>
    <div className="prix_block">
      <span className="text_prix">Prix : </span>
      <span className="prix">250  DH</span>
    </div>
    <div className="block_infos">
      <h1>Haircut + Keratin</h1>
      <div className="adress_block">
        <i className="fas fa-map-marker-alt" />
        <span className="adress">Rue Saada</span>
      </div>
      <div className="adress_block">
      <span className="locate">Youssoufia</span>

      </div>
    </div>
  </div>
</div>
<div className="restaurant">
  <div className="reservation_btn">
    Réserver
  </div>
  <div className="close_it">
    <i className="fas fa-times" />
  </div>
  <div className="infos_left">
    <div className="image_container2" >
    </div>
    <div className="prix_block">
      <span className="text_prix">Prix : </span>
      <span className="prix">100 DH</span>
    </div>
    <div className="block_infos">
      <h1>Hard Haircut</h1>
      <div className="adress_block">
        <i className="fas fa-map-marker-alt" />
        <span className="adress">Rue Saada</span>
        
      </div>
      <div className="adress_block">
      <span className="locate">Youssoufia</span>
      </div>
    </div>
  </div>
</div>

<div className="restaurant">
  <div className="reservation_btn">
    Réserver
  </div>
  <div className="close_it">
    <i className="fas fa-times" />
  </div>
  <div className="infos_left">
    <div className="image_container3" >
    </div>
    <div className="prix_block">
      <span className="text_prix">Prix : </span>
      <span className="prix">220 DH</span>
    </div>
    <div className="block_infos">
      <h1>Haircut + Color</h1>
      <div className="adress_block">
        <i className="fas fa-map-marker-alt" />
        <span className="adress">Rue Saada</span>
        
      </div>
      <div className="adress_block">
      <span className="locate">Youssoufia</span>
      </div>
    </div>
  </div>
</div>
</div>


<div className='prestation'>
  <h1 className='grandTitle'> Nos Produits </h1>
  <div className='allproducte'>

  <div className="col-3 style1 Tous  coiffants ">
  <div className="hovereffect">
    <div className="content-txt2">
        <div>
            <p className="prodTitle">Huile à barbe</p>
            <h1 className="prodTitle">BEARD OIL</h1>
       </div>
      
      <a href="#">
    <i class="shp fa-solid fa-cart-shopping"></i>
 </a>
    </div>
    <img className="img-responsive" src="https://thebarbercompany.fr/wp-content/uploads/2019/09/2019-10_571x571_BEARDOIL_TBC.jpg" alt />
   
  </div>
</div>


<div className="col-3 style1 Tous  coiffants ">
  <div className="hovereffect">
    <div className="content-txt2">
        <div>
      <p className="prodTitle">Poudre Texturisante</p>
      <h2 className="prodTitle">DESIGN POWDER</h2>
      </div>
      <a href="#">
    <i class="shp fa-solid fa-cart-shopping"></i>
 </a>
    </div>
    <img className="img-responsive" src="https://thebarbercompany.fr/wp-content/uploads/2021/12/DESIGN-POWDER.jpg" alt />
    
  </div>
</div>

<div className="col-3 style1 Tous  coiffants ">
  <div className="hovereffect">
    <div className="content-txt2">
        <div>
      <p className="prodTitle">Pâte Modelante</p>
      <h2 className="prodTitle">DESIGN PASTE</h2>
      </div>
      <a href="#">
    <i class="shp fa-solid fa-cart-shopping"></i>
 </a>
    </div>
    <img className="img-responsive" src="https://thebarbercompany.fr/wp-content/uploads/2021/03/BARBER-COMPANY-PASTE-V2.jpg" alt />
    
  </div>
</div>

  </div>

</div>
<div className='allCostmers '>
  <div className="containerB mb-20">
    <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
      <h4 className="font-cond-l fg-accent lts-md mgb-10" contentEditable="false">Not Yet Convinced?</h4>
      <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contentEditable="false">Read Customer Reviews</h1>
    </div>
    <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
      <div className='cardprisi'>
        <img src="https://asafacon.fr/wp-content/uploads/2021/03/Cest-Quoi-Un-Homme-Beau-Dapres-Les-Femmes.jpg" className="w-70 img-round mgb-20" title alt data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
        <p className="textPris" contentEditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
        <h5 className="font-cond mgb-5 fg-text-d fs-130" contentEditable="false">Martha Stewart</h5>
        <small className="font-cond case-u lts-sm fs-80 fg-text-l" contentEditable="false">Business Woman - New York</small>
      </div>
      < div className='cardprisi'>
        <img src="https://asafacon.fr/wp-content/uploads/2021/03/portrait-dun-homme-avec-un-beau-visage.jpg" className="w-70 img-round mgb-20" title alt data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
        <p className="textPris" contentEditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
        <h5 className="font-cond mgb-5 fg-text-d fs-130" contentEditable="false">Ariana Menage</h5>
        <small className="font-cond case-u lts-sm fs-80 fg-text-l" contentEditable="false">Recording Artist - Los Angeles</small>
      </div>
      <div className='cardprisi'> 
        <img src="https://p0.pikist.com/photos/320/914/man-portrait-guy-person-male-young-handsome-profile-modern.jpg" className="w-70   mgb-20 img-round  " title alt data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
        <p className="textPris" contentEditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
        <h5 className="font-cond mgb-5 fg-text-d fs-130" contentEditable="false">Sean Carter</h5>
        <small className="font-cond case-u lts-sm fs-80 fg-text-l" contentEditable="false">Fund Manager - Chicago</small>
      </div>
    </ul>
  </div>
</div>


   <Footer/>
   
    </div>
  )
}

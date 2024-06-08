const isHomeFooter = document.getElementById('footer1').getAttribute('data-page') === 'home1';
const mainUrlFooter = isHomeFooter ? '' : './../../index.html';

const isHomeFooter1 = document.getElementById('footer1').getAttribute('data-page') === 'home1';
const mainUrlFoote1r = isHomeFooter ? '' : '.';

const isHomeFooter2 = document.getElementById('footer1').getAttribute('data-page') === 'home1';
const mainUrlFooter2 = isHomeFooter ? '' : './../.';






document.getElementById('footer1').innerHTML = `  

<div>
  <span class="lang-element ro"><span class="logo">CEI - Centru Educație Incluzivă</span></span>
  <span class="lang-element en" style="display: none;"><span class="logo">CEI - Center for Inclusive Education</span></span>
  <span class="lang-element ru" style="display: none;"><span class="logo">CEI - Центр инклюзивного образования</span></span>
</div>

<div class="row">
  <div class="col-3">                
      <div class="link-cat" onclick="footerToggle(this)">
          <span class="footer-toggle"></span>
          <span class="lang-element ro"><a href="${mainUrlFooter}./pages/Despre Noi/informatii.html" style="text-decoration: none; color:var(--tenth-color)"><span class="footer-cat">Despre Noi</span></a></span>
          <span class="lang-element en" style="display: none;"><a href="${mainUrlFooter}./pages/Despre Noi/informatii.html" style="text-decoration: none; color:var(--tenth-color)"><span class="footer-cat">About Us</span></a></span>
          <span class="lang-element ru" style="display: none;"><a href="${mainUrlFooter}./pages/Despre Noi/informatii.html" style="text-decoration: none; color:var(--tenth-color)"><span class="footer-cat">О Hас</span></a></span>
      </div>
      <ul class="footer-cat-links">
          <span class="lang-element ro"><li><a href="${mainUrlFooter}./pages/Despre Noi/FAQ.html" style="text-decoration: none; color:var(--tenth-color)"><span>Întrebări Frecvente</span></a></li></span>
          <span class="lang-element en" style="display: none;"><li><a href="${mainUrlFooter}./pages/Despre Noi/FAQ.html" style="text-decoration: none; color:var(--tenth-color)"><span>Frequent questions</span></a></li></span>
          <span class="lang-element ru" style="display: none;"><li><a href="${mainUrlFooter}./pages/Despre Noi/FAQ.html" style="text-decoration: none; color:var(--tenth-color)"><span>Частые вопросы</span></a></li></span>
      </ul>
  </div>
  <div class="col-3">
      <div class="link-cat" onclick="footerToggle(this)">
          <span class="footer-toggle"></span>

          
          

          <span class="lang-element ro"><a href="${mainUrlFooter}./pages/Adaptari/camerespeciale.html" style="text-decoration: none; color:var(--tenth-color)"><span class="footer-cat">Adaptări</span></a></span>
          <span class="lang-element en" style="display: none;"><a href="${mainUrlFooter}./pages/Adaptari/camerespeciale.html" style="text-decoration: none; color:var(--tenth-color)"><span class="footer-cat">Adjustments</span></a></span>
          <span class="lang-element ru" style="display: none;"><a href="${mainUrlFooter}./pages/Adaptari/camerespeciale.html" style="text-decoration: none; color:var(--tenth-color)"><span class="footer-cat">Aдаптации</span></a></span>
      </div>
      <ul class="footer-cat-links">
          <span class="lang-element ro"><li><a href="${mainUrlFooter}./pages/Adaptari/camerespeciale.html"><span>Camere Speciale</span></a></li></span>
          <span class="lang-element en" style="display: none;"><li><a href="${mainUrlFooter}./pages/Adaptari/camerespeciale.html"><span>Special Rooms</span></a></li></span>
          <span class="lang-element ru" style="display: none;"><li><a href="${mainUrlFooter}./pages/Adaptari/camerespeciale.html"><span>Специальные Hомера</span></a></li></span>

          <span class="lang-element ro"><li><a href="${mainUrlFooter}./pages/Invatamant/MaterialeDidactice.html"><span>Materiale Didactice</span></a></li></span>
          <span class="lang-element en" style="display: none;"><li><a href="${mainUrlFooter}./pages/Invatamant/MaterialeDidactice.html"><span>Didactic Materials</span></a></li></span>
          <span class="lang-element ru" style="display: none;"><li><a href="${mainUrlFooter}./pages/Invatamant/MaterialeDidactice.html"><span>Дидактические Mатриалы</span></a></li></span>

          <span class="lang-element ro"><li><a href="${mainUrlFooter}./pages/Adaptari/locomotorii.html"><span>Adaptări Locomotorii</span></a></li></span>
          <span class="lang-element en" style="display: none;"><li><a href="${mainUrlFooter}./pages/Adaptari/locomotorii.html"><span>Didactic Materials</span></a></li></span>
          <span class="lang-element ru" style="display: none;"><li><a href="${mainUrlFooter}./pages/Adaptari/locomotorii.html"><span>Адаптации Локомотива</span></a></li></span>

          <span class="lang-element ro"><li><a href="${mainUrlFooter}./pages/Adaptari/echipamente.html"><span>Echipamente</span></a></li></span>
          <span class="lang-element en" style="display: none;"><li><a href="${mainUrlFooter}./pages/Adaptari/echipamente.html"><span>Equipment</span></a></li></span>
          <span class="lang-element ru" style="display: none;"><li><a href="${mainUrlFooter}./pages/Adaptari/echipamente.html"><span>Oборудование</span></a></li></span>
      </ul>
  </div>
  <div class="col-3">
      <div class="link-cat" onclick="footerToggle(this)">
          <span class="footer-toggle"></span>
          <span class="lang-element ro"><a href="${mainUrlFooter}./pages/Clubul Parintilor/login.html" style="text-decoration: none; color:var(--tenth-color)"><span class="footer-cat">Clubul Părinților</span></a></span>
          <span class="lang-element en" style="display: none;"><a href="${mainUrlFooter}./pages/Clubul Parintilor/login.html" style="text-decoration: none; color:var(--tenth-color)"><span class="footer-cat">Parents Club</span></a></span>
          <span class="lang-element ru" style="display: none;"><a href="${mainUrlFooter}./pages/Clubul Parintilor/login.html" style="text-decoration: none; color:var(--tenth-color)"><span class="footer-cat">Родительский Kлуб</span></a></span>
      </div>
      <ul class="footer-cat-links">
          <span class="lang-element ro"><li><a href="${mainUrlFooter}./pages/Clubul Parintilor/ceeste.html"><span>Ce este?</span></a></li></span>
          <span class="lang-element en" style="display: none;"><li><a href="${mainUrlFooter}./pages/Clubul Parintilor/ceeste.html"><span>What is this?</span></a></li></span>
          <span class="lang-element ru" style="display: none;"><li><a href="${mainUrlFooter}./pages/Clubul Parintilor/ceeste.html"><span>Что это?</span></a></li></span>
          
          <span class="lang-element ro"><li><a href="${mainUrlFooter}./pages/Clubul Parintilor/login.html"><span>Fă parte!</span></a></li></span>
          <span class="lang-element en" style="display: none;"><li><a href="${mainUrlFooter}./pages/Clubul Parintilor/login.html"><span>Be a part!</span></a></li></span>
          <span class="lang-element ru" style="display: none;"><li><a href="${mainUrlFooter}./pages/Clubul Parintilor/login.html"><span>Быть порознь!</span></a></li></span>
      </ul>
  </div>
  <div class="col-3" id="newsletter">
      
      
      <div class="social-links social-2">
          <a href=""><i class="fab fa-facebook-f"></i></a>
          <a href=""><i class="fa fa-envelope"></i></a>
          <a href=""><i class="fab fa-viber"></i></a>
          <a href=""><i class="fab fa-whatsapp"></i></a>
         
      </div>

      <div id="address">
          <span class="lang-element ro">Locația Officială</span>
          <span class="lang-element en" style="display: none;">Official Location</span>
          <span class="lang-element ru" style="display: none;">Официальное Mестоположение</span>
          <ul>
              <li>
                  <i class="far fa-building"></i>
                  <div>or.Chișinău<br/>
                  r. Ialoveni, Str. Basarabia 2, Liceul Teoretic ,,Petre Ștefănucă”</div>
              </li>
              <li>
                  
              </li>
          </ul>
      </div>
      
  </div>
  <div class="social-links social-1 col-6">
   <a href="https://www.facebook.com/LiceulTeoreticPetreStefanucaIaloveni"><i class="fab fa-facebook-f"></i></a>
   <a href="mailto:s_rudoi@yahoo.com"><i class="fa fa-envelope"></i></a>
   <a href="https://www.viber.com/en/"><i class="fab fa-viber"></i></a>
   <a href="https://www.whatsapp.com/"><i class="fab fa-whatsapp"></i></a>
      
  </div>
</div>
<div id="copyright">

<span class="lang-element ro">&copy; 2024 Conține toate drepturile de autor.</span>
<span class="lang-element en" style="display: none;">&copy; 2024 Contains all copyrights.</span>
<span class="lang-element ru" style="display: none;">&copy; 2024 Содержит все авторские права.</span>

</div>
<div class:"disclaimer" id="owner">
<p class:"disclaimer-p">Acest WebSite a fost realizat în cadrul competiției "TekWill Junior Abassadors" organizată de proiectul "TekWill în Fiecare Școală"</p>
</div>
`;





function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}
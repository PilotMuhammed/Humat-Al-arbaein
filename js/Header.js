class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   <nav id="nav" class="navbar-holder">
  <div class="logo">
    <a href="index.html">
      <img src="../logos/logo_orange.svg" alt="logo" />
    </a>
  </div>
  <div class="navbar">
  
        <a href="hosts.html">
          المضايف
          <div class="underlind"></div>
        </a>
    
        <a href="map.html">
          الخارطة
          <div class="underlind"></div>
        </a>
      
        <a href="stories.html">
          القصص
          <div class="underlind"></div>
        </a>
     
  </div>
</nav>

   `;
  }
}

customElements.define("header-component", Header);

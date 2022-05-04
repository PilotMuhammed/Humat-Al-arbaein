class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
   <nav id="nav" class="menu_bar">
  <div class="menu_logo">
    <a href="index.html">
      <img src="../logos/logo_orange.svg" alt="logo" />
    </a>
  </div>
  <div class="menu_items">
    <ul>
      <li>
        <a href="hosts.html">
          المضايف
          <div class="underlind"></div>
        </a>
      </li>
      <li>
        <a href="map.html">
          الخارطة
          <div class="underlind"></div>
        </a>
      </li>
      <li>
        <a href="stories.html">
          القصص
          <div class="underlind"></div>
        </a>
      </li>
    </ul>
  </div>
</nav> 
    `;
  }
}

customElements.define("header-component", Header);

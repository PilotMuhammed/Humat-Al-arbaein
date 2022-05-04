class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
   `;
  }
}

customElements.define("header-component", Header);
//    <nav id="nav" class="menu_bar">
//   <div class="menu_logo">
//     <a href="index.html">
//       <img src="../logos/logo_orange.svg" alt="logo" />
//     </a>
//   </div>
//   <div class="menu_items">
//     <ul>
//       <li>
//         <a href="hosts.html">
//           المضايف
//           <div class="underlind"></div>
//         </a>
//       </li>
//       <li>
//         <a href="map.html">
//           الخارطة
//           <div class="underlind"></div>
//         </a>
//       </li>
//       <li>
//         <a href="stories.html">
//           القصص
//           <div class="underlind"></div>
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>

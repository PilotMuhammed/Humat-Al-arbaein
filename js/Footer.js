class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

         <footer class="footer">
      <ul>
        <li>
          <a href="" target="_blank"><i class="fa-solid fa-envelope"></i></a>
        </li>
        <li>
          <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </li>
        <li>
          <a href="" target="_blank"
            ><i class="fa-brands fa-facebook-square"></i
          ></a>
        </li>
      </ul>
    </footer>


    `;
  }
}

customElements.define("footer-component", Footer);

class Shots extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("shots").content;
    this.attachShadow({mode: "open"});
    this.shadowRoot.appendChild(template.cloneNode(true));
    this.setAttribute("class", "shots-component");
  }
}

customElements.define('shots-component', Shots);
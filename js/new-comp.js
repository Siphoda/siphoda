class Test extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: "open" });
    console.log("Test constructor called");
  }

  connectedCallback() {
    console.log("Test connectedCallback called");
    this.render();
    this.shadowRoot.querySelector("#incBtn").addEventListener("click", () => {
      this.count++;
      this.render();
    });
  }

  render() {
    console.log("Test render called");
    this.shadowRoot.innerHTML = `
      <h1>test</h1>
      <p>${this.count}</p>
      <button id="incBtn">Increment</button>
    `;
  }
}

customElements.define("new-comp", Test);
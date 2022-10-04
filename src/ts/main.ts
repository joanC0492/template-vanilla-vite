import "~scss/style.scss";
// import * as bootstrap from "bootstrap";
import { Popover, Modal } from "bootstrap";

import typescriptLogo from "../typescript.svg";
import { setupCounter } from "./counter";

import style from "~scss/App.module.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container py-5">
    <div class="row">
      <div class="col-4 mx-auto text-center">
        <div class="mb-2">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
          </a>
        </div>
        <h1 class="mb-2">
          <span role="button" data-bs-toggle="popover" title="Custom popover" data-bs-content="This is a Bootstrap popover.">Vite + TypeScript</span>
        </h1>
        <div class="mb-2">
          <button class="btn btn-dark w-50" id="counter" type="button"></button>
        </div>
        <p class="${style.appTitle}">
          Click on the Vite and TypeScript logos to learn more
        </p>        
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>  
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

// Events
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});

// const myModal = <HTMLDivElement>document.getElementById("exampleModal");
// myModal?.addEventListener("shown.bs.modal", () => {
//   console.log("Mensaje de prueba del modal")
// });

const options = {
  backdrop: true,
  focus: true,
  keyboard: true,
};
new Modal(<HTMLDivElement>document.getElementById("exampleModal"), options);

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
const url = location.href;
const href = link.href;

if (url.includes(href)) {
link.classList.add("ativo")
}
}

links.forEach(ativarLink);
// Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//
export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}

//
export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];
  
  if(menuButton) {
  function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    })
  }
  eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
  }
}


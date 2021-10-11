function iniciaModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.remove('fechar-modal')


  if(modal) {
    modal.addEventListener('click', (e) => {
      if(e.target.id == modalID || e.target.className == 'mostrar-modal'){
        modal.classList.add('fechar-modal')
      } 
    }) 
  } 
}

const abrirModalGuitarra = document.querySelector('#firstButton')
abrirModalGuitarra.addEventListener('click', () => iniciaModal('modal1'))
console.log(abrirModalGuitarra)

const abrirModalBaterista = document.querySelector('#secondButton')
abrirModalBaterista.addEventListener('click', () => iniciaModal('modal2') )
console.log(abrirModalBaterista)

const abrirModalTecladista = document.querySelector('#thirdButton')
abrirModalTecladista.addEventListener('click', () => iniciaModal('modal3'))
console.log(abrirModalTecladista)

const abrirModalBaixista = document.querySelector('#fourButton')
abrirModalBaixista.addEventListener('click', () => iniciaModal('modal4'))
console.log(abrirModalBaixista)
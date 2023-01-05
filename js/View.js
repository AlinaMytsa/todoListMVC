class View{
  #todoContainer = null;
  #form = null;

  constructor() {}

  renderItem({title, description}){

    const wrapper = document.createElement('div');
    wrapper.classList.add('col-4')

    wrapper.innerHTML = `
     <div class="taskWrapper">
        <div class="taskHeading">${title}</div>
        <div class="taskDescription">${description}</div>
     </div>`;

    this.#todoContainer.prepend(wrapper);

  }

  setTodosContainer(htmlElement){
    if (this.#todoContainer) throw new Error('Ypu cannot redeclare todo container.')
    this.#todoContainer = htmlElement;
  }

  setForm(htmlElement){
    if (this.#form) throw new Error('Ypu cannot redeclare form.')
    this.#form = htmlElement;
  }
}

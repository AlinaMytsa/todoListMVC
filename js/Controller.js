class Controller {
  #model = null;
  #view = null;
  form = null;
  formSelector = null;
  todoContainerSelector = null;
  todoContainer = null;


  constructor(model, view, {formSelector, todoContainerSelector}) {
    this.#setModel(model);
    this.#setView(view);
    this.formSelector = formSelector;
    this.todoContainerSelector = todoContainerSelector;
    this.getForm();
    this.getTodoContainer();
    this.#view.resetForm();


    this.form.addEventListener('submit', this.#handleForm)
  }

  #handleForm = e => {
    e.preventDefault();
    e.stopPropagation();
    this.validationFormElements();
    const data = {};
    this.form.querySelectorAll('input, textarea')
      .forEach(item => {
        data[item.name] = item.value;
      })

    this.#model.saveData(data);
    this.#view.renderItem(data);
  }

  getTodoContainer() {
    this.todoContainer = document.querySelector(this.todoContainerSelector);
    this.#view.setTodosContainer(this.todoContainer);
  }

  getForm() {
    const form = document.querySelector(this.formSelector);
    if (!(form instanceof HTMLFormElement)) throw new Error('Form should be a HTML Form Element.');
    this.form = form;
    this.#view.setForm(form);
  }

  validationFormElements(){
    this.form.querySelectorAll('input, textarea')
      .forEach(item => {
        if (item.value.trim().length < 10){
          // throw new Error('your set is too short.')
        }

      })
  }

  #setModel(modelInstance) {
    if (!modelInstance) throw new Error('Model is not required.');
    this.#model = modelInstance;
  }

  #setView(viewInstance) {
    if (!viewInstance) throw new Error('View is not required.');
    this.#view = viewInstance;
  }
}

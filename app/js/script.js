{
    class ToDoList {

        constructor(toDo) {
            this.toDo = toDo;
            this.input = toDo.querySelector(".toDoList__input");
            this.button = toDo.querySelector(".toDoList__button");
            this.content = toDo.querySelector(".toDoList__content");
        }
        start() {
            this.button.addEventListener("click", () => {
                this.createItem(this.input.value);
            });
            let listItems = this.toDo.querySelectorAll(".toDoList__item");
            for (const it of listItems) {
                it.addEventListener("click", (e) => {
                    this.switchStatus(e.currentTarget);
                });
                let close = it.querySelector(".toDoList__close");
                close.addEventListener("click", (e) => {
                    this.deleteItem(it);
                });
            }
        }
        createItem(itemText) {
            if (itemText == "") {
                return;
            }
            let item = document.createElement("div");
            item.classList.add("toDoList__item");
            item.addEventListener("click", (e) => {
                this.switchStatus(e.currentTarget);
            });

            let close = document.createElement("div");
            let svg = '<svg class="toDoList__close-icon" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z"/><path d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"/></g></svg>'
            close.classList.add("toDoList__close");
            close.innerHTML = svg;
            close.addEventListener("click", () => {
                this.deleteItem(item);
            });


            let text = document.createElement("div");
            text.classList.add(".toDoList__text");

            text.textContent = itemText;

            item.append(close);
            item.append(text);

            this.content.appendChild(item);
        }
        deleteItem(item) {
            this.content.removeChild(item);

        }
        switchStatus(item) {
            if (item.classList.contains("toDoList__item-active")) {
                item.classList.remove("toDoList__item-active");
            } else {
                item.classList.add("toDoList__item-active");
            }
        }
    }

    let block = document.querySelector(".toDoList");
    let toDoList = new ToDoList(block);
    toDoList.start();

}
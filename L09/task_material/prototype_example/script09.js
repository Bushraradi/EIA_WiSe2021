var L09;
(function (L09) {
    window.addEventListener("load", function () {
        /*Deklaration der Variablen*/
        var input = document.getElementById("toDo");
        var wrapper = document.getElementById("todoWrapper");
        var todoCount = 0;
        
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                createToDo();
                clearInput();
            }
        });
        function updateCounter() {
            document.querySelector("#counterToDos").innerHTML = String(todoCount);
        }
        function clearInput() {
            input.value = "";
        }
        function createToDo() {
            todoCount++;
            updateCounter();
            var todoItem = document.createElement("div");
            var checkbox = document.createElement("input");
            var label = document.createElement("label");
            var trashButton = document.createElement("i");
            todoItem.className = "todoItem";
            checkbox.type = "checkbox";
            checkbox.className = "checkBox";
            label.innerHTML = input.value;
            label.className = "divLabel";
            trashButton.className = "fas fa-trash-alt";
            wrapper.appendChild(todoItem);
            todoItem.appendChild(checkbox);
            todoItem.appendChild(label);
            todoItem.appendChild(trashButton);
            trashButton.addEventListener("click", function () {
                deleteItem(todoItem);
            });
        }
        function deleteItem(item) {
            wrapper.removeChild(item);
            todoCount--;
            updateCounter();
        }
    });
})(L09 || (L09 = {}));
//# sourceMappingURL=script09.js.map
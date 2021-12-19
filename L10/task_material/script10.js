var L10;
(function (L10) {
    window.addEventListener("load", function () {
        var input = document.getElementById("toDo");
        var wrapper = document.getElementById("todoWrapper");
        var todoCount = 0;
        var openCount = 0;
        var doneCount = 0;
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                var todoText = input.value;
                createToDo(todoText);
                clearInput();
            }
        });
        function updateCounter() {
            document.querySelector("#counterToDos").innerHTML = String(todoCount);
        }
        function updateOpenCounter() {
            document.querySelector("#counterOpen").innerHTML = String(openCount);
        }
        function updatedoneCounter() {
            document.querySelector("#counterDone").innerHTML = String(doneCount);
        }
        function clearInput() {
            input.value = "";
        }
        function createToDo(todoText) {
            todoCount++;
            openCount++;
            updateCounter();
            updateOpenCounter();
            updatedoneCounter();
            var todoItem = document.createElement("div");
            var checkbox = document.createElement("input");
            var label = document.createElement("label");
            var trashButton = document.createElement("i");
            todoItem.className = "todoItem";
            checkbox.type = "checkbox";
            checkbox.className = "checkBox";
            checkbox.addEventListener("click", function (event) {
                var isChecked = checkbox.checked;
                if (isChecked === true) {
                    doneCount++;
                    openCount--;
                }
                else {
                    doneCount--;
                    openCount++;
                }
                updateOpenCounter();
                updatedoneCounter();
            });
            label.innerHTML = todoText;
            label.className = "divLabel";
            trashButton.className = "fas fa-trash-alt";
            wrapper.appendChild(todoItem);
            todoItem.appendChild(checkbox);
            todoItem.appendChild(label);
            todoItem.appendChild(trashButton);
            trashButton.addEventListener("click", function () {
                deleteItem(todoItem);
                if (checkbox.checked === true) {
                    doneCount--;
                }
                else {
                    openCount--;
                }
                updateOpenCounter();
                updatedoneCounter();
            });
        }
        function deleteItem(item) {
            wrapper.removeChild(item);
            todoCount--;
            updateCounter();
        }
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                createToDo(wildcard);
            }
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        document.querySelector("#Artyom").addEventListener("click", function () {
            startContinuousArtyom();
            document.querySelector("#Artyom").disabled = true;
        });
    });
})(L10 || (L10 = {}));
//# sourceMappingURL=script10.js.map
namespace L10
{

    window.addEventListener("load", function(): void {
    
    /*Deklaration der Variablen*/
    
    const input = document.getElementById("toDo");
    const wrapper = document.getElementById("todoWrapper");
    let todoCount = 0;
    let openCount = 0;
    let doneCount = 0;

    input.addEventListener("keydown", function (event) : void {
        if (event.key === "Enter") {
            createToDo();
            clearInput();
        }
    });
    function updateCounter() {
        document.querySelector("#counterToDos").innerHTML = String(todoCount);

        function updateopenCounter() {
            document.querySelector("#counteropen").innerHTML = String(openCount);

            function updatedoneCounter() {
                document.querySelector("#counterdone").innerHTML = String(doneCount);
    }
    function clearInput() {
        input.value = "";
    }

    //counter
    function createToDo() {
        todoCount++;
        openCount = ++ ;
        doneCount = ++ ;

        updateCounter();
        updateopenCounter();
        updatedoneCounter();

        //HTML Elemente
        const todoItem = document.createElement("div");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const trashButton = document.createElement("i");

//Klasse hinzufügen
        todoItem.className = "todoItem";
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";


        checkbox.addEventListener("click", function (event: Event): void {
            let isChecked: boolean = checkbox.checked;

            if (isChecked === true) {
                doneCount++;
                openCount--;
            } else {
                doneCount--;
                openCount++;
            }
            updateopenCounter();
            updatedoneCounter();

        });


        label.innerHTML = input.value;
        label.className = "divLabel";

        trashButton.className = "fas fa-trash-alt";

        trashButton.addEventListener("click", function (): void {
            deleteItem(todoItem);


            if (checkbox.checked === true) {
                doneCount--;
            }
            else {
                openCount--;
            }
            updateopenCounter();
            updatedoneCounter();
        });


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

    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i: any, wildcard: string): void {
            //toDo anlegen wenn "erstelle Aufgabe" gesagt wurde
            createToDo(wildcard);
        }
    });

    function startArtyom(): void {
        artyom.fatality();

        setTimeout(
            function (): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function (): void {
                    console.log("Ready!");
                });
            },
            250);
    }

    document.querySelector("#Artyom").addEventListener("click", function (): void {
        startArtyom();
    
        (document.querySelector("#Artyom") as HTMLButtonElement).disabled = true;
    });

});  
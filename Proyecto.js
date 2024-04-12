function agregarTarea() {
    var taskInput = document.getElementById("taskInput");
    var taskDueDate = document.getElementById("taskDueDate");
    var taskDueTime = document.getElementById("taskDueTime");
    var taskStartDate = document.getElementById("taskStartDate");
    var taskStartTime = document.getElementById("taskStartTime");
    var textoTarea = taskInput.value.trim();
    var fechaVencimiento = taskDueDate.value.trim();
    var horaVencimiento = taskDueTime.value.trim();
    var fechaInicio = taskStartDate.value.trim();
    var horaInicio = taskStartTime.value.trim();
    
    if (textoTarea !== "") {
        var listaTareas = document.getElementById("taskList");
        
        var itemTarea = document.createElement("div");
        itemTarea.classList.add("task-item");
        
        var nombreTarea = document.createElement("h3");
        nombreTarea.textContent = textoTarea;
        
        var fechaInicioSpan = document.createElement("p");
        fechaInicioSpan.textContent = "Fecha de inicio: " + fechaInicio;
        
        var horaInicioSpan = document.createElement("p");
        horaInicioSpan.textContent = "Hora de inicio: " + horaInicio;

        var fechaVencSpan = document.createElement("p");
        fechaVencSpan.textContent = "Fecha de vencimiento: " + fechaVencimiento;
        
        var horaVencSpan = document.createElement("p");
        horaVencSpan.textContent = "Hora de vencimiento: " + horaVencimiento;
        
        var inputEditar = document.createElement("input");
        inputEditar.type = "text";
        inputEditar.value = textoTarea;
        inputEditar.style.display = "none";
        
        var btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.onclick = function() {
            if (btnEditar.textContent === "Editar") {
                nombreTarea.style.display = "none";
                fechaInicioSpan.style.display = "none";
                horaInicioSpan.style.display = "none";
                fechaVencSpan.style.display = "none";
                horaVencSpan.style.display = "none";
                inputEditar.style.display = "inline-block";
                btnEditar.textContent = "Guardar";
            } else {
                nombreTarea.textContent = inputEditar.value;
                fechaInicioSpan.textContent = "Fecha de inicio: " + taskStartDate.value;
                horaInicioSpan.textContent = "Hora de inicio: " + taskStartTime.value;
                fechaVencSpan.textContent = "Fecha de vencimiento: " + taskDueDate.value;
                horaVencSpan.textContent = "Hora de vencimiento: " + taskDueTime.value;
                nombreTarea.style.display = "block";
                fechaInicioSpan.style.display = "block";
                horaInicioSpan.style.display = "block";
                fechaVencSpan.style.display = "block";
                horaVencSpan.style.display = "block";
                inputEditar.style.display = "none";
                btnEditar.textContent = "Editar";
            }
        };
        
        var btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.onclick = function() {
            if (confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
                itemTarea.remove();
            }
        };
        
        itemTarea.appendChild(nombreTarea);
        itemTarea.appendChild(fechaInicioSpan);
        itemTarea.appendChild(horaInicioSpan);
        itemTarea.appendChild(fechaVencSpan);
        itemTarea.appendChild(horaVencSpan);
        itemTarea.appendChild(inputEditar);
        itemTarea.appendChild(btnEditar);
        itemTarea.appendChild(btnEliminar);
        
        listaTareas.appendChild(itemTarea);

        // Agregar clase de animación
        setTimeout(function() {
            itemTarea.classList.add("fadeIn");
        }, 10);

        // Remover clase de animación después de 1 segundo
        setTimeout(function() {
            itemTarea.classList.remove("fadeIn");
        }, 1000);

        taskInput.value = "";
        taskDueDate.value = "";
        taskDueTime.value = "";
        taskStartDate.value = "";
        taskStartTime.value = "";
    } else {
        alert("Por favor ingresa una tarea.");
    }
}

const marcadoList1 = document.getElementById("list1");
const marcadoList2 = document.getElementById("list2");
const marcadoList3 = document.getElementById("list3");
const marcadoList4 = document.getElementById("list4");

function tarefasConcluidas() {
  if (
    marcadoList1.checked &&
    marcadoList2.checked &&
    marcadoList3.checked &&
    marcadoList4.checked
  ) {
    document.getElementById("text").style.display = "block";
  }
}

marcadoList1.addEventListener("click", tarefasConcluidas);
marcadoList2.addEventListener("click", tarefasConcluidas);
marcadoList3.addEventListener("click", tarefasConcluidas);
marcadoList4.addEventListener("click", tarefasConcluidas);


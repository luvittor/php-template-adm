function visualizar(entity) {
  switch (entity) {
    case "clientes":
      $("#tabela_simples_header")[0].style.backgroundColor = "#208dbe";

      $.get("ajax.php?entity=clientes", function (data, status) {
        //alert("Data: " + data);
        //alert("Status: " + status);
        $("#tabela_dados")[0].innerHTML = data;
      });

      break;

    case "usuarios":
      $("#tabela_simples_header")[0].style.backgroundColor = "#10a062";

      $.get("ajax.php?entity=usuarios", function (data, status) {
        //alert("Data: " + data);
        //alert("Status: " + status);
        $("#tabela_dados")[0].innerHTML = data;
      });

      break;

    case "fornecedores":
      $("#tabela_simples_header")[0].style.backgroundColor = "#6e1881";

      $.get("ajax.php?entity=fornecedores", function (data, status) {
        //alert("Data: " + data);
        //alert("Status: " + status);
        $("#tabela_dados")[0].innerHTML = data;
      });

      break;
  }
}

<?php

include_once("DataRequest.php");

$dr = new DataRequest();

$data = null;

switch ($_GET["entity"]) {
    case "clientes":
        $data = $dr->dadosClientes();
        break;

    case "usuarios":
        $data = $dr->dadosUsuarios();
        break;

    case "fornecedores":
        $data = $dr->dadosFornecedores();
        break;
}

$thead = array_keys($data[0]);

echo "<thead><tr>";

echo "<th>#</th>";

foreach($thead AS $th) {
    echo "<th>" . htmlentities($th) . "</th>";
}

echo "</tr></thead>";

echo "<tbody>";

foreach($data AS $id => $row) { 
    echo "<tr><td>$id</td>";

    foreach($row AS $value) {
        echo "<td>" . htmlentities($value) . "</td>";
    }

    echo "</tr>";
}

echo "</tbody>";

?>
import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

export default function BankLineBoletos() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios
      .get("https://pp-api-desafio.herokuapp.com/agents")
      .catch((err) => console.log(err));

    if (response) {
      const data = response.data;

      console.log("response.data é : ", data);
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Boletos",
        columns: [
          {
            Header: "Conta",
            accessor: "id",
          },
          {
            Header: "Tipo da Transação",
            accessor: "typeTransaction",
          },
          {
            Header: "Valor",
            accessor: "money",
          },

          {
            Header: "Data e Hora",
            accessor: "time",
          },
          {
            Header: "Status",
            accessor: "status",
          },

        ],
      },
    ],
    []
  );
  return <CustomTable columns={columns} data={data} />;
}

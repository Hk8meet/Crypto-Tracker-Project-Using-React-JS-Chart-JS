import React from "react";
import { useParams } from "react-router-dom";


function CoinPage() {
    const {id} = useParams();
  return (
    <div>ID - {id}</div>
  );
}

export default CoinPage;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, CardContent } from "@mui/material";

import api from "../../utils/api";
import SpellType from "../../types/spell-types";

function SpellDetail() {
  const { index } = useParams();
  const [spellDetail, setSpellDetail] = useState<SpellType.ISpellDetail>({
    name: "",
    desc: "",
  });

  // Get detail about the spell during initial page load
  useEffect(() => {
    const getSpellDetail = async (spellName: string = index || "") => {
      const res = await axios.get(`${api.fetch}/${spellName}`);
      setSpellDetail(res.data);
    };
    getSpellDetail(index);
  }, [index]);

  return (
    <Container maxWidth="xl" className="singleSpellDetails">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <h1>{spellDetail.name}</h1>
          <p>{spellDetail.desc}</p>
          <Link to="/">
            <button type="button" className="homePageBtn">
              Back To Home Page
            </button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SpellDetail;

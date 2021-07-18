import React from "react";

import { Switch, Route } from "react-router-dom";

import GridMater from "../Components/GridMater";
import GridColab from "../Components/GridColab";
import ColabItem from "../Components/GridColab/ColabItem";

import GridEquipe from "../Components/GridEquipe";
import EquipeItem from "../Components/GridColab/ColabItem";

import dataColab from "../Components/GridColab/data.js";
import dataEquip from "../Components/GridEquipe/data.js";

import About from "../Components/About";

// import GridPrincipal from "../GridPrincipal";
// import Recipe from "../Recipe";

// import Movie from "../MyMovie";
// import Photo from "../Photo";

import Principal from "../Components/Principal";

import MaterItem from "../Components/GridMater/Mater/MaterItem";

export default function ReactRouter(props) {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={() => <Principal fontFamily={props.fontFamily} />}
      />
      <Route
        path="/materias/:id"
        component={(e) => <MaterItem fontFamily={props.fontFamily} />}
      />
      <Route
        path="/materias"
        component={() => <GridMater fontFamily={props.fontFamily} />}
      />
      <Route
        path="/colaboradores/:id"
        component={(e) => (
          <ColabItem
            data={dataColab}
            descButton="De Volta aos Colaboradores"
            pathName="/colaboradores"
            fontFamily={props.fontFamily}
          />
        )}
      />
      <Route
        path="/colaboradores"
        component={() => <GridColab fontFamily={props.fontFamily} />}
      />
      <Route
        path="/equipe/:id"
        component={() => (
          <EquipeItem
            data={dataEquip}
            descButton="De Volta a Equipe"
            pathName="/equipe"
            fontFamily={props.fontFamily}
          />
        )}
      />
      <Route
        path="/equipe"
        component={() => <GridEquipe fontFamily={props.fontFamily} />}
      />
      <Route
        path="/sobre"
        component={() => <About fontFamily={props.fontFamily} />}
      />
    </Switch>
  );
}

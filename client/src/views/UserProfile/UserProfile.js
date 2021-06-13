import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { useAuth0 } from "@auth0/auth0-react";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [per, setPer] = useState("");
  const [info, setInfo] = useState("");

  const classes = useStyles();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var st = `${name} : ${tel} : ${per} : ${info}`;
    alert(st);
  }

  if (!isAuthenticated) {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody textAlign='center'>
                <h4 >Faça o Login Primeiramente</h4>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
    // return <div>Loading ...</div>;
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Adicionar Fornecedor</h4>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Nome"
                      id="name"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      onChange={(evt) => setName(evt.target.value)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Telefone"
                      id="cel"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      onChange={(evt) => setTel(evt.target.value)}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Porcentagem sobre o produto"
                      id="percentage"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      onChange={(evt) => setPer(evt.target.value)}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: "#AAAAAA" }}>Informação</InputLabel>
                    <CustomInput
                      labelText="Informação sobre o fornecedor"
                      id="about-me"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                      onChange={(evt) => setInfo(evt.target.value)}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary">Adicionar Fornecedor</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </form>
  );
}

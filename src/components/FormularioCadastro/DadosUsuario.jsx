import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <form onSubmit={(event)=> {
            event.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                name="email"
                id="email"
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                name="senha"
                id="senha"
                label="senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >Cadastrar</Button>
        </form>
    );
}

export default DadosUsuario;
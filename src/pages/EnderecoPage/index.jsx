import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from 'axios'
import Alert from "@mui/material/Alert"

const EnderecoPage = () => {

    /*estados */
    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState({
        rua: '',
        cidade: '',
        bairro: '',
        estado: '',
    })

    //buscando o cep pelo valor do input com valor cep
   //assincrona para esperar carregar o resultado
    const consultarCep = async() => {
        try {
            const resultadoConsulta = 
             await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)
           const enderecoRequisicao = resultadoConsulta.data;
           
           //atualizando de acordo com a base de dados
           setEndereco({
            rua: enderecoRequisicao.street,
            cidade: enderecoRequisicao.city,
            bairro: enderecoRequisicao.neighborhood,
            estado: enderecoRequisicao.state,
            })

        
        } catch (error) {
        
        <Alert variant="filled" severity="error">
            CEP não encontrado, tente novamente!
          </Alert>

            console.log("erro na consulta do cep")
        }
    }



    return (

        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            marginTop='10vh'
            width='100vw'
            gap={2}
        >

            <Stack alignItems='center' gap={1} marginTop={10}>

                <Typography variant="h5">
                    Consulte seu CEP
                </Typography>

                <Link href="https://brasilapi.com.br/" target="_blank" underline="always">
                    Via Brasil API
                </Link>
            </Stack>

            <Stack
                alignItems='center'
                gap={1}
                flexDirection='row'
                justifyContent='center'>

                <TextField
                    label="Digite seu CEP"
                    type="number"
                    color="secondary" focused
                    variant="filled"
                    required inputProps={{ maxLength: 8 }}
                    /*pegando o valor digitado no input e atribuindo a variavel cep */
                    value={cep}
                    onChange={(evento) => setCep(evento.target.value)}
                />

                <Button variant="contained" onClick={() => consultarCep()}>Pesquisar</Button>

            </Stack>


            <Stack gap={1.5} width='40vw' marginTop={4}>
                <TextField label="Rua" value={endereco.rua} readOnly />
                <TextField label="Cidade" value={endereco.cidade} readOnly />
                <TextField label="Bairro" value={endereco.bairro} readOnly />
                <TextField label="Estado" value={endereco.estado} readOnly />
            </Stack>


        </Box>

    )
}



export default EnderecoPage; 

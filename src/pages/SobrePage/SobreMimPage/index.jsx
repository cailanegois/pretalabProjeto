//estilo
import "./style.css"
//card de projetos
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Botao from "../../../components/Botao"
import { Link } from "react-router-dom";
//imagem de perfil
import Avatar from "@mui/material/Avatar"
import Timeline from "../../../components/TimelineElements";

const SobreMimPage = () => {

    return (
        <>
            <main>

                <section className="boasvindas-section">

                    <Avatar
                        alt="Cailane Gois é uma jovem negra de cabelo cacheado na altura dos ombros"
                        src="./cailanegois.png"
                        sx={{ width: 150, height: 150 }}

                    />

                    <h1> Cailane Gois </h1>
                    <h3> Hello, world! Que bom que você está aqui!</h3>
                    <p>
                        Desenvolvedora Front-end Jr.  Construindo incríveis soluções  web para alavancar seu alcance digital
                    </p>

                </section>

                <section className="projetos-section">
                    <div>
                        <h1> Mural de Projetos </h1>
                        <p>Javascript, HTML, CSS & React </p>
                    </div>

                    <div className='cards-mural'>
                        <Card sx={{ maxWidth: 250 }} className='Card'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/mulheresqueinspiram.png"
                                    alt="imagem com fundo preto e frase 'mulheres que inspiram'"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" fontFamily='Roboto'> Mural de Inspirações
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='justify' fontSize={"12px"}>
                                        O  mural de inspirações é uma página com integração de form e construção de card, aplicando Hooks React, arrays, componentes, etc.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Link to="/muraldeinspiracoes"> Conhecer</Link>
                               
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 250 }} className='Card'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/simbolodelocalizacao.png"
                                    alt="Simbolo de localizacao vermelho sob um mapa e fundo preto"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" fontFamily='Roboto'> Consultar CEP
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='justify' fontSize={"12px"}>
                                        O projeto consultar CEP utiliza a  BRASIL API para fazer requisições buscando Cidade, Estado, Bairro e Rua de acordo com o CEP informado pelo usuário.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to="/consultacep">Conhecer </Link>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 250 }} className='Card'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/iconedepokemon.png"
                                    alt="um desenho de pokemon amarelo com fundo preto"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" fontFamily='Roboto'> Mural de Pokemons
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='justify' fontSize={"12px"}>
                                        O  mural de pokemons também utiliza API para buscar pokemons e exibir na tela imagem e nome.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>

                                <Link to="/pokemons"> Conhecer</Link>
                            </CardActions>
                        </Card>
                    </div>

                </section>


                <section className="sobremim-section">


                    <h1> Sobre mim </h1>

                    <h3> "Você é do tamanho dos seus sonhos. </h3>

                    <p>
                        Eu sou Cailane Gois, técnica em informática e Desenvolvedora front-end em formação, gosto de pensar a tecnologia como uma ferramenta de empoderamento social e aprendizado constante. Sou jovem líder pela Academia de Liderança da América Latina onde venho aprendendo sobre análise de dados com o time de Dados e Tecnologia (LDTT). Atualmente também sou diretora do time de escritoras do STEM para Minas, um projeto que visa impusionar meninas e mulheres na tecnologia. Vamos tomar um café? <a href="mailto:cailanegois@yahoo.com">Entre em contato comigo! </a>
                    </p>


                    <div className="section-formacao">
                        <h3> Formação </h3>
                        <div className="timelineContainer">
                            <Timeline />


                        </div>

                    </div>

                </section>

            </main >
        </>
    )
}

export default SobreMimPage;

//ajustar avatar sobrepondo o menu 
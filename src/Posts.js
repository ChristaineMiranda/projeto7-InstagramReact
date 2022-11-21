import React from "react"
let curtido = false

export default function Posts() {
    const arrayPosts = [
        { nomeUsuario: "meowed", imgUsuario: "assets/img/meowed.svg", imagemConteudo: "assets/img/gato-telefone.svg", fotoCurtida: "assets/img/respondeai.svg", curtidor: "respondeai", numero: 101.523 },
        { nomeUsuario: "barked", imgUsuario: "assets/img/barked.svg", imagemConteudo: "assets/img/dog.svg", fotoCurtida: "assets/img/adorable_animals.svg", curtidor: "adorable_animals", numero: 99.159 }
    ]

    return (

        <div class="posts">

            {arrayPosts.map((postagem) => <Post nome={postagem.nomeUsuario} imgUser={postagem.imgUsuario} imgContent={postagem.imagemConteudo} ftCurtidor={postagem.fotoCurtida} curtidor={postagem.curtidor} numero={postagem.numero} />)}

        </div>
    )
}

function Post(props) {


    const [iconeSalvar, setIconeSalvar] = React.useState("bookmark-outline")
    const [iconeCurtir, setIconeCurtir] = React.useState("heart-outline")
    const [curtidas, setCurtidas] = React.useState(props.numero)
    const [cor, setCor] = React.useState("black")




    function salvaPost() {
        setIconeSalvar("bookmark-sharp")
        //troca icone de salvar 
    }
    function curtirPost() {


        if (curtido == false) {
            setIconeCurtir("heart-sharp")
            setCor("red")
            setCurtidas(curtidas + 1)


        }
        if (curtido == true) {
            setIconeCurtir("heart-outline")
            setCor("black")
            setCurtidas(curtidas - 1)


        }
        curtido = !curtido


    }
    function curtirFoto() {
        setIconeCurtir("heart-sharp")
        setCor("red")
        setCurtidas(curtidas + 1)

    }
    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUser} />
                    {props.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgContent} onClick={curtirFoto} data-test="post-image" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={iconeCurtir} onClick={curtirPost} data-test="like-post" style={{ color: cor }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={iconeSalvar} onClick={salvaPost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.ftCurtidor} />
                    <div class="texto" data-test="likes-number">
                        Curtido por <strong>{props.curtidor}</strong> e <strong>outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}
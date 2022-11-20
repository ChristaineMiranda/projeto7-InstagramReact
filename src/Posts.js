export default function Posts() {
    const arrayPosts = [
        {nomeUsuario: "meowed", imgUsuario: "assets/img/meowed.svg", imagemConteudo: "assets/img/gato-telefone.svg", fotoCurtida: "assets/img/respondeai.svg", curtidor: "respondeai", numero: "101.523"},
        {nomeUsuario: "barked", imgUsuario: "assets/img/barked.svg", imagemConteudo: "assets/img/dog.svg", fotoCurtida: "assets/img/adorable_animals.svg", curtidor: "adorable_animals", numero: "99.159"}
    ]

    return (

        <div class="posts">
            
           {arrayPosts.map((postagem) => <Post nome = {postagem.nomeUsuario} imgUser = {postagem.imgUsuario} imgContent ={postagem.imagemConteudo} ftCurtidor ={postagem.fotoCurtida} curtidor={postagem.curtidor} numero = {postagem.numero}/>)}
        
        </div>
    )
}

function Post(props) {
    function salvaPost(){
        troca icone de salvar para preenchido, usar uma variavel guardando o icone só contornado antes do onclick e dentor dessa função aqui trocar para preenchido
    }
    return (
        <div class="post">
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
                <img src={props.imgContent} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" onClick ={salvaPost}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.ftCurtidor} />
                    <div class="texto">
                    Curtido por <strong>{props.curtidor}</strong> e <strong>outras {props.numero} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )
}
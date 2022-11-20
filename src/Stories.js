export default function Stories() {
    const arrayStories = [
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },
        { usuario: "meowed", imagem: "assets/img/meowed.svg" },
        { usuario: "barked", imagem: "assets/img/barked.svg" },
        { usuario: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg" },
        { usuario: "wawawicomics", imagem: "assets/img/wawawicomics.svg" },
        { usuario: "respondeai", imagem: "assets/img/respondeai.svg" },
        { usuario: "filomoderna", imagem: "assets/img/filomoderna.svg" },
        { usuario: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" }

    ]
    return (

        <div class="stories">

            {arrayStories.map((elemento) => <Storie user={elemento.usuario} image={elemento.imagem} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Storie(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}
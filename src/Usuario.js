import React from "react"
   


export default function Usuario() {
    let nomeAtual = "Catana"
    let imagemAtual = "assets/img/catanacomics.svg"

    return (
        <User nome={nomeAtual} foto={imagemAtual} />
    )
}

function User(props) {
    const [nomeUsuario, setNome] = React.useState(props.nome)
    const [imagemUsuario, setImagem] = React.useState(props.foto)

    function alteraNome() {
        setNome(prompt("Digite o novo nome"))
    }
    function alteraFoto() {
        setImagem(prompt("Digite o link da nova foto"))
       
    }

    return (
        <div class="usuario" data-test="user">
            <img src={imagemUsuario} onClick={alteraFoto} data-test="profile-image"/>
            <div class="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {nomeUsuario}
                    <ion-icon name="pencil" onClick={alteraNome} data-test="edit-name"></ion-icon>

                </span>
            </div>
        </div>
    )
}
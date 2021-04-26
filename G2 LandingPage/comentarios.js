const arrayComments = [];
const comentary = document.getElementById("comentarios");
const comment = document.getElementById("inputComentario");
const user = document.getElementById("usuario");
drawComments();

function addComment() {
    if(userLengthInvalid()) return
    if(commentLengthInvalid()) return
    const valueComment = comment.value;
    const valueUser = user.value;
    const comentario = {
    usuario: valueUser,descripcion: valueComment,}
    arrayComments.unshift(comentario);
    comentar();
    reset();
}

function comentar() {
    if(arrayComments.length > 4) {
        arrayComments.pop();
    }
    comentary.innerHTML = arrayComments.map((comentario) => crearComentario(comentario)).join('');
}

function crearComentario(comentario) {
    return `<div class="alert alert-secondary">
        <h5 class="usuario" >${comentario.usuario}</h5>
        <p>${comentario.descripcion}</p>
    </div>`;
}

function reset() {
    comment.value = '';
    user.value = '';
}

function userLengthInvalid() {
    var userValue = user.value;
    if(userValue.length < 3) {
        Alerta.show("Usuario Invalido");
        return true;
    }
    return false;
}

function commentLengthInvalid() {
    var commentValue = comment.value;
    if(commentValue.length < 1 || commentValue.length > 200) {
        Alerta.show("Comentario fuera de limites");
        return true;
    }
    return false;
}




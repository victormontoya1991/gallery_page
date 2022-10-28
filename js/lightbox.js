(function(){
    // Objeto con las Propiedades del efecto Lightbox
    var propLightbox = {
        imgContainer: document.getElementsByClassName('lightbox'),
        imagen: null,
        imagenSrc: null,
        cuerpoDom: document.getElementsByTagName('body')[0],
        lightbox_container: null,
        modal: null,
        cerrar_modal: null,
        animacion: 'fade',
    }
    // Objeto con los Métodos del efecto Lightbox
    var metLightbox = {
        inicio: function(){
            for (var i = 0; i < propLightbox.imgContainer.length; i++) {
                propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
            }
        },
        capturaImagen: function(){
            propLightbox.imagen = this;
            metLightbox.lightbox(propLightbox.imagen);
        },
        lightbox: function(imagen){
            //Llamado de la imagen
            propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
            //Creando el fondo del lightbox
            propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
            propLightbox.lightbox_container = document.getElementById('lightbox_container');
            propLightbox.lightbox_container.style.width = '100%';
            propLightbox.lightbox_container.style.height = '100%';
            propLightbox.lightbox_container.style.position = 'fixed';
            propLightbox.lightbox_container.style.zIndex = '1000';
            propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
            propLightbox.lightbox_container.style.top = '0';
            propLightbox.lightbox_container.style.left = '0';
            //Creando la imagen del lightbox
            propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
            propLightbox.modal = document.getElementById('modal');
            propLightbox.modal.style.height = '90%';
            //Mostramos la imagen
            propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
            propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');
            //animacion de abrir el lightbox
            if (propLightbox.animacion == 'fade'){
                document.getElementsByClassName('imagen-modal')[0].style.opacity = '0';
                setTimeout(function(){
                    document.getElementsByClassName('imagen-modal')[0].style.opacity = '1';
                },50);
            }
            //Boton de cerrar el lightbox
            propLightbox.modal.innerHTML += '<div id="cerrar_modal" class="iconCerrar"><span class="material-icons">close</span></div>';
            propLightbox.cerraModal = document.getElementById('cerrar_modal');
            propLightbox.cerraModal.addEventListener('click', metLightbox.cerrar_modal);
        },
        cerrar_modal: function(){
            propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container);
        },
    }
    metLightbox.inicio();
}())
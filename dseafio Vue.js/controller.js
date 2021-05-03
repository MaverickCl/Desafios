const app= new Vue({
    el: '#app',
    data:{
        productos:[],
        nuevoNombre:'',
        nuevaDescripcion:'',
        nuevoPrecio:'',
        ActualizarNombre:'',
        ActualizarDescripcion:'',
        ActualizarPrecio:'',
        editIndex: -1
    },
    
    methods:{
        agregarDatos:function(){
            if(this.nuevoNombre1!=''){
                if(this.nuevaDescripcion!=''){
                    if(this.nuevoPrecio!='' && parseInt(this.nuevoPrecio)>0){
                        this.productos.push({
                            nombre:this.nuevoNombre,
                            descripcion:this.nuevaDescripcion,
                            precio:this.nuevoPrecio,
                            
                        })
                        this.nuevoNombre=''
                        this.nuevaDescripcion=''
                        this.nuevoPrecio=''
                    }
                }
            }
            
        
            
        },
        eliminarProducto:function(index){
            this.productos.splice(index, 1)
            
        },
        editarProducto:function(index){
            this.editIndex = index;
            this.ActualizarNombre=this.productos[index].nombre
            this. ActualizarDescripcion=this.productos[index].descripcion
            this.ActualizarPrecio=this.productos[index].precio
        },
        actualizar:function(index){
            if(this.ActualizarNombre!=''){
                if(this.ActualizarDescripcion!=''){
                    if(this.ActualizarPrecio!='' && parseInt(this.ActualizarPrecio)>0){
                        this.productos[index].nombre=this.ActualizarNombre
                        this.productos[index].descripcion=this.ActualizarDescripcion
                        this.productos[index].precio=this.ActualizarPrecio
                        
                    }

                }
            }
          this.editIndex = -1;  
        }

    }

})
let articulos=[
    {nombre:"bici",costo:3000  },
    {nombre:"tv",costo:2500  },
    {nombre:"libro",costo:320  },
    {nombre:"celular",costo:5000 },
    {nombre:"laptop",costo:10000  },
    {nombre:"silla",costo:2500  },
    {nombre:"audifonos",costo:2000}
]

let articulosFiltrados=articulos.filter(function(articulo){return articulo.costo<=1000});
let nombreArticulos=articulos.map(function(articulo){return articulo.nombre})
let encuentraArticulo=articulos.find(function(articulo){return articulo.nombre === "laptop"})
articulos.forEach(function(articulo){console.log(articulo.nombre)})
let articulosBaratos=articulos.some(function(articulo){
    return articulo.costo<=2000
    })
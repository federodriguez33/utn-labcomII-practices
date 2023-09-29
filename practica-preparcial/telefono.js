let calculatePrice = function(){

    dato1 = document.getElementById("capacidad");
    capacidad = dato1.value;

    if (capacidad == "128-GB"){
        
        precio_capacidad = 150000;
    }
    else if (capacidad == "256-GB"){
        
        precio_capacidad = 165000;
    }
    else{

        precio_capacidad = 180000;
    }

    dato2 = document.getElementById("cantidad");
    cantidad = dato2.value;
    

    precio_total = precio_capacidad * cantidad;
    document.getElementById("result").innerText = "Precio: $" + precio_total;

}

let changeProductImage = function(){

    color = document.getElementById("color").value;
    let imagen = document.getElementById("imagen_element");

    switch (color) {
        case "grafito":
            imagen.setAttribute("src", "img/grafito.webp");
            break;
        case "sierra":
            imagen.setAttribute("src", "img/sierra.jpg");
            break;
        case "silver":
            imagen.setAttribute("src", "img/silver.webp");
            break;
        case "gold":
            imagen.setAttribute("src", "img/gold.jpg");
            break

        default:

    }
}



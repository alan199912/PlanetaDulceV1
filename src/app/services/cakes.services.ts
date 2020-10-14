import { Injectable } from "@angular/core";

@Injectable()
export class CakeService {

    private cakes:Cake[] = [
        {
            name: "Alfajores",
            description: "Alfajores a base de maicena, rellenos de dulce de leche y coco rayado.Este alfajor es una de las máximas delicias latinoamericanas. La suavidad de su masa, junto con el dulce de leche, forman una combinación explosiva. Se compone de dos tapas a base de maicena rellenas de abundante dulce de leche y coco rallado en su alrededor.Contiene 6 unidades de 8 cm de diámetro. Peso aproximado 220 gramos cada uno.",
            img: "../../assets/img/cakes/alfajores.jpeg",
            type: "Alfajores"
        },
        {
            name: "Brownie",
            description: "Producto semiesponjoso cuadrado en empaque individual, con adición de cocoa, opcional relleno de arequipe y cubierta de chocolate.",
            img: "../../assets/img/cakes/brownie.jpeg",
            type: "Bizcochuelo"
        },
        {
            name: "Lemon Pie",
            description: "Este pastel es una combinación deliciosa de base crujiente de galletas o de masa brisa, también llamada masa quebrada, con un relleno muy cremoso con sabor y aroma de limones frescos y una superficie de nubes cremosas de merengue.",
            img: "../../assets/img/cakes/lemonPie.jpeg",
            type: "Tarta"
        },
        {
            name: "Ricotta",
            description: "La torta de ricotta es exquisita. Una masa crocante pero tierna a la vez, una crema de ricotta y dulce de leche que la hace única.",
            img: "../../assets/img/cakes/ricota.jpg",
            type: "Ricotta"
        },
        {
            name: "Mini Ricotta",
            description: "La torta de ricotta es exquisita. Una masa crocante pero tierna a la vez, y una crema de ricotta aromatizada con ralladura de naranja que la hace única. En Proporcion mas chica ",
            img: "../../assets/img/cakes/miniRicota.jpg",
            type: "Ricotta"
        },
        {
            name: "PastaFrola",
            description: "La pastafrola consiste en una masa de tarta esponjosa, rellena con dulce de batata o membrillo derretido y decorada con unas tiras de masa. ",
            img: "../../assets/img/cakes/pastafrola.jpeg",
            type: "tarta"
        },
        {
            name: "Strawberry Pie",
            description: "Exquisita tarta de frutilla frescas. Masa sablée, crema chantilly, frutillas y decoración de merengue italiano.",
            img: "../../assets/img/cakes/strawberrypie.jpeg",
            type: "Tarta"
        },
        {
            name: "Tarta Frutal",
            description: "Exquisita tarta de frutilla frescas. Masa sablée, crema chantilly, frutillas, Duraznos, Kiwis y decoración de merengue italiano.",
            img: "../../assets/img/cakes/tartaFrutal.jpg",
            type: "Tarta"
        },
        {
            name: "Tarta Toffee",
            description: "Tarta de chocolate , masa sablée, dulce de leche y ganache de chocolate como cobertura.",
            img: "../../assets/img/cakes/tortaTofi.jpeg",
            type: "Tarta"
        },
        {
            name: "Postre de frutilla",
            description: "Postres en pote realizados con productos de primera calidad,su capacidad es de 250cc. Gusto de frutilla y crema",
            img: "../../assets/img/cakes/postreFrutilla.jpg",
            type: "Postre"
        },
        {
            name: "Postre de Chocotorta",
            description: "Postres en pote realizados con productos de primera calidad,su capacidad es de 250cc. Gusto de chocotorta",
            img: "../../assets/img/cakes/postreChocolate.jpg",
            type: "Postre"
        },
        {
            name: "Torta Boke",
            description: "Torta de cumpleaños personalizada con el escudo de Boca Juniors, con fondant, y dulce de leche",
            img: "../../assets/img/cakes/boke.jpeg",
            type: "Cumpleaños"
        },
        {
            name: "Torta número",
            description: "Torta de un número personalizada con ingredientes caramelizados y productos dulces",
            img: "../../assets/img/cakes/tortaNumero.jpeg",
            type: "Cumpleaños"
        },
        {
            name: "Torta Cumpleaños",
            description: "Torta de cumpleaños personalizada",
            img: "../../assets/img/cakes/tortaCumpleaños.jpeg",
            type: "Cumpleaños"
        }
    ];

    constructor() {
        console.log("LISTOOO")
    }

    getCakes():Cake[]{
        return this.cakes;
    }

    getCake( idx: string ) {
      return this.cakes[idx];
    }

}

export interface Cake {
    name: string;
    description: string;
    img: string;
    type: string;
}
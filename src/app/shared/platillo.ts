import { Comentario } from '../shared/comentario';

export class Platillo {
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    comentario: Comentario[]
}
import { View } from "./view.js";

export class MensagemView extends View<string>{
    //como view tem o tipo generico T, precisa passar qual tipo é para a classe esperar    

    protected template(model: string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `
    }
    
}
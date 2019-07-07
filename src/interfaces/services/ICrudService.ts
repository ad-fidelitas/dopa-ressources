import { IRessource } from '../IRessource';

export interface ICrudService<Ressource extends IRessource> {
    fetch(id: string): Promise<Ressource>;
    create(ressource: Ressource): Promise<Ressource>;
    update(id: string, ressource): Promise<Ressource>;
    patch(id: string, partial: Partial<Ressource>): Promise<Ressource>;
    delete(id: string ): Promise<Ressource>;
}

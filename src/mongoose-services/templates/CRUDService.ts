import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TypegooseDocument } from 'src/mongoose-services/database/usefulTypes';

import { IRessource } from 'src/interfaces/IRessource';
import { ICrudService } from 'src/interfaces/services/ICrudService';

// Review
@Injectable()
export class CRUDService<Ressource extends IRessource> implements ICrudService<Ressource> {

    constructor(@Inject() private model: Model<Ressource & TypegooseDocument>) {/* */}

    public async create(createRessourceDto: Ressource): Promise<Ressource & TypegooseDocument> {
        return await this.model.create(createRessourceDto);
    }

    public async fetch(id: string): Promise<Ressource & TypegooseDocument> {
        return this.model.findById(id).exec();
    }

    async delete(id: string): Promise<Ressource & TypegooseDocument> {
        return this.model.findByIdAndDelete(id).exec();
    }

    async update(id: string, createRessourceDto: Ressource): Promise<Ressource & TypegooseDocument> {
        return this.model.update(id, createRessourceDto).exec();
    }

    async patch(id: string, patchRessourceDto: Partial<Ressource>): Promise<Ressource & TypegooseDocument> {
        return this.model.update(id, patchRessourceDto).exec();
    }
}

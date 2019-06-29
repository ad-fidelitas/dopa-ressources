import { Model } from 'mongoose';
import { IRessource } from '../interfaces/IRessource';
import { Inject, Injectable } from '@nestjs/common';
import { Typegoose } from 'typegoose';

@Injectable()
export class CRUDService<TypegooseObject extends Typegoose> {

    constructor(@Inject() private model: Model<TypegooseObject & Document>) {/* */}

    public async create(createIngredientDto: IRessource): Promise<TypegooseObject & Document> {
        return await this.model.create(createIngredientDto);
    }

    public async fetch(id: string): Promise<TypegooseObject & Document> {
        return this.model.findById(id).exec();
    }

    async destroy(id: string): Promise<TypegooseObject & Document> {
        return this.model.findByIdAndDelete(id).exec();
    }

    async update(id: string, createIngredientDto: IRessource): Promise<TypegooseObject & Document> {
        return this.model.update(id, createIngredientDto).exec();
    }
}

import { Injectable } from '@nestjs/common';
import { IRessource } from 'src/interfaces/IRessource';

@Injectable()
export class IdGen {
    static genId() {
        return Date().toLocaleString();
    }

    static writeToRessource(ressource: IRessource) {
        ressource._id = IdGen.genId();
    }
}

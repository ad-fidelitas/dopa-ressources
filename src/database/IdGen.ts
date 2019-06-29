import { IRessource } from 'src/interfaces/IRessource';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IdGen {
    static genId() {
        return Date().toLocaleString();
    }

    static writeToRessource(ressource: IRessource) {
        ressource._id = IdGen.genId();
    }
}

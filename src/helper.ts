import figlet from 'figlet';
import util  from 'util'
export class CliHelper {
    constructor() {

    }
    static sleep(ms = 2000) { 
        return new Promise((r) => setTimeout(r, ms)); 
    }
    static figletPromise = util.promisify(figlet)
}
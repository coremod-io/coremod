import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';
export declare class CreateUsers implements Seeder {
    run(factory: Factory, connection: Connection): Promise<any>;
}

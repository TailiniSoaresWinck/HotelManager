import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'senha_master',
    database: 'hotelmanager',
    synchronize: true, 
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
};

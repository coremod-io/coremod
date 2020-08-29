import { spawn } from 'coremod/dist/cli/helpers';

export async function seedDev(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        '--ignore', '"node_modules/(?!@?coremod)"',
        'node_modules/typeorm-seeding/dist/cli.js',
        'seed',
        '-c', 'development'
    ], {});
}

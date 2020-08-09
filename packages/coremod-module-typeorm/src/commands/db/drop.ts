import { spawn } from 'coremod/cli/helpers';

export async function drop(argv) {
    await spawn('ts-node', [
        '-r', 'tsconfig-paths/register',
        'node_modules/typeorm/cli.js',
        'schema:drop'
    ], {});
}
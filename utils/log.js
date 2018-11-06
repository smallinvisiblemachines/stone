'use strict';

// IMPORTS
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import emoji from 'node-emoji';
import moment from 'moment';

export function error( name, msg ) {
  console.log(`${chalk.bold.red('Error:')} ${chalk.bold(name)}`);
  console.log(msg);
};

export function success( name, msg ) {
  console.log(`${chalk.bold.green('Success:')} ${chalk.bold(name)}`);
  console.log(msg);
};

export function info( name, msg ) {
  console.log(`${chalk.bold.cyan('Info:')} ${chalk.bold(name)}`);
  console.log(msg);
};


export function welcome( server, config ) {
  clear();

  console.log(
    chalk.gray(
      figlet.textSync( config.title, {
        horizontalLayout: 'universal smushing',
        verticalLayout: 'universal smushing',
        font: 'Graffiti',
      })
    )
  );

  console.log(
    chalk.bold(config.title),
    emoji.get(config.emoji),
    chalk.gray('server started at'),
    chalk.green(`${server.info.protocol}://${server.info.address}:${server.info.port}`),
    chalk.gray(`on`),
    chalk.magenta(`${moment().format('h:mm:ss A - ddd Do of MMM')}`)
  );
};
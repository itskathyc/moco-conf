import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';
import * as winstonDaily from 'winston-daily-rotate-file';

const dailyOption = (level: string) => {
  return {
    level,
    datePattern: 'YYYY-MM-DD-HH',
    frequency: '1h',
    dirname: `./logs/${level}`,
    filename: `%DATE%.${level}.log`,
    format: winston.format.combine(
      winston.format.timestamp(),
      utilities.format.nestLike('mococo-aca', {
        colors: false,
        prettyPrint: true,
      }),
    ),
  };
};

export const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike('moco-conf', {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),
    new winstonDaily(dailyOption('warn')),
    new winstonDaily(dailyOption('info')),
  ],
});

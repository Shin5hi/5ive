const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};

class Logger {
  constructor(level = 'info') {
    this.level = LOG_LEVELS[level] || LOG_LEVELS.info;
  }

  formatMessage(level, ...args) {
    const timestamp = new Date().toISOString();
    const levelStr = level.toUpperCase().padEnd(5);
    return `[${timestamp}] [${levelStr}]`;
  }

  debug(...args) {
    if (this.level <= LOG_LEVELS.debug) {
      console.log(this.formatMessage('debug'), ...args);
    }
  }

  info(...args) {
    if (this.level <= LOG_LEVELS.info) {
      console.log(this.formatMessage('info'), ...args);
    }
  }

  warn(...args) {
    if (this.level <= LOG_LEVELS.warn) {
      console.warn(this.formatMessage('warn'), ...args);
    }
  }

  error(...args) {
    if (this.level <= LOG_LEVELS.error) {
      console.error(this.formatMessage('error'), ...args);
    }
  }
}

export default new Logger(process.env.LOG_LEVEL || 'info');

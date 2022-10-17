import chalk from 'chalk'

export const serverPrettyUrl = (PORT: string) => {
    const url = `${chalk.cyan('http://localhost:')}${chalk.bold.cyan(PORT)}${chalk.cyan('/')}`
    return `  ${chalk.green('➜')}  ${chalk.bold('Server')}:  ${url}`
}

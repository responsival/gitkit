const logger = require('node-color-log');
const execa = require('execa');

async function startGitKit() {
	const command = process.argv[2];

	if (!command) {
		logger.error('No command provided. Try /help for details.')
		return;
	}

	logger.info(`Running 'gitkit ${command}'...`)

	switch(command) {
		case 'check':
			await runCheck();
			break;
		case 'configure':
			startConfigure();
			break;
		case 'help':
			startHelp();
			break;
		case 'pull':
			startPull();
			break;
		case 'push':
			startPush();
			break;
		case 'watch':
			startWatch();
			break;
		default:
			logger.error(`'${command}' is not a valid command. Try /help for details.`)
			break;
	}
}

/**
 * startCheck() - will check to see if the CWD is healthy for gitkit to continue
 * Check if git is initialized. It should be
 * `theme download` will grab the theme, and will not pull unchanged files
 * Use ^ to download theme to temp directory and compare with CWD to ensure files are the same
 * If so, return true.
 * If not, determine ask if they want to run a diff
 * If any applicable command is run with --safe then this is will be run prior to that command running
 */
async function runCheck() {
	const {stdout} = await execa('git', ['status']);
	console.log(stdout);
	console.log('--');
	(await execa('git', ['status'])).stdout.pipe(process.stdout);

}
function startConfigure() {

}
function startHelp() {

}
function startPull() {

}
function startPush() {

}
function startWatch() {

}

module.exports = startGitKit;
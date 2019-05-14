const expect = require('chai').expect;
const path = require('path')
const barista = require('seed-barista');
const fs = require('fs');

describe('harry component styles', function () {
	it('should render a class of wizard + harry', function () {
		const file = path.resolve(__dirname, '../src/sass/wizard.scss');
		const styles = fs.readFileSync(file, 'utf8');
		console.log(styles);

		// const output = barista({ file: path.resolve(__dirname, '../src/sass/wizard.scss') });
		const output = barista({ content: styles });
		const rule = output.rule('.your-a-wizard.harry');

		expect(rule.exists()).to.be.true;
		expect(rule.prop('background')).to.equal('red');
		expect(rule.prop('color')).to.equal('yellow');
	});
});
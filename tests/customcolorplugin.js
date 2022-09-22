import CustomColorPlugin from '../src/customcolorplugin';

describe('CustomColorPlugin', () => {
	it('should be named', () => {
		expect(CustomColorPlugin.pluginName).to.equal('CustomColorPlugin');
	});
});

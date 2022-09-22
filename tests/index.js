import { CustomColorPlugin as MyPluginDll, icons } from '../src';
import CustomColorPlugin from '../src/customcolorplugin';

import ckeditor from './../theme/icons/ckeditor.svg';

describe('CKEditor5 CustomColorPlugin DLL', () => {
	it('exports CustomColorPlugin', () => {
		expect(MyPluginDll).to.equal(CustomColorPlugin);
	});

	describe('icons', () => {
		it('exports the "ckeditor" icon', () => {
			expect(icons.ckeditor).to.equal(ckeditor);
		});
	});
});

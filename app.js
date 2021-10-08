import {BundleWindows32} from '@shockpkg/swf-projector';

async function main() {
	const bundle = new BundleWindows32('bundle-windows32/application.exe');

	// Use projector property to set options.
	bundle.projector.removeCodeSignature = true;
	bundle.projector.patchWindowTitle = 'Rabbit Hunter sucks'
	// bundle.projector.iconFile = 'icon.ico'

	await bundle.withFile('bundled/flashplayer_32_sa.exe', 'bundled/RabbitHunter.swf', async b => {
		// Add resources in callback.
		// await b.copyResource('other.swf', 'other.swf');
	});
}

await main();

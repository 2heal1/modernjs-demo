const pBtoa =require('btoa') ;

class InjectChunkPlugin {
    apply(compiler){
        const code = `
        if(typeof module !== 'undefined') {
        globalThis.entryChunkCache = globalThis.entryChunkCache || new Set();
        module.filename && globalThis.entryChunkCache.add(module.filename);
        if(module.children) {
        module.children.forEach(function(c) {
          c.filename && globalThis.entryChunkCache.add(c.filename);
        })
}
      }
        `;
		const base64Code = pBtoa(code);
		const dataUrl = `data:text/javascript;base64,${base64Code}`;

		compiler.hooks.afterPlugins.tap('VmokRemoteEntryPlugin', () => {
			new compiler.webpack.EntryPlugin(compiler.context, dataUrl, {
				name: this._name,
			}).apply(compiler);
		});
    }
}
module.exports = InjectChunkPlugin

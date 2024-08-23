import { appTools, defineConfig } from '@modern-js/app-tools';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    writeToDisk: true,
  },
  runtime: {
    router: true,
  },

  plugins: [appTools({ bundler: 'experimental-rspack' })],
  tools: {
    rspack(config) {
      delete config.optimization!.runtimeChunk;
      config.plugins?.push(
        new ModuleFederationPlugin({
          name: 'provider',
          filename: 'remoteEntry.js',
          shared: {
            'external-package-version-display': '2.1.4',
            'external-package-version-display-2': '1.0.0',
          },
          remotes: {
            'mfe-remote-2': 'mfe_remote_2@http://localhost:3002/remoteEntry.js',
          },
          exposes: {
            './bootstrap': './src/routes/page.tsx',
          },
        }),
      );
    },
  },
});

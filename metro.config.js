const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

const defaultResolveRequest = config.resolver.resolveRequest;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === 'web') {
    if (moduleName === 'zustand') {
      return context.resolveRequest(context, 'zustand/index.js', platform);
    }
    if (moduleName.startsWith('zustand/')) {
      const subpath = moduleName.replace('zustand/', '');
      return context.resolveRequest(context, `zustand/${subpath}.js`, platform);
    }
  }
  
  if (defaultResolveRequest) {
    return defaultResolveRequest(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativewind(config);

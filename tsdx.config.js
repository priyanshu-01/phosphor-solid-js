module.exports = {
  rollup(config, opts) {
    console.log(config);
    if (opts.format === "esm") {
      config = { ...config, preserveModules: true };
      config.output = {
        ...config.output,
        dir: "dist/",
        entryFileNames: "[name].esm.js",
      };
      delete config.output.file;
    }
    return config;
  },
};

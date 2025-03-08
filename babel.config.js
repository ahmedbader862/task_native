module.exports = {
  presets: ['module:@react-native/babel-preset', "nativewind/babel"],

  plugins: [["module-resolver", {
    root: ["./"],
    extensions: [".js", ".ts", ".tsx", ".jsx"],

    alias: {
      "@": "./",
      "tailwind.config": "./tailwind.config.js"
    }
  }]]
};
// module.exports = {
//   presets: ["module:metro-react-native-babel-preset"],
//   plugins: [
//     "nativewind/babel",
//     [
//       "module-resolver",
//       {
//         root: ["./"],
//         extensions: [".js", ".ts", ".tsx", ".jsx"],
//         alias: {
//           "@": "./",
//           "tailwind.config": "./tailwind.config.js",
//         },
//       },
//     ],
//   ],
// };

